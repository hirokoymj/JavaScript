# Prototype chain

- All objects in javascript have a prototype property. When object "A" is created based on existing object "B", "A" inheritances all properties and methods that object "B" has. That is "Prototype chain".

 
```js
// Animal object
var animal = {
    kind: "human"
}

// asim object
var asim = {};
asim.__proto__ = animal;
console.log(asim.kind);
console.log(animal.isPrototypeOf(asim));//true
asim.kind = 'igloo';
console.log(asim.kind); //igloo
console.log(animal.kind); //human
```
- asim object doesn't have kind property but its prototype is actually inheritance from animal object.

## Object.create() function

**Syntax**

Object.create(proto, {name: {value: "iPad"}})


```js
var animal = {
    kind: "human"
}

var asim = Object.create(animal);
console.log(asim.kind);
console.log(animal.isPrototypeOf(asim));//true

asim.kind = 'igloo';
console.log(asim.kind); //igloo
console.log(animal.kind); //human
```


```js
var animal = {
    kind: "human"
}

var asim = Object.create(animal, {food: {value: "mango"}});
console.log(asim.food);//mango



```


## References:
- [MDN: Object.create()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
- [MDN: Object.isPrototypeOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf)