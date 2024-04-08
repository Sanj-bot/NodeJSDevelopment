// console.log(window);
// console.log(global);
console.log(process);
for (let x=0;x<500;x++)
{
    console.log(x)
    if(x==300)
    {
        process.exit();
    }
}
console.