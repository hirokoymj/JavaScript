# pass-by value and pass-by reference

- The primitive type such as `strings, numbers, booleans` are pass-by value and `objects` is pass-by reference.
- `pass-by value` is to pass a copy.
- `pass-by reference` is to pass a pointer.

**Example 1** 
- pass-by value
- The variable `a` in `foo` function is only visible inside the `foo` function.

```js
"use strict";

var a = 1;
function foo(a){
  a = 2;
}
foo(a);
console.log(a); //1
```

**Example 2** 
- objects is pass-by reference.

```js
"use strict";

var a = {};
function foo(a){
  a.firstname = "Hiroko";
}
foo(a);
console.log(a); //{firstname: "Hiroko"}
```

**Example 3**
- when you change the object, we have to change **a property** NOT an object itself.
```js
"use strict";

var a = {"moo": "foo"};
function foo(a){
  //a = {"moo": "goo"}; // we can't change a object. we can only change the property.
  a.moo = 'goo';
}
foo(a);
console.log(a); //{moo: "goo"}
```