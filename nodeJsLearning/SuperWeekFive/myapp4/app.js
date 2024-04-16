const express=require('express');
const app=express();
const bop=require('body-parser');
const port=process.env.PORT||8080;


app.use(bop.urlencoded({extended:true}))


app.get('/user',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html');
});

// users is the endpoint

app.post('/users',(req,res)=>{

    console.clear();
    console.log(req.body);
    res.send('done');

});

app.listen(port,()=>{
    console.log(`Ready Listening on ${port}`);
});