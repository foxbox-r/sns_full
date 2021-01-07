const passport = require("passport");
const {Strategy:LocalStrategy} = require("passport-local");
const {User} = require("../models")
const bcrypt = require("bcrypt");

module.exports = ()=>{
    try{
        passport.use(new LocalStrategy({
            usernameField:"email",//req.body.email
            passwordField:"password",//req.body.password
        },async (email,password,done)=>{    // <= 위에서 지정한 usernameField,passwordField
            const user = await User.findOne({
                where:{email}
            });
            if(!user){//done(error,user,info);
                return done(null,false,{reason:"존재하지 않는 아이디입니다."});
            }
            
            const result = await bcrypt.compare(password,user.password);//return true or false
            
            if(result){
                console.log("success",user.email,user.id);
                return done(null,user);
            }
            return done(null,false,{reason:"비밀번호가 틀렸습니다."});
        }));
    } catch(err){
        console.error(err);
        return done(err);
    }
}