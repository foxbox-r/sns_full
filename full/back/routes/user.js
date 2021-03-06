const router = require("express").Router();
const db = require("../models");
const {User,Post,Comment,Image} = db;
const bcrypt =  require("bcrypt");
const passport = require("passport");
const {isLoggedIn,isNotLoggedIn} = require("./middlewares");
const {Op} = require("sequelize");

// load my info
router.get("/",async (req,res,next)=>{
    console.log(req.headers);
    try{
        if(req.user){
            const user = await User.findOne({
                where:{id:req.user.id},
                attributes:{
                    exclude:["password"],
                },
                include:[{
                    model:Post,
                    attributes:["id"],
                },{
                    model:User,
                    as:"Followings",
                    attributes:["id"],
                },{
                    model:User,
                    as:"Followers",
                    attributes:["id"],
                }]
            });
            res.status(200).json(user);
        }else{
            res.status(200).json(null);
        }
    } catch(error){
        console.error(error);
        next(error);
    }
})

// sign up user
router.post("/",async (req,res,next)=>{// POST /user/ //{req:{email,password,nickname}}
    try{
        const exUser = await User.findOne({
            where:{
                email:req.body.email,
            }
        })
        if(exUser){
            return res.status(403).send("이미 사용중인 아이디입니다.");
        }    
        const hashedPassword = bcrypt.hashSync(req.body.password,9);//숫자가 높을수록 보안이 높아짐 / 너무 높으면 시간이 많이 걸림  
        await User.create({
                email:req.body.email,
                nickname:req.body.nickname,
                password:hashedPassword, 
            });
        res.status(200).send("ok"); 
    } catch(err){
        next(err);//500 server error
    }
})

// passport.authenticate(전략종류,로컬전략에서 받은 값을 메게로 한 콜백)

router.post("/login",isNotLoggedIn,(req,res,next)=>{
    console.log("1.user Login res");
    //authenticate => 전략실행함수 반화
    passport.authenticate("local",(serverError,user,clientError)=>{//전략에서 done함수의 인자(서버에러,유저여부,클라이언트에러)를 받아사용
        console.log("3. local after function ")
        if(serverError){
            console.error(serverError);
            return next(serverError);
        }

        if(clientError){//401 비인증
            return res.status(401).send(clientError.reason);
        }

        //passport 가 실행됨 passport/index.js
        return req.login(user,async (loginErr) => {
            console.log("5. index after function");
            if(loginErr){
                console.error(loginErr);
                return next(loginErr);
            }

            const fullUserWithoutPassword = await User.findOne({
                where:{id:user.id},
                attributes:{
                    exclude:["password"],    // password 제외
                },
                include:[{  // many 관계에서 사용
                    model:db.Post,
                    attributes:["id"],
                },{
                    model:db.User,
                    as:"Followings",    // model 에서 as를 사용했으면 include 할때도 as필요
                    attributes:["id"],
                },{
                    model:db.User,
                    as:"Followers",
                    attributes:["id"],
                }]
            })

            return res.status(200).json(fullUserWithoutPassword);
        });

    })(req,res,next);
});

router.post("/logout",isLoggedIn,(req,res,next)=>{
    req.logout();
    req.session.destroy();
    res.send("ok");
})

router.patch("/nickname",isLoggedIn,async (req,res,next)=>{
    try{
        await User.update({
            nickname:req.body.nickname,
        },{
            where:{id:req.user.id}
        });

        res.status(200).json({nickname:req.body.nickname})
    } catch(error){
        console.error(error);
        next(error);
    }
})

router.get("/followers",isLoggedIn,async (req,res,next)=>{
    try{
        const me = await User.findOne({where:{id:req.user.id}});
        if(!me){
            res.status(403).send("me 없음")
        }
        const followers = await me.getFollowers(
            {
                limit:parseInt(req.query.limit),
            }
        );
        res.status(200).json(followers)
    } catch(error){
        console.error(error);
        next(error);
    }
})

router.get("/followings",isLoggedIn,async (req,res,next)=>{
    try{

        const me = await User.findOne({where:{id:req.user.id}})

        if(!me){
            res.status(403).send("me 없음")
        }
        const getFollowings = await me.getFollowings(
            {
                limit:parseInt(req.query.limit),
            }
        );
        res.status(200).json(getFollowings)
    } catch(error){
        console.error(error);
        next(error);
    }
})

router.delete("/follower/:userId",isLoggedIn,async (req,res,next)=>{
    try{    // 차단할 유저
        const user = await User.findOne({where:{id:req.params.userId}})
        if(!user){
            res.status(403).send("user 없음")
        }
        await user.removeFollowings(req.user.id);   // 유저가 날 언팔로우 함
        res.status(200).json({userId:parseInt(req.params.userId)})
    } catch(error){
        console.error(error);
        next(error);
    }
})

router.get('/:UserId/posts',async (req,res,next)=>{    // GET /user/:UserId/posts
    try{
        const where = {UserId:parseInt(req.params.UserId)};
        if(parseInt(req.query.lastId)){   // 0이 아닐때 ,초기로딩이 아닐 때
            // [Op.lt] 보다 작은 (where id < lastId)
            where.id = {[Op.lt]:parseInt(req.query.lastId)}
        }; // 내림차순 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1
        const posts = await Post.findAll({
            where,
            limit:10,   // 가져오는 개수    
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
        res.status(200).json(posts);
    } catch(error){
        console.error(error);
        next(error);
    }
})


router.patch("/:userId/follow",isLoggedIn,async (req,res,next)=>{
    try{
        const user = await User.findOne({where:{id:req.params.userId}})
        if(!user){
            res.status(403).send("없는사용자를 팔로우 하려 합니다.")
        }
        await user.addFollowers(req.user.id);
        res.status(200).json({userId:parseInt(req.params.userId)})
    } catch(error){
        console.error(error);
        next(error);
    }
})

router.delete("/:userId/follow",isLoggedIn,async (req,res,next)=>{
    try{
        const user = await User.findOne({where:{id:req.params.userId}})
        if(!user){
            res.status(403).send("없는사용자를 언팔로우 하려 합니다.")
        }
        await user.removeFollowers(req.user.id);
        res.status(200).json({userId:parseInt(req.params.userId)})
    } catch(error){
        console.error(error);
        next(error);
    }
})

// load user
router.get("/:UserId",async (req,res,next)=>{
    try{
        const fullUserWithoutPassword = await User.findOne({
            where:{id:parseInt(req.params.UserId)},
            attributes:{
                exclude:["password"],
            },
            include:[{
                model:Post,
                attributes:["id"],
            },{
                model:User,
                as:"Followings",
                attributes:["id"],
            },{
                model:User,
                as:"Followers",
                attributes:["id"],
            }]
        });
        if(fullUserWithoutPassword){
            const data = fullUserWithoutPassword.toJSON(); //json 변환
            // Posts,Followings,Followers 의 {id} 조차도 개인정보의 문제가 있을수 있으므로 개수만 넘김
            data.Posts = data.Posts.length;
            data.Followings = data.Followings.length;
            data.Followers = data.Followers.length;
            
            res.status(200).json(data);
        } else{
            res.status(404).send("존재하지 않는 아이디 입니다.");
        }
    } catch(error){
        console.error(error);
        next(error);
    }
});

module.exports = router;