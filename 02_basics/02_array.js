const myarr = ["aryan","rohit","mohit" ]
const newarr= ["nikhil","kuldeep","devang"]

//myarr.push(newarr)
//console.log(myarr)

//const anotherArr = myarr.concat(newarr) 
//console.log(anotherArr)

const newarr2 = [...myarr,...newarr]
console.log(newarr2)

