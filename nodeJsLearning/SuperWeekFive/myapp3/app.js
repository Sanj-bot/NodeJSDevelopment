const express=require('express')
const app=express();
const port=process.env.PORT||8080;

app.get('/user',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html');
});

// users is the endpoint

app.post('/users',(req,res)=>{
    console.clear();
    console.log('ready');
    res.send('done');
})
app.listen(port,()=>{
    console.log(`Ready Listening on ${port}`);
});