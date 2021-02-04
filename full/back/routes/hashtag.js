const router = require("express").Router();
const db = require("../models");
const {User,Post,Hashtag,Comment,Image} = db;
const bcrypt =  require("bcrypt");
const passport = require("passport");
const {isLoggedIn,isNotLoggedIn} = require("./middlewares");
const {Op} = require("sequelize");


router.get('/:hashtag/posts',async (req,res,next)=>{    // GET /hashtag/:UserId/posts
    try{
        const where = {};
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
                model:Hashtag,
                where:{name:decodeURIComponent(req.params.hashtag)}
            },{
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

module.exports = router;