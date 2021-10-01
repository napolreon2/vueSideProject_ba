const PORT = 3300;

/* 
  Express
  라우팅 및 미들웨어 웹 프레임워크
*/
const express = require('express');
const app = express();
const cors = require('cors');

// Morgan(Logger)
const logger = require('morgan');

app.use(cors()); // CORS 미들웨어 등록(CORS 권한 모두 해제)

/**
 * 여기다 쓰니까 요청 일어날때마다 로그찍힌다..
 */
const logStr =  '==============================[Log]==============================\n' + 
                '응답시간 : :response-time ms \n' +
                '날짜/시간 : :date \n' +
                'Method : :method \n' +
                'URL : :url \n' +
                'HTTP STATUS : :status \n' +
                '==============================[Log]==============================';

                
app.use(logger(logStr), (req, res, next) =>{
  next(); // 다음 미들웨어 함수에 제어를 전달해야 한다!! 이거 안쓰면 다음 거는 실행이 안됨
});

// 사용할 router 모음
const routes = require('./routes');
app.use('/', routes);

/**
 * port, callback
 * 
 * java의 main method와 같은 느낌
 * node server.js 실행 직후 callback
 * 
 * node server.js -> 서버 실행
 * nodemon server.js -> 서버 변경점이 생기면 서버 재시작 자동
 * -> 에러 발생할 경우 powershell에서 set-executionpolicy unrestricted 실행해서 제한 풀어주기
 */
app.listen(PORT, function(){  
  
}); // 

module.exports = app;