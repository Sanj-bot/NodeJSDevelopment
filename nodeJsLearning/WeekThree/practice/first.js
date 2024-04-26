const arr=['a','b','c'];
console.clear();

// 
arr.forEach((el)
=>
{
    console.log(el);
    console.log('syc');
}
)
function aFun(myArr,callback)
{
    myArr.forEach((el)=>
    {
        setTimeout(callback,1000,el);
    })
}

aFun(arr,(val)=>
{
    console.log(val);
    console.log('async');
})