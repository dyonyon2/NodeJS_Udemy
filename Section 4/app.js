// Core Modules
// http : Launch a server, send requests
// https: Launch a SSL Server
const http = require('http');
const fs = require('fs');

// Custom File Import
const routes = require('./routes') //.js는 생략 가능

// Node.JS은 단일 쓰레드로 동작한다.

// function listener (req, res) {
// }
// http.createServer(listener);

//익명함수 사용
// http.createServer(function(req,res){
// });


/* routes.js 로 이동
//화살표 함수 사용
const server = http.createServer((req,res) => {
    // console.log(req);
    // Event Loop 종료
    // process.exit();

    // 주요 요소들
    // console.log(req.url, req.method, req.headers);

    // res.setHeader('Content-Type','text/html');
    // res.write('<html>');
    // res.write('<head><title>My First Page</title></head>');
    // res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    // res.write('</html>');
    // res.end();  // resonse 전송

    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        res.end();  // resonse 전송
    } else if(url ==='/message' && method === 'POST') {
        const body = [];  // => body =을 쓰지 않는 다는 뜻이기에 push 가능
        // chunk로 나뉘어서 데이터들이 data 이벤트로 들어온다.
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        // chunk를 다 받은 뒤에 end 이벤트가 발생한다.
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            // writeFileSync => 동기, writeFile => 비동기
            // 파일 크기가 큰 경우 Sync는 block될 것이다.
            // 동기 방식
            //fs.writeFileSync('message.txt',message);
            // res.statusCode=302;
            // res.setHeader('Location', '/');
            // res.end();

            // 비동기 방식
            fs.writeFile('message.txt',message, err => {
                res.statusCode=302;
                res.setHeader('Location', '/');
                res.end();
            })
        });
    } else {
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
        res.write('</html>');
        res.end();  // resonse 전송
    }
   
   // routes.js 연결

});
*/

//Export 하는 방법 1
// const server = http.createServer(routes);

//Export 하는 방법 2,3
const server = http.createServer(routes.handler);
console.log(routes.someText);

server.listen(3000);