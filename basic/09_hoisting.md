# What is variable hoisting?

- Variable Hoisting means a variable declaration is automatically hoisted to top of its enclosing scope.
- Anonymous Function must declare before its executing.


**Example 1 - Variable Hoisting**
```js
"use strict";

console.log(a); //undefined
var a = 1;
```

- Above code is same as follow:

```js
"use strict";

var a;          // The variable declaration is automatically hoisting to the top in same scope.
console.log(a); //undefined
a=1;
```

**Example 2 - Function Hoisting**
- A function is also hoisting. 

```js
"use strict";

function foo(){
    console.log(a);     //undefined
    var a = 1;
}
foo();
```


```js
"use strict";

foo();
function foo(){
    console.log(a);     //undefined
    var a = 1;
}
```



**Example 3 - Anonymous Function**
- Anonymous Function must declare before its executing.
- Both below code are ERROR - foo is not a function.

```js
"use strict";


foo();      // error: foo is not a function.
var foo = function(){
	console.log('hiroko');
};
```


```js
"use strict";

var foo;        // foo is undefined.
foo();          // you can't execute undefined.
foo = function(){
    console.log('hiroko-2');
};

```