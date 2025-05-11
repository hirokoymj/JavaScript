# ES6 Spread Operator ( ... )

## Syntax
1. For array literal
```js
[...iterableObj, '4', 'five', 6];
```

2. For object literal **(new in ECMAScript 2018)**
```js
let objClone = { ...obj };
```

# Spread operator for array literal
- With spread operator becomes easier to create/edit/delete array elements instead of using `push`, `slice` and `contact`. 


### Copy of array
**Q1**
 - Copy of names array using ES5 

```js
const names = ['a', 'b'];
```

**Q1-Answer**
```js
const names = ['a', 'b'];
const copy1 = names.slice();
console.log(names); 
console.log(copy1);
```


**Q2**
- Copy of names array using ES6 

```js
const names = ['a', 'b'];
```

**Q2-Answer**
- spread operator


```js
const names = ['a', 'b'];
const copy2 = [...names];
console.log(names); 
console.log(copy2);
```
<hr />

### Combine Array

**Q3**
- Adding 'c' in names array in ES5
 
```js
const names = ['a', 'b'];
```

**Q3-Answer**
- push()

```js
const names = ['a', 'b'];
names.push('c'); 
console.log(names); 
```
<hr>

#### Conbine two arrays
**Q4**
- Adding 'd' in names array and keep names as original and create new array

```js
const names = ['a', 'b'];
```

**Q4-Answer**
- concat() - adding an item AND create new array

```js
const names = ['a', 'b'];
const newArray = names.concat('d');
console.log("original: " + names);
console.log("newArray: " + newArray);
```
<hr />

#### Merge elements
**Q5**
- Adding arr1 in arr2 between btw 'one' and 'four'

```js
const arr1 = ['two', 'three'];
const arr2 = ['one', 'four'];
```

**Q5-Answer**

```js
const arr1 = ['two', 'three'];
const arr2 = ['one', ...arr1, 'four'];
console.log(arr1); //[ 'two', 'three' ]
console.log(arr2); //[ 'one', 'two', 'three', 'four' ]
```

# Spread operator for object
- ES6 implemented spread operator for array literal but not **object literal**. It is now in proposal stage and we will be able to use in ES8. 
- [MDN - Spread operator for object literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals)

- Babel plug-in is available to use in React.js. [object-rest-spread](https://babeljs.io/docs/en/babel-plugin-proposal-object-rest-spread)


## Install babel plug-in for spread operator
[babel/plugin-transform-spread](https://babeljs.io/docs/en/babel-plugin-proposal-object-rest-spread#spread-properties)

```js
npm install --save-dev @babel/plugin-transform-spread
```

## Add plug-in into .babelrc file
**.babelrc**
```js
{
  "plugins": ["@babel/plugin-transform-spread"]
}
```

## Example

**1. Add new property in user object**
```js
const user = {
  name: 'Jen',
  age: 24
}

// Add new property
console.log({
  ...user,
  location: 'New York'
});
//{name: "Jen", age: 24, location: "New York"}
```

**2. Override existing property `age=27`**
```js
console.log({
  ...user,
  location: 'New York',
  age: 27
});
//{name: "Jen", age: 27, location: "New York"}
```

**3. Override existing property from age=27 to age=24**
```js
// Override existing property
console.log({
  age: 27,
  ...user,
  location: 'New York',
});
//{age: 24, name: "Jen", location: "New York"}
```

