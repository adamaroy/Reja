console.log("WEb serverini boshlash");
const express =require("express");
const app = express();

const fs =require("fs");

let user;
fs.readFile("database/user.json","utf8",(err,data)=> {
    if(err){
        console.log("ERROR:",err);
        
    }else{
        user = JSON.parse(data)
    }
});

//MongoDB chaqirish
const db =require("./server").db();



//1 : KIRISH CODELARI
app.use(express.static("public"));                  //kirib kelayotgan har bir request uchun public folder ochiq
app.use(express.json());
app.use(express.urlencoded({extended: true}));      //formdan biror narsa post qilsa express server qabul qiladi (yozilmasa express ignore qiladi)

//2 :Session ga bogliq codelar

//3: Views ga bogliq codelar
app.set("views","views");               //views folderdan viewsni qidiradi

app.set("view engine","ejs");           //view engineda ejs ishlat buyrugi!     //ejs orqali HTML frontend yasaladi backend ichida




//4:Routinga bogliq codelar
app.post("/create-item",(req,res)=> {   //post databasega malumotni jonatadi va db ga yozadi
console.log(req.body);
res.json({test:"succes"});

});

app.get("/",function (req, res) {    //get databasedan malumot olib oqish uchun ishlatadi
    res.render ("reja");
});

app.get('/author',(req,res)=>{
    res.render ("author",{user: user});
});


// app.get('/author2',(req,res)=>{
//     res.render ("author2",{user: user});
// });

//hello
// app.get("/hello",function(req ,res){
//     res.end("<h1>Hello world by Adam!</h1>");
// });
// app.get("/gift",function(req ,res){
//     res.end("<h1>GIFT!</h1>");
// });

module.exports = app;
