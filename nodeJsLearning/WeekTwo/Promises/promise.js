const pro1=new Promise((resolve,reject)=>{
    const temp=3;
    setTimeout(()=>{
        reject('TIMED out');
    },1000);
    setTimeout(()=>{
        resolve('Hello');
    },500);
    // if(temp>5)
    // {
    //     resolve('success');
    // }
    // else
    // {
    //     reject('reject');
    // }

    // resolve('success');
    // reject('reject');
});

pro1.then(
    (val)=>{
        console.log(`TRUE :${val}`);
    },
    (err)=>{
        console.log(`Error!~!! : ${err}`);
    }
);