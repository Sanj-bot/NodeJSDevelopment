const express=require('express');
const app=express();
const port=process.env.PORT || 8080;

app.get('/',(req,res)=>{
    res.send('<h1>Hello budyy</h1>');
});

app.get('/info',(req,res)=>{
    res.send('<h1>Info</h1>');
});

// pATTERN MATCH
app.get('/ab?cd',(req,res)=>{
    res.send('<h1>ABC</h1>');
});

app.get('/ab+de',(req,res)=>{
    res.send('<h1>ABCDE</h1>');
});

app.get('/ab*de',(req,res)=>{
    res.send('<h1>AB__________DE</h1>');
});


app.get(/z/,(req,res)=>{
    res.send('<h1>zzzzzzzzzzzz</h1>');
});


// route parameters
app.get('/users/:id/:val',(req,res,next)=>{
   
    res.send(req.params)
    console.log(req.params.id)
    next()},
    (req,res)=>{
        
        console.log(`Second callback ${req.params.val}`)
    
})


app.listen(port,()=>{
    console.log(`Ready Listening on ${port}`);
});