# What are the different scopes in JavaScript?
- Global scope
- Local scope


**Global scope**

```js
var a = 1;
console.log(a); //1
console.log(window.a); //1
```

**Local scope(function scope)**
- variable `foo` doesn't exist in a global scope. foo exists and be avaiable only inside local scope.

```js
"use strict";

function moo(){
    var foo = 1;
}
console.log(foo);//foo is not defined 
```

- JavaScript doesn't have the concept of block level scope.
```js
for(var i=0; i< 3; i++){
    var j = 5;
}
console.log(j); //5
```

