const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs")

const router = express.Router(); // /post
const {Post,Comment,Image,User, Hashtag} = require("../models");
const {isLoggedIn} = require("./middlewares")

try{
    fs.accessSync("uploads")
} catch(error){
    console.log("upload 폴더가 없으므로 생성함")
    fs.mkdirSync("uploads")
}

const upload = multer({
    storage:multer.diskStorage({
        destination(req,file,done){ 
            done(null,"uploads");
        },
        filename(req,file,done){  // foxboxr.png
            const ext = path.extname(file.originalname);    // .확장자 추출 (.png)
            const basename = path.basename(file.originalname,ext);  // 파일명 추출 foxboxr
            done(null,basename + "_" + new Date().getTime() + ext);   // foxboxr1610659701529.png <= 예시
        }
    }),
    limits : {fileSize:20 * 1025 * 1024},   // 20MB
})

// <input type="file" name="image" />
// upload.array("image") n개
// upload.single("image") 1개
// upload.none() 텍스트
router.post("/images",isLoggedIn,upload.array("image"),async (req,res,next)=>{
    console.log(req.files); // upload미들웨어에서 업로드한 파일정보
    res.json(req.files.map(v=>v.filename))
})

router.post("/",isLoggedIn,upload.none(),async (req,res,next)=>{
    try{
        const hashtag = req.body.content.match(/(#[^\s#]+)/g);
        const post = await Post.create({
            content:req.body.content,
            UserId:req.user.id,
        })

        if(hashtag){
            // findOrCreate 내용이 있으면 가져오고 없으면 생성
            const result = await Promise.all(hashtag.map(tag=>Hashtag.findOrCreate({
                where:{name:tag.slice(1).toLowerCase()},
            }))) // result = [["노드",true],["서버",true]]
            await post.addHashtags(result.map(v=>v[0]))
        }

        if(req.body.image){
            if(Array.isArray(req.body.image)){ // img를 두개이상 올린경우 image:[foxbox_11.png,rrr_23.png]
                // 배열에 프로미스들이 리턴돼서 한번에 await
                const images = await Promise.all(req.body.image.map((image)=>Image.create({src:image})))
                await post.addImages(images)
            } else{ // img를 하나만 올린경우 image:rrr_422.png
                const image = await Image.create({src:req.body.image})
                await post.addImages(image)
            }
        }

        const fullPost = await Post.findOne({
            where:{id:post.id},
            include:[{
                model:Image,
            },{
                model:Comment,
            },{
                model:User,
            },{
                model:User,
                as:"Likers",
                attributes:["id"]
            }]
        })

        res.status(201).json(fullPost);
    } catch(error){
        console.error(error);
        next(error);
    }   
})

router.delete("/:postId",isLoggedIn,async (req,res,next)=>{
    try{
        await Post.destroy({
            where:{
                id:req.params.postId,
                UserId:req.user.id, // 보안
            }
        })
        res.json({postId:parseInt(req.params.postId)})
    } catch(error){
        console.error(error);
        next(error);
    }
})



router.post("/:postId/comment",isLoggedIn,async (req,res,next)=>{  // /post/:postId/comment
    try{

        const post = await Post.findOne({
            where:{id:req.params.postId},
        })

        if(!post){
            return res.status(403).send("존재하지 않는 게시글입니다.");
        }
        
        const comment = await Comment.create({
            content:req.body.content,
            PostId:parseInt(req.params.postId),
            UserId:req.user.id
        })
        const fullComment = await Comment.findOne({
            where:{
                id:comment.id
            },
            include:[{
                model:User,
                where:{id:comment.UserId},
                attributes:["id","nickname"]
            }]
        });
        res.status(201).json(fullComment);
    } catch(error){
        console.error(error);
        next(error);
    }   
})

router.patch("/:postId/like",isLoggedIn,async (req,res,next)=>{  // 좋아요
    try{
        const post = await Post.findOne({
            where:{id:req.params.postId}
        })
        if(!post)
            return res.status(403).send("존재하지 않는 게시글입니다.");
        
        await post.addLikers(req.user.id);
        res.json({PostId:post.id,UserId:req.user.id})    
    } catch(error){
        console.error(error);
        next(error);
    }
});

router.delete("/:postId/like",isLoggedIn,async (req,res,next)=>{  // 좋아요 취소  
    try{
        const post = await Post.findOne({
            where:{id:req.params.postId}
        })
        if(!post)
            return res.status(403).send("존재하지 않는 게시글입니다.");
        post.removeLikers(req.user.id);
        res.json({PostId:post.id,UserId:req.user.id})
    } catch(error){
        console.error(error);
        next(error);
    }
});

router.post("/:postId/retweet",isLoggedIn,async (req,res,next)=>{  // /post/:postId/retweet
    try{

        const post = await Post.findOne({
            where:{id:req.params.postId},
            include:[{
                model:Post,
                as:"Retweet",
            }]
        })

        if(!post){
            return res.status(403).send("존재하지 않는 게시글입니다.");
        }
        
        if(req.user.id === post.UserId || (post.Retweet && post.Retweet.UserId === req.usre.id)){
            return res.status(403).send("자신의글은 리트윗할 수 없습니다.");
        }

        const retweetTargetId = post.RetweetId || post.id;
        const exPost = await Post.findOne({
            where:{
                UserId:req.user.id,
                RetweetId:retweetTargetId,
            }
        })

        if(exPost){
            return res.status(403).send("이미 리트윗했습니다.");
        }

        const retweet = await Post.create({
            UserId:req.user.id,
            RetweetId:retweetTargetId,
            content:"retweet"
        });

        const retweetWithPrevPost = await Post.findOne({
            where:{id:retweet.id},
            include:[{
                model:Post,
                as:"Retweet",
                include:[{
                    model:User,
                    attributes:["id","nickname"]
                },{
                    model:Image
                }]
            },{
                model:User,
                attributes:["id","nickname"],
            },{
                model:Image,
            },{
                model:Comment,
                include:[{
                    model:User,
                    attributes:["id","nickname"]
                }]
            },{
                model:User,
                as:"Likers",
                attributes:["id"]
            }]
        })

        res.status(201).json(retweetWithPrevPost);
    } catch(error){
        console.error(error);
        next(error);
    }   
})

router.get("/:PostId",isLoggedIn, async (req,res,next)=>{
    try{
        const post = await Post.findOne({
            where:{id:parseInt(req.params.PostId)},
        });

        if(!post){
            return res.status(400).send("존재하지 않는 게시글입니다.");
        }

       const fullPost = await Post.findOne({
           where:{id:post.id},
           order:[
                ["createdAt","DESC"],
                [Comment,"createdAt","DESC"]
            ],
            include:[{
                model:Post,
                as:"Retweet",
                include:[{
                    model:User,
                    attributes:["id","nickname"]
                },{
                    model:Image
                }]
            },{
                model:User,
                attributes:["id","nickname"]
            },{
                model:Image,
            },{
                model:Comment,
                include:[{
                    model:User,
                    attributes:["id","nickname"]
                }]
            },{
                model:User,
                as:"Likers",
                attributes:["id"]
            }]
        });

        return res.status(200).json(fullPost);

    } catch(error){
        console.error(error);
        return next(error);
    }
});

module.exports = router;