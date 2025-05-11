# ES6 - Object destructuring in function paramters


**Example 1**
 
```js
const add = (data)=>{ // <--- Not using destrucruing 
  return data.a + data.b;
}
console.log(add({ a: 1, b: 2 }));
```

**Example 2**
 
```js
const add = ({a, b})=>{ // <--- Destrucruing!!! 
  return a + b;  
}
console.log(add({ a: 1, b: 2 }));
```

**Example 3**
- This is redux action generator function.
- **How the default value set to 1.** `({incrementBy=1}={})`
>If there is an object provided and it doesn't include 'incrementBy', incrementBy sets to 1.
If there is no object provided the default, it going to be an emplty object AND when we try to descructure empty object, we're definitely not going to have increment by, so the end result once gain is 1.


```js
const incrementCount = ({incrementBy=1}={}) =>({
  type: 'INCREMENT',
  incrementBy: incrementBy
});

incrementCount({incrementBy: 5})); // {type: "INCREMENT", incrementBy: 5}
incrementCount());                 // {type: "INCREMENT", incrementBy: 1}
incrementCount({}));               // {type: "INCREMENT", incrementBy: 1}
```
