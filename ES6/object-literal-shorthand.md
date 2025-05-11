# ES6 Object Literal Shorthand
 - Objet property has `a key-value pair` and when a key is same as value, we can use shorthand and omit key-colon definition(key:value -> key).
- When funciton defines in an object, 'function' keyword can omit.
 
**Example 1**
 - ES5

```js
function createMonster(name, power) {
  return { type: 'Monster', name: name, power: power };
}
function createWitch(name) {
  return { type: 'Witch', name: name };
}
```

 - ES6
```js
function createMonster(name, power) {
  return { type: 'Monster', name, power };
}
function createWitch(name) {
  return { type: 'Witch', name };
}
```

**Exampe 2**

 - ES5
```js
obj = {
    foo: function (a, b) {
        …
    },
    bar: function (x, y) {
        …
    },
};
```

 - ES6
```js
obj = {
    foo (a, b) {
        …
    },
    bar (x, y) {
        …
    },
}
```

**Example 3**
 - create `getCar` method to generate output object

```js
output: {
    make: 'Kia',
    model:'Sorento',
    value: 40000,
    makeKia: true,
    depreciate: function()
}
```
**ES5**
```js
function getCar(make, model, value){
    return {
        make,
        model,
        value,
        ['make' + make]: true,
        depreciate(){}
    }
}
```

**ES6**
- Omit return {} to implicity return object syntac.
- `No funtion name` in fat arrow function

```js
var getCar = (make, model, value) => ({
        make,
        model,
        value,
        ['make' + make]: true,
        depreciate(){}
});
```







#### References:
- https://ariya.io/2013/02/es6-and-object-literal-property-value-shorthand
- [ECMAScript 6 New Features: Property Shorthand ](http://es6-features.org/#PropertyShorthand)
- [ECMAScript 6 New Features: Object Properties](http://es6-features.org/#MethodProperties)

