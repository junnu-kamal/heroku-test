var express = require('express');


var app = express();
app.get("/",(req,res)=>{
    res.send("app is running")
}) 



app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});