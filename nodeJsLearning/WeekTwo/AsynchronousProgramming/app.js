// console.log(global);

let a='hello';
let counter=0;
function timer(val)
{
    console.log(`timer ran ${val} ${a}`);

}
function message(val){
    counter++;
    console.log(   `${counter}.-${val}`);
}
for(let i=5;i>0;i--)
{
    setTimeout(timer,i*1000,  ` ${counter} Loop:${i*1000}`);
}
setTimeout(timer,2000,'timer 1');
console.log('new val');
a='world';