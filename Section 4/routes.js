const fs = require('fs');

const requestHandler = (req,res) => {
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
};

//Export 하는 방법 1
// module.exports = requestHandler;

//Export 하는 방법 2
// module.exports = {
//     handler : requestHandler,
//     someText: 'Some Hard Coded Text'
// };

//Export 하는 방법 3
// module.exports.handler = requestHandler;
// module.exports.someText = 'Some Hard Coded Text';
// module 생략 가능
exports.handler = requestHandler;
exports.someText = 'Some Hard Coded Text1';