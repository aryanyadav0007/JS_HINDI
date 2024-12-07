function sayMyName(){
    console.log("A");
    console.log("r");
    console.log("y");
    console.log("a");
    console.log("n");
}

// sayMyName();

//function addTwoNumbers(number1,number2){
//   console.log(number1+number2);
//}
function addTwoNumbers(number1,number2){
   // let result=number1+number2;
   // return result;

return number1 + number2;
}

var result=addTwoNumbers(3,5);
console.log("Result =" +result)

function isLoggedIn(username){
    if(!username){
      console.log("please input username")
      return
    }
    return`${username} is logged in`;
}  

//console.log(isLoggedIn("Aryan"))
console.log(isLoggedIn())

//function calculateCartPrice(num1){
 //  return num1;
//}

//console.log(calculateCartPrice(20))

//function calculateCartPrice(...num1){
 //   return num1;
 //}
 
 //console.log(calculateCartPrice(20,200,300,500))

 function calculateCartPrice(var1,var2,...num1){
    return num1;
 }
 
 console.log(calculateCartPrice(20,200,300,500))

 const user ={
    username: "Aryan",
    price: 2000,
 }

 function handleObjects(anyObject){
    console.log(`${anyObject.username} is the username and ${anyObject.price} is the price `)
 }
handleObjects(user)