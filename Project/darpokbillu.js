const express =require('express');
const app=express();
const port=process.env.PORT||8080;



// Now comes the html code of first page
app.get('/',(req,res)=>{
    res.send("");
})