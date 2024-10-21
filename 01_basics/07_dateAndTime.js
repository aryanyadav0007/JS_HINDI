let mydate = new Date();
console.log(mydate.toString());
console.log( typeof(mydate));
console.log(mydate.toLocaleString());


let myCreateDate = new Date(2023,0,23,15,3)
console.log(myCreateDate)
console .log(myCreateDate.toLocaleString())

let myCreateDate1 = new Date("01-14-2023")
console.log(myCreateDate1);

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myTimeStamp/1000)

let newDate = new Date()

console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());