let sum=(a,b)=>{
    return a+b
}
let sub=(a,b)=>{
    return a-b
}

let calc=(a,b,callback)=>{
    return callback(a,b)
}
let r1=calc(2,3,sum);
console.log(r1)