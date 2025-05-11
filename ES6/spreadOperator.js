// Syntax
// 1. For array literal


// 2. For object literal  (new in ECMAScript 2018)

// Copy of array
const names = ['a', 'b'];
const copy1 = names.slice();
const copy2 = [...names];
console.log(names); 
console.log(copy1);
console.log(copy2);


const user = {
  name: 'Jen',
  age: 24
}
console.log({...user});

console.log({
  ...user,
  age: 27
});

const params = [a,b];
const add = (...params) =>{

}


// Combine Arrays ES5
// const names = ['a', 'b'];
// names.push('c'); 
// console.log(names); //

// const newArray = names.concat('d');
// console.log("original: " + names);
// console.log("newArray: " + newArray);

// // spread opeartor
// const arr1 = ['two', 'three'];
// const arr2 = ['one', ...arr1, 'four'];
// console.log(arr1);
// console.log(arr2);
