const postRouter = require("./routes/post");
const userRouter = require("./routes/user");

const express = require("express");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const dotenv = require("dotenv");

dotenv.config();

const db = require("./models");
const passportConfig = require("./passport")

const app = express();
const port = 3065;

//에러 뜨면  npx sequelize db:create
db.sequelize.sync()
.then(()=>{
    console.log("db 연결 성공");
})
.catch(console.error);

passportConfig();

app.get('/',(req,res)=>{
    res.send('hello express');
})

app.use(cors({
    origin:true,// or "http://localhost:3060" (근데 주소로 하면 안됌)
    credentials:true,
}));

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


// get 가져오다
// postput 생성하다
// put 전체 수정
// delete 제거
// patch 부분 수정
// options 찔러보기
// head 헤더

app.get('/api',(req,res)=>{
    res.send("hello api");
})

app.get("/api/posts",(req,res)=>{
    res.json([
        {id:1,content:"hello"},
        {id:2,content:"hello2"},
        {id:3,content:"hello3"},
    ])
})

app.use("/post",postRouter);
app.use("/user",userRouter);

app.listen(port,()=>{
    console.log("==============================");console.log("");
    console.log(`server runs at => localhost:${port}`);
    console.log("");console.log("==============================");
})