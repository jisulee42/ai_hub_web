const express = require("express")
const app = express();

let list = {
    "name":"이름",
    "number":"번호",
    "local":"지역"  
}

app.use((req, res,next) =>{
    req.user ={
        id:"!234"
    }
    next()
})
app.get("/get/list",(req,res)=>{
    res.json(list);
})

app.get('/',(req,res)=>{
 //res.send("home");
 console.log(req.user);
 res.sendFile(__dirname+"/index.html");
})

app.use((req, res)=>{
    res.sendFile(__dirname + "/404.html");
})

app.listen(8081, ()=>{
    console.log("server start");
})