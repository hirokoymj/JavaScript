// function argument in setTimeout is annoymouse function
//ES5
// setTimeout(function(){
//     console.log("SetTimeout called")
// }, 1000);

// ES6
// If the body is just one statement, we can remove braces AND
// If the body is just one linem we don't need "return" - automatically returns the value 
// let add2 = (a,b) => a+b;
// console.log(add2(1,2));

// Object - 1
// let obj = {
//     name: "Asim",
//     sayLater: function() {
//         console.log(this.name);
//     }
// };
// obj.sayLater(); //Asim

// Object - 2
// 
//function call in object
// let obj = {
//     name: "Asim",
//     sayLater: function() {
//         setTimeout(function(){
//             console.log(this.name);
//         }, 1000);
//     }
// };
// obj.sayLater(); //undefine

// Object - 3 ES6
// function call as object
// fat arrow function will be the same as the value of this outside the fat arrow function
// let obj = {
//     name: "Asim",
//     sayLater: function() {
//         setTimeout(() => console.log(this.name) , 1000);
//     }
// };
// obj.sayLater();

// Fat arrpw functions are far more than just a way of writing anonymous functions.
// It also stabilises the value of this


const multiplier = {
  numbers: [1,2],
  multiplyBy: 3,
  multiply(){    
      const output = this.numbers.map(function(num){ // Not fat arrow function
        console.log(this.multiplyBy); // undefine
        return num * this.multiplyBy
      });
      return output;
  }
}
console.log(multiplier.multiply()); // [ NaN, NaN ]

const multiplier2 = {
  numbers: [1,2],
  multiplyBy: 3,
  multiply(){
      var _self = this;   // Save "this" value HERE!!!
      const output = this.numbers.map(function(num){ // Not fat arrow function
        console.log(_self.multiplyBy); // undefine
        return num * _self.multiplyBy
      });
      return output;
  }
}
console.log(multiplier2.multiply()); // [ 3, 6 ]