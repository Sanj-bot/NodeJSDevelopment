console.log(Math.random());
console.log(Math.random()*100);
console.log(Math.floor(Math.random()*100));
console.log(Math.ceil(Math.random()*100));


for(let i=0;i<100;i++)
{
    console.log(ranNum(1,10));
}

function ranNum(min,max){
    return Math.floor(Math.random()*max)+min;
}