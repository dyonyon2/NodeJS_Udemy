// Core Modules
// http : Launch a server, send requests
// https: Launch a SSL Server
const http = require('http');

// function listener (req, res) {
// }
// http.createServer(listener);

//익명함수 사용
// http.createServer(function(req,res){
// });

//화살표 함수 사용
const server = http.createServer((req,res) => {
    console.log(req);
});

server.listen(3000);