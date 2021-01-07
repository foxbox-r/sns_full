const router = require("express").Router();
const db = require("../models");
const {User,Post} = db;
const bcrypt =  require("bcrypt");
const passport = require("passport");
const {isLoggedIn,isNotLoggedIn} = require("./middlewares")

router.get("/",async (req,res,next)=>{
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

// passport.authenticate(전략종류,로컬전략에서 받은 값을 메게로 한 콜백)

router.post("/login",isNotLoggedIn,(req,res,next)=>{
    //authenticate => 전략실행함수 반화
    passport.authenticate("local",(serverError,user,clientError)=>{//전략에서 done함수의 인자(서버에러,유저여부,클라이언트에러)를 받아사용
        if(serverError){
            console.error(serverError);
            return next(serverError);
        }

        if(clientError){//401 비인증
            return res.status(401).send(clientError.reason);
        }

        //passport 가 실행됨 passport/index.js
        return req.login(user,async (loginErr) => {

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

module.exports = router;