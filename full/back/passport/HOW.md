# passport 가이드 

1. 미들웨어등록 (initialize,session)
2. 로컬전략 만들기
3. serial,deserial
4. 사용

# 1. 미들웨어등록 (initialize,session)
```
const passport = require("passport");

app.use(express.json());//json 형식으로 보내는 요청을 req.body에 넣음
app.use(express.urlencoded({extended:true}));//form 형식으로 보내는 요청을 req.body에 넣음
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    saveUninitialized:false,
    resave:false,
    secret:process.env.COOKIE_SECRET,
}));
app.use(passport.initialize());
app.use(passport.session());
```
쿠키,세션,패스.init,패스.session 순으로 등록

# 2. 로컬전략 만들기
```
const passport = require("passport");
const {Strategy:LocalStrategy} = require("passport-local");

()=>{
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
```
# 3. serial,deserial
```
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
```
시리얼 : 처음 로그인 성공유저 데이터를 받아와서 식별자를 세션에 저장
디시리얼 : 세션에 저장된 식별자로 데이터를 찾고 요청이 올때마다 보낸다.

# 4. 사용 req.login()
```
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
                    ...
                }]
            })

            return res.status(200).json(fullUserWithoutPassword);
        });

    })(req,res,next);
});
```
req.login(user,callback)
login함수의 첫번째 인자는 passport.serialize 함수로 감 

# 순서

유저 로그인 => passport.authenticate("local",after함수) => 로컬전략 => after함수 => req.login(user,after함수2) => passport.seriallize 함수실행 => after함수2 
