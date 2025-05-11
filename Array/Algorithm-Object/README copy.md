# Algorithm - Object

## Iterate Object

| Methods             | Description                                 |
| ------------------- | ------------------------------------------- |
| Object.keys(obj)    | Extracts the keys in an array               |
| Object.entries(obj) | Returns key value pairs array [key, value]. |
| for...of iterable   | iterates iterable value (array)             |
| for...in object     | iterates over an object                     |

**Example 1:**

```js
const object1 = {
  a: "somestring",
  b: 42,
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// expected output:
// "a: somestring"
// "b: 42"
// order is not guaranteed
```

<hr />

**Example 2:**

**Syntax**

```js
for (variable in object)
```

```js
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
```

<hr />

**Example 3:**

```js
const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]
```

<hr />

- [MDN - for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
- [MDN - for..of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
- [MDN - Object.entries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
- [MDN - Object.keys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [How to iterate over a JavaScript object?](https://stackoverflow.com/questions/14379274/how-to-iterate-over-a-javascript-object)
