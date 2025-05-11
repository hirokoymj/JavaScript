//
// Object destructuring
//
// Example 1
// const person = {
//   name: 'Andrew',
//   age: 27,
//   location: {
//     city: 'Philadelphia',
//     temp: 88
//   }
// };
// const {name, age, location} = person;
// const {city, temp} = person.location;
// console.log(`${name} is ${age}. the city is ${city} and ${temp} degree`);


// Example 2
// const wes = {
//   first: 'Wes',
//   last: 'Bos',
//   links: {
//     social: {
//       twitter: 'https://twitter.com/wesbos',
//       facebook: 'https://facebook.com/wesbos.developer',
//     },
//     web: {
//       blog: 'https://wesbos.com'
//     }
//   }
// };

// const twitter = wes.links.social.twitter;
// const facebook = wes.links.social.facebook;
// Annoying!

// const {twitter, facebook}  = wes.links.social;
// console.log(twitter, facebook);

//
// Array destructuring
//

// Example 3
// Destructuring all properties in address.
// const address = ['1299 S Juniper Street', 'Santa Monica', 'California', '90064'];
// const [street, city, state, zip] = address;
// console.log(`You are in ${street} ${city}, ${state} ${zip}.`);
// //You are in 1299 S Juniper Street Santa Monica, California 90064.

// Example 4
// // Destructuring only city and state in address.
// const address = ['1299 S Juniper Street', 'Santa Monica', 'California', '90064'];
// const [, city, state] = address;
// console.log(`You are in ${city}, ${state}.`);
// // You are in Santa Monica, California.

// Example 5 - Set default
const address = [];
const [, state='New York'] = address;
console.log(`You are in ${state}`); //You are in New York



// Example 6 - coffee menu
// coffee menu
const item = ['Coffee', '$3.00', '$3.50', '$3.75'];
const [itemName, small, medium, large] = item;
console.log(`A medium ${itemName} costs ${medium}`);
//A medium Coffee costs $3.50