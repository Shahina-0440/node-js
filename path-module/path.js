const path=require('path')
console.log(path.join(__dirname))
const mypath=path.parse('C:/Users/achuk/Desktop/Node-Js/path-module/path.js')
console.log(mypath)
console.log(typeof mypath)
console.log(mypath['name'])