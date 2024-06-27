require('dotenv').config()
const express  = require('express');
const app = express();
const port  = 4000;

app.get('/',(req,res)=>{
    res.send("this is home page");
});

app.get('/twitter',(req,res)=>{
    res.send("this is twitter page");
});

app.listen(process.env.PORT,()=>{
    console.log(`this app is listening ${port}`);
})