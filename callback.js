let sum=(a,b)=>{
    return a+b;
}
let sub=(a,b)=>{
    return a-b;
}
let add=(a,b,callback)=>{
    return callback(a,b);
}
let subtraction=(a,b,callback)=>{
    return callback(a,b);
}
let r1=add(10,20,sum);
console.log(r1);
let r2=subtraction(20,10,sub);
console.log(r2);