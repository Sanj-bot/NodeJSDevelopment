const express=require('express');
const app=express();
const port=process.env.PORT || 8080;

app.get('/',(req,res)=>{
    res.send('<h1>Hello budyy</h1>');
})

app.get('/test',(req,res)=>{
    res.send('<h1>Hello</h1>');
});
app.listen(port,()=>{
    console.log(`Ready Listening on ${port}`);
})