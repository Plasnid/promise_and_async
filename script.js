let p1 = new Promise((resolve, reject) =>{
    let a = 1 + 1;
    if(a==2){
        resolve('egad!  I worked!  I will never ride a hamster to work!');
    }else{
        reject('darn it! no pony....hamster time forever!');
    }
});

let p2 = new Promise((resolve, reject) =>{
    let a = 1 + 1;
    if(a==2){
        resolve('egad!  I worked!  I will never ride a hamster to work!');
    }else{
        reject('darn it! no pony....hamster time forever!');
    }
});

function resolveAction(){
    console.log("entering resolveAction");
}
function rejectAction(){
    console.log("entering rejectAction");
}

let p3 = new Promise((resolve, reject) =>{
    let a = 1 + 1;
    if(a==3){
        resolve(resolveAction());
    }else{
        reject(rejectAction());
    }
})

Promise.all([p1,p2,p3]).then(function(){
    console.log("all the parts are ready, lets go!");
}).catch(function(){
    console.log(`not yet ready!  something is broken`);
});

/*p1.then((message) =>{
    console.log(`success: ${message}`);
}).catch((message)=>{
    console.log(`fail: ${message}`);
})*/

function bagCheck(contents){
    if(contents!="contraban"){
        return new Promise(resolve =>{
            setTimeout(() =>{
                resolve("free to go");
            },3000)
        });
    }else{
        return new Promise(reject =>{
            setTimeout(()=>{
                reject("traveller detained");
            },5000);
        })
    }
}
async function goingThroughCustoms(){
    console.log('going through customs, lets get our bags checked');
    const result = await bagCheck("not cobb nuts");
    console.log(result);
}
goingThroughCustoms();