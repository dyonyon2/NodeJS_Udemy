// Core Modules
// http : Launch a server, send requests
// https: Launch a SSL Server
const http = require('http');
const path = require('path')

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// routes 파일 분리
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))

// app.use(adminRoutes);
// adminRoutes의 url은 앞쪽에 /admin이 공통이라고 한다면, 아래와 같이 설정하면 된다.
app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use('/',(req,res,next) => {
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})

/*
app.use('/',(req, res, next) => {
    console.log('This Always runs!');
    next();
});

app.use('/add-product',(req, res, next) => {
    console.log('In /add-product middleware!');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></input></form>');  
});

app.post('/product',(req, res, next) => {
    console.log('In post /product middleware!');
    console.log(req.body);
    res.redirect('/');
});

//Callback 함수 전에 url로 Filter 설정 가능 
//But 밑에 처럼 '/'를 하면 /로 시작되는 모든 url이 타기 탄다. 
//       (use만!!, get,post는 url 정확히 일치해야함)
//그렇기에 위에서 detail한 url을 middleware로 태우고 next를 안하면 된다.
app.use('/',(req, res, next) => {
    console.log('In / middleware!');
    //기존 방식처럼 setHeader, write로 보낼수 있지만 send 함수를 사용하면 유용하다.
    res.send('<h1>Hello Root from Express</h1>');  
});
*/

app.listen(3000);