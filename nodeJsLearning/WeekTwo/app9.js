const newD=new Date();
console.log(newD)
const oldD=new Date(2020,0,1,9,20,50);
console.log(oldD);
const old1=new Date(2020,0);
console.log(old1);
const zeroDay=new Date(0);
console.log(zeroDay);
const zeroDay2=new Date(1000000000000);
console.log(zeroDay2);
const isoDate= new Date("1980-01-15");
console.log(isoDate);
console.log(zeroDay.getTime());
console.log(zeroDay.getFullYear());
console.log(zeroDay.getDay());