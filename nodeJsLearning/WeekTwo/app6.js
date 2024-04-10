
const fun1=function(a,b,c)
{
    const val=a*b*c;
    return val;
}// expression


const a=5;
const b=6;
const c=7;


(function()
{
const val=a*b*c;
console.log(val);
})
(a,b,c);//IIFE


const val1=fun1(5,6,7);
const val2=fun2(5,6,7);


function fun2(a,b,c)
{
    const val=a*b*c;
    return val
}


const fun3=(function(a,b,c)
{
    const val=a*b*c;
    return val;
})(a,b,c);//IIFE
console.log(fun3);


console.log(val1);
console.log(val2);
