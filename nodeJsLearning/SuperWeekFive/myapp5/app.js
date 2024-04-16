const express=require('express')
const app=express();
const port=process.env.PORT||8080;

app.listen(port,()=>{
    console.log(`Ready listening on ${port}`);
});
app.get('/users/:id',(req,res)=>{
    const id=req.params.id;
    console.log('found'+id);
    res.send('found')
});