// class ClassName {
//   constructor(prop1, prop2){
//     this.prop1 = prop1;
//     this.prop2 = prop2;
//   }
// }

// let obj = new ClassName("args1", "args2");
// console.log(obj.prop1, obj.prop2);

// class Dog{
//   constructor(dogName, weight, color, breed){
//     this.dogName = dogName;
//     this.weight = weight;
//     this.color = color;
//     this.breed = breed;
//   }
// }
// let dog = new Dog ("Javascript", 2.4, "Brown", "Lab");
// console.log(dog.dogName, "is a", dog.breed, "and weight", dog.weight, "kg");

// There can only be one constructor in a class.

// class Person{
//   constructor(firstname, lastname){
//     this.firstname = firstname;
//     this.lastname = lastname;
//   }
// }

// class Person{
//   constructor(firstname, lastname = "Doe"){
//     this.firstname = firstname;
//     this.lastname = lastname;
//   }
// }
// console.log("hi", p.firstname, p.lastname);

//      METHODS  - functions on a class are called methods. 

// class Person{
//   constructor(firstname, lastname){
//     this.firstname = firstname;
//     this.lastname = lastname;
//   }
//   greet(){
//     console.log("hi there! I'm", this.firstname);
// }} 
// let p = new Person("Maaike", "van Putten");
// p.greet();

// class Person{
//   constructor(firstname, lastname){
//     this.firstname = firstname;
//     this.lastname = lastname;
//   }
//   greet(){
//     console.log("hi there! I'm");
// }
//    compliment(name,object){
//     return "Thats a wonderful" + object + ", " + name;
//    }} 
//    let compliment = p.compliment("Haryy", "Hat");
//    console.log(compliment);


// class Person{
//   #firstname
//   #lastname
//   constructor(firstname, lastname){
//     this.firstname = firstname;
//     this.lastname = lastname;
//   }
//   } 
//   let p = new Person("Maria", )

// class Person{
//   constructor(firstname, lastname){
//     if(firstname.startsWith("M")){
//     this.firstname = firstname;}
//    else {this.firstname = "M" + firstname;} 
//    this.lastname = lastname;
//   }
//   } 
//   let p = new Person("Kay", "Moon");

// get firstname(){
//   return this.firstname;
// }
// set firstname(firstname){
//   this.#firstname = firstname;
// }
// get lastname(){
//   return this.#lastname;
// }
// set lastname(lastname){
//   this.#lastname = lastname;
// }

// let p = new Person("Maria","Kot");
// console.log(person)

//         INHERITANCE

// class Vehicle{
//   constructor(color, currentSpeed, maxSpeed){
//     this.currentSpeed = currentSpeed;
//     this.maxSpeed = maxSpeed;
//   }
//   move(){
//     console.log("moving at", this.currentSpeed);
//   }
//   accelerate(amount){
//     this.currentSpeed += amount;
//   }
// }
// class Motorcycle extends Vehicle{
//   constructor(color, currentSpeed, maxSpeed, fuel){
//     super(color, currentSpeed, maxSpeed);
//     this.fuel = fuel;
//   }
// }
// let motor = new Motorcycle("Black", 0, 250, "gasoline");
// console.log(motor.color);
// motor.accelerate(50);
// motor.move();

//       PROTOTYPES
