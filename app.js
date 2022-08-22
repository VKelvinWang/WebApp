//DOM compilation js
const express=require("express"); 
const ejs=require("ejs");
const bodyParser=require("body-parser");
const app = express();
const path = require('path');
const PORT = 3000;

app.get('/', function (req, res){
        res.sendFile(path.join(__dirname+'/public/view/index.html'));
});

app.get('/users', function (req, res){
        res.sendFile(path.join(__dirname+'/public/view/users.html'));
});
  
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);