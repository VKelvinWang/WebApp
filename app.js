

//DOM compilation js
const express=require("express"); 
const ejs=require("ejs");
const bodyParser=require("body-parser");
const app = express();
const path = require('path');
const PORT = 3000;
const mongoose = require('mongoose')
require('dotenv').config()


mongoose.connect("mongodb+srv://webapp_admin:X2eQNvtAdKX3UyVe@testing.xjlrggy.mongodb.net/sample_mflix?retryWrites=true&w=majority", { useNewURLParser: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname+'/public/view/index.html'));
});

app.get('/users', function (req, res){
    res.sendFile(path.join(__dirname+'/public/view/users.html'));
});

app.get('/register', function (req, res){
    res.sendFile(path.join(__dirname+'/public/view/register.html'));
})

const commentSchema = {
    email: String,
    text: String,
};

const Comment = mongoose.model (
    "Comment",
    commentSchema,
    "comments"
);

Comment.findOne({email:"john_bishop@fakegmail.com"}, (err, foundItem) => {
    if (err) {
        console.log(err);
    } else {
        console.log(foundItem);
    }
})
  
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);