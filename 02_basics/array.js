const myarr =[1,2,3,4]

console.log(myarr);
myarr.push(6)
myarr.pop()

//console.log(myarr.includes(3));

//myarr.unshift(9)
//myarr.shift(2)

const newarr = myarr.join();
console.log(newarr)
console.log(myarr)

//slice and splice

const myn1 = myarr.slice(1,3)
console.log(myarr)
console.log(myn1) //slice does not changed the original array

const myn2 = myarr.splice(1,3);
console.log(myarr)
console.log(myn2) //splice changes the original array