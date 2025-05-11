# Let
 - `let` is visible only block scope.
 - `var` can re-assign the same variable in the same scope.
 - `let` can NOT re-assign the same variable in the same scope.
 - Here is the block scope.
 ```js
{
    // this is a block 
}
 ``` 

## Function scope

**Q1**

```js
function hello(){
  var a = "function";
}
hello();
console.log(a);
```

**Q1-Anwer**
```text
//Reference error
//var a is only visible in function scope
```
<hr>

**Q2**
```js
function hello(){
  var a = "function";
  
  for(var i=0; i<10; i++){
    var a = "block";
  }
  console.log(a)
}
hello();
```

**Q2-Answer**
```text
// block
// var a='block' in for() loop is visible outside scope.
```
<hr>

**Q3**
- function scope with **IIFE**
```js
function hello(){
  var a = "function";
  
  for(var i=0; i<10; i++){
    (function(){ // Inside IIFE isn't visible from outside of this function.
      var a = "block";
    })();
  }
  console.log(a)
}
hello();
```

**Q3-Answer**
```text
// function
// Inside IIFE isn't visible from outside 
```

<hr>

**Q4**
- `let` in block scope

```js
function hello(){
  var a = "function";
  
  for(var i=0; i<10; i++){
    let a = "block"; // this line is only visible in for loop block. That's why a prints "function".
  }
  console.log(a);
}
hello(); 
```

**Q4-Answer**
```text
// function
```

## Quiz
**Quiz1**
```js
function hello(){
  var a = "function";
  
  for(let i=0; i<10; i++){
    a = "block";
  }
  console.log(a);
}
hello(); 
```

**Quiz1-Anwer**
```text
// block
// "a" is defined with var so variable a in for() loop is not block scope.
```

<hr>

**Quiz2**
```js
var funcs = [];
for (var i = 0; i < 5; i += 1) {
  funcs.push(function () {
    console.log(i);
  })
}
funcs.forEach(function (func) {
  func()
});
```

**Quiz2-Answer**
```js
var funcs = [];
for (var i = 0; i < 5; i += 1) { // var i is a global variable 
  funcs.push(function () {
    console.log(i); // added function as funcs array
  })
}
//Here...., i=5
funcs.forEach(function (func) {
  func() // When func is executed, i is always 5!
});
// 5 times print out 5
```

<hr>

**Quiz3**
- ES5 block scope question

```js
var funcs = [];

for (var i = 0; i < 10; i += 1) {
  var y = i;
    funcs.push(function () {
    console.log(y);
  })
}
funcs.forEach(function (func) {
  func()
});
```

**Quiz3-Answer**
```js
var funcs = [];
//var y; 
for (var i = 0; i < 10; i += 1) {
  var y = i; // y in for() loop is global scope NOT block scope.
    funcs.push(function () {
    console.log(y);
  })
}
// Here... y=9
funcs.forEach(function (func) {
  func() //// 10 times print out "9"
});
```

<hr>

**Quiz4**
```js
var funcs = [];
for (var i = 0; i < 10; i += 1) {
  let y = i;
    funcs.push(function () {
    console.log(y);
  })
}
funcs.forEach(function (func) {
  func()
});
```

**Quiz4-Answer**
```js
var funcs = [];
for (var i = 0; i < 10; i += 1) {
  let y = i;
    funcs.push(function () {
    console.log(y);
  })
}
//Here.... let y=i is NOT visible. 
funcs.forEach(function (func) {
  func()
});
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
```

<hr>

**Quiz5**
```js
var funcs = [];
for (let i = 0; i < 10; i += 1) {
    funcs.push(function () {
    console.log(i);
  })
}
funcs.forEach(function (func) {
  func()
});
```

**Quiz5-Answer**
```js
var funcs = [];
for (let i = 0; i < 10; i += 1) {
    funcs.push(function () {
    console.log(i);
  })
}
//Here... let i is NOT visible because let i is block scope.
funcs.forEach(function (func) {
  func()
});
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
```

## Redeclarations
Redeclaring the same variable within the same function or block scope raises a SyntaxError. 
[MDN let- Redeclarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)


**Quiz6-1**

```js
let nameLet = 'Jen';
let nameLet = 'Julie';
console.log('nameLet', nameLet);
```

**Quiz6-1-Answer**
```js
//Uncaught SyntaxError: Identifier 'nameLet' has already been declared
console.log('nameLet', nameLet);
```

<hr>

**Quiz6-2**
```js
if (x) {
  let foo;
  let foo; 
}
```

**Quiz6-2-Answer**
```js
if (x) {
  let foo;
  let foo; // SyntaxError thrown.
}
```

<hr>

**Quiz7**
```js
let x = 1;
switch(x) {
  case 0:
    let foo;
    break;
    
  case 1:
    let foo;
    break;
}
```

**Quiz7-Answer-1**
```js
let x = 1;
switch(x) {
  case 0:
    let foo;
    break;
    
  case 1:
    let foo; // SyntaxError for redeclaration.
    break;
}
```
**Quiz7-Answer-2**
- Adding {} in case works fine.
```js
let x = 1;

switch(x) {
  case 0: {
    let foo;
    break;
  }  
  case 1: {
    let foo;
    break;
  }
}
```