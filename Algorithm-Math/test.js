// var a = 1.6;
// console.log(Math.floor(a)); //1

//---Find min/max in an array.
// const array = [2, 5, 6, 9];
// const max = Math.max(...array);
// const min = Math.min(...array);

// console.log(max);
// console.log(min);

///## Find a missing number
// const myArray = [5, 2, 6, 1, 3]; //4

// const findMissing = (array) => {
//   const max = Math.max(...array);
//   const min = Math.min(...array);
//   const result = [];

//   for (let i = min; i < max + 1; i++) {
//     if (array.indexOf(i) === -1) {
//       result.push(i);
//     }
//   }
//   return result;
// };
// console.log(findMissing(myArray)); //[ 4 ]

///## Find smallest missing number in array
// const array = [1, 3, 6, 4, 1, 2]; //5
// const array = [1, 2, 3]; //4
// // const array = [-1, -3]; //1

// const solution = (array) => {
//   const max = Math.max(...array);
//   const min = Math.min(...array);
//   let result = 0;

//   // find a smallest missing value
//   for (let i = min; i <= max; i++) {
//     if (array.indexOf(i) === -1) {
//       result = i;
//       break;
//     }
//   }
//   if (result === 0) {
//     result = max + 1;
//   } else if (result < 0) {
//     result = 1;
//   }
//   return result;
// };
// console.log(solution(array));

//## Find a float in Array

const array = [3, 4.5, 2, 6.3];
const result = array.filter((value) => {
  if (value % 1 > 0) {
    return value;
  }
});

console.log(result);
// [ 4.5, 6.3 ]
