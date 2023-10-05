let emp={
    id:101,
    name:"shahina"
}
console.log(typeof emp);
let emp_string=JSON.stringify(emp)
console.log(typeof emp_string);
let emp_json=JSON.parse(emp_string);
console.log(typeof emp_json);