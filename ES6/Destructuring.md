# ES6 - Object Destructuring
 - Destructuring allows you to assign the properties of an array or object to variables.
 - Object destructuring is used `curly braces {}`.
 - Array destructuring is used `square brackets []`.


**Example 1**
 - Destructuring person object.
```js
const person = {
  name: 'Andrew',
  age: 27,
  location: {
    city: 'Philadelphia',
    temp: 88
  }
};
```

```js
const {name, age, location} = person;
console.log(`${name} is ${age}. the city is ${location.city} and ${location.temp}`);
```

**Example 2**
 - Destructuring social object.
```js
const wes = {
  first: 'Wes',
  last: 'Bos',
  links: {
    social: {
      twitter: 'https://twitter.com/wesbos',
      facebook: 'https://facebook.com/wesbos.developer',
    },
    web: {
      blog: 'https://wesbos.com'
    }
  }
};
```

```js
// Here is the BEST way!!
const {twitter, facebook}  = wes.links.social;

//This way is annoying!!
const twitter = wes.links.social.twitter;
const facebook = wes.links.social.facebook;
```


**Example 3**
 - Destructuring all properties in address.
```js
const address = ['1299 S Juniper Street', 'Santa Monica', 'California', '90064'];
const [street, city, state, zip] = address;
console.log(`You are in ${street} ${city}, ${state} ${zip}.`);
//You are in 1299 S Juniper Street Santa Monica, California 90064.
```

**Example 4**
- Destructuring only city and state in address.
```js
const address = ['1299 S Juniper Street', 'Santa Monica', 'California', '90064'];
const [, city, state] = address;
console.log(`You are in ${city}, ${state}.`);
// You are in Santa Monica, California.
```

**Example 5 - Set default**
- Set state is New York as default
```js
const address = ['1299 S Juniper Street', 'Santa Monica', 'California', '90064'];
```

```js
const [, state='New York'] = address;
console.log(`You are in ${state}`); //You are in New York

```


**Example 6 - coffee menu**
 - Destructuring item and print `A medium Coffee costs $3.50`

```js
const item = ['Coffee', '$3.00', '$3.50', '$3.75'];
```

```js
const [itemName, small, medium, large] = item;
console.log(`A medium ${itemName} costs ${medium}`);
//A medium Coffee costs $3.50
```





#### References:

- https://wesbos.com/destructuring-objects/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment