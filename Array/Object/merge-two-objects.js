var obj1 = { foo: true, count: 1 };
var obj2 = { bar: false };

// function extend(arr1,arr2){
//     var output = {};
//     var array = [arr1, arr2];

//     array.forEach(function(value){
//         for(var key in value){
//             if(!output.hasOwnProperty(key)){
//                 output[key] = value[key];
//             }
//         }
//     });
//     return output;
// }
// console.log(extend(a,b));

const mergeTwoObjects = (a, b) => {
  var output = {};
  [a, b].map((obj) => {
    for (const [key, value] of Object.entries(obj)) {
      output[key] = value;
    }
  });
  return output;
};

const result = mergeTwoObjects(obj1, obj2);
console.log(result);
