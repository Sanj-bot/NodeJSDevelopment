//  test1 runs and gives o/p
const test1=require('./test1');
console.log(module.filename);
test1.test1();
console.log(test1);
const myName=`${test1.person.fist} ${test1.person.second}`
console.log(myName);
