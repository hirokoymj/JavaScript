# What are different types in JavaScript?
- Five primitive types and an object.

**Example 1**
```js
Boolean - true or false
Number - 1, 1.0
String - "a", 'a'
Null - null
Undefined - undefined

Object - {}, new Object
```


**Example 2**
- typeof(null) is "object".

```js
typeof(1);      // number
typeof('a');    // string
typeof(true);   // boolean
typeof(undefined); //undefined
typeof(null); // object <--- POINT
typeof({}); // object
```

# What is difference between 'undefined' and 'null'?
- `undefined` is used by JavaScript Engine to inform you to this is either an uninitialized variable, it's either parameter that is missing from the function parameters list or un unknown property of object.
- `null` is used by a programmer to indicate no value. JavaScript engine never set null for you.


```js
console.log(null==undefined); //true
console.log(null===undefined); // false
```