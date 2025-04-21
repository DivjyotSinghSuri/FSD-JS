// const person = {fname:"john", lname:"Doe", age:15};
// let text ="hi";
// for (let x in person)
// {
//   text += person[x];
// }

// const numbers = [45,4,9,16,25]

// let text = "heolle"
// numbers.forEach(myFunction);

// function myFunction(value,index,array){
//   text += value;
// }



// const numbers = [45,4,9,16,25]

// let text = "h"
// numbers.forEach(myFunction);
// function myFunction(value)
// {
//   text += value;
// }

// const car = ["BMW","Volvo","Mini"];
// let text = "";
// for(let x of car) {
//   text += x;
// }

// let language = "Javascript";
// let text = "";
// for(let x of language){
//   text += x;
// }
// document.getElementById("demo").innerHTML = text;

// const jsonObject = {
//   name: "John",
//   age: 30,
//   city: "New York",
//   hobbies: ["reading", "traveling", "swimming"],
//   isStudent: false,
//   address: {
//       street: "123 Main St",
//       zipcode: "10001"
//   }
// };

// console.log(jsonObject);
// document.getElementById("demo").innerHTML = JSON.stringify(jsonObject, null, 2);


{
  "employees":[
    {"firstName":"John","lastName":"Jones"},
    {"firstName":"Peter","lastName":"Parker"},
    {"firstName":"Divjyot","lastName":"Singh"}
  ]
}
const obj = JSON.parse(text);

document.getElementById("demo").innerHTML
obj.employees[1].firstName + " " + obj.employees[1].lastName;
