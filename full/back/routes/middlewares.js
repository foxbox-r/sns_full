exports.isLoggedIn = (req,res,next)=>{
    if(req.isAuthenticated()){
        next();     // next 의 파라미터가 있으면 에러처리미들웨어 실행하고 없으면 다음 미들웨로실행
                    // 에러처리 미들웨어는 내부적으로 알아서 존재 
                    // 커스텀에러 미들웨어 => app.use((err,req,res,next)=>{}); 인자가 4개임
    } else{
        res.status(401).send("로그인이 필요합니다.");
    }
}

exports.isNotLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){
        next();     // next 의 파라미터가 있으면 에러처리를 하고 없으면 다음 미들웨로실행
    } else{
        res.status(401).send("로그인을 한상태이지만 접근 가능.");
    }
}