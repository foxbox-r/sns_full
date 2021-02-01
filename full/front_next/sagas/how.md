# cors 문제

클라이언트에서 AJAX 요청을 보내는데 갑자기 다음과 같은 에러가 뜰 때가 있습니다. 같은 요청이더라도 서버에서 서버로 보냈을 때는 되는데 브라우저에서 서버로 보내는 것은 안 되니 당황스러울 것입니다.
보안상의 이유로 브라우저들이 다른 도메인에게 XHR 요청을 보내는 것을 제한한 것입니다. 다행히 피해갈 수 있는 방법이 있습니다. 하지만 클라이언트 쪽에서는 힘들고 응답을 받는 서버쪽에서 해결해야 합니다. 클라이언트는 누군지 모르니까 클라이언트의 요청을 함부로 믿을 수 없는 탓이겠지요. 제가 아무리 스택오버플로우에 XHR 요청을 보내려해봐도 스택오버플로우가 저를 CORS 허용 목록에 추가하지 않는 이상 되지 않는 것입니다.
```
const cors = require("cors");
app.use(cors());
```
단, cors()의 경우에는 모든 요청 오리진을 허용하는 것이기 때문에 위험하니 cors({ origin: 허용 오리진 주소 })처럼 일부 허용할 주소를 넣는 게 좋습니다. cors({ origin: 'https://www.zerocho.com' }) 이런 식으로요.

익스프레스를 쓰지 않더라도, 서버가 노드가 아니더라도 기본적인 원리는 간단합니다. 요청 응답 헤더에 Access-Control-Allow-Origin: '*'을 넣어주면 됩니다. '*'은 모든 요청 오리진을 허용하는 것이기 때문에 위험하니 이 부분만 허용하는 오리진으로 바꿔주면 되겠죠.

노드의 경우는 res.writeHead(200, { 'Access-Control-Allow-Origin': '*' }); 이렇게 하면 됩니다. 다른 서버도 응답 헤더를 다음과 같이 바꿔줍시다.

자세한 내용은 https://www.zerocho.com/category/NodeJS/post/5a6c347382ee09001b91fb6a 

# 다른 도메인간 쿠키 전송하기(axios와 express 예제)
백엔드와 프론트엔드의 도메인 주소가 다른 경우가 많습니다. 이는 localhost인 경우에도 마찬가지입니다. 포트가 다르면 다른 주소로 칩니다. 이들간에는 쿠키 전송이 되지 않으므로 로그인이 유지되지 않아서 당황하시는 경우가 많습니다. 특히 개발자도구 Network 탭에서 Response Header에 Set-Cookie는 있는데 Application 탭에서 Cookie를 체크해보면 뜨지 않아서 어디가 문제인지 난처한 경우가 있습니다.

이럴 때 요청/응답 헤더를 적절하게 설정해주면 다른 도메인이더라도 쿠키가 전송됩니다.

먼저 프론트에서 ajax 요청을 보낼 때 withCredentials를 설정해주어야 합니다.

응답 헤더로 Access-Control-Allow-Credentials 옵션도 설정해주셔야 쿠키가 전송됩니다.
```
const cors = require('cors');

app.use(cors({
  origin: true,
  credentials: true
}));
```

origin: true는 프론트 도메인 주소가 자동으로 Access-Control-Allow-Origin에 들어갑니다. 와일드카드인 *와는 다릅니다. credentials는 Access-Control-Allow-Origin을 true로 만들어주는 옵션입니다.

cors 모듈을 사용하지 않더라도 라우터에서 응답 헤더를 직접 넣어주시면 됩니다. 

```
res.setHeader('Access-Control-Allow-Origin', 'localhost:3000');
res.setHeader('Access-Control-Allow-Credentials', 'true'); 
```