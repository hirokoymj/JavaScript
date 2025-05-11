# Spread Operator for object

- [object spread syntax](https://github.com/tc39/proposal-object-rest-spread) is recently added in JavaScript. 
### Install babel plug-in for spread operator
[babel/plugin-transform-spread](https://babeljs.io/docs/en/babel-plugin-proposal-object-rest-spread#spread-properties)

```js
npm install --save-dev @babel/plugin-transform-spread
```

### Add plug-in into .babelrc file
**.babelrc**
```js
{
  "plugins": ["@babel/plugin-transform-spread"]
}
```

### Example

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

**3. Override existing property from age=27 to age=24**
// Override existing property
console.log({
  age: 27,
  ...user,
  location: 'New York',
});
//{age: 24, name: "Jen", location: "New York"}
```
