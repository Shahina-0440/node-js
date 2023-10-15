const bcrypt=require('bcrypt')
let user={
    id:101,
    pass:"123"
}
const salt=bcrypt.genSaltSync(10);
var new_pass=bcrypt.hashSync(user.pass,salt);
user={
    ...user,pass:new_pass
}
let flag=bcrypt.compareSync("123",user.pass);
if (flag){
    console.log("login success")
}
else{
    console.log("login fail")
}