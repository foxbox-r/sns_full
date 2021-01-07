const passport = require("passport");
const local = require("./local");
const {User} = require("../models");

module.exports = ()=>{

    //처음일때 cookie에 sessionId 저장
    passport.serializeUser((user,done)=>{
        console.log("serial",user.id)
        done(null,user.id); // user.id 가 세션에 저장
    })

    //쿠기가 있을때 (사용자 정보 복구)
    passport.deserializeUser(async (id,done)=>{
        try{
            const user = await User.findOne({where:{id}});
            done(null,user);// req.user 에 user를 저장
        } catch(error){
            console.error(error);
            done(error);
        }
    })

    local();
}