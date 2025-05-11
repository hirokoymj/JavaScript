**Day1**

## String.replace()

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

**Regular Expression - Special characters Class**

- [Character classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)
- `[xyz][a-c]` - Characters class.
- `[^xyz][^a-c]` - Negated character class.
- `.` - Wildcard. Matches any single character
- `\d` - Digit character. Equivalent to [0-9].
- `\D` - Non-digit character. Equivalent to [^0-9]
- `\w` - Word character. Equivalent to [A-Za-z0-9_]
- `\W` - Non-word character. Equivalent to [^A-Za-z0-9_]
- `\s` - White space character.
- `\S` - Non-white space character

```js
const str = "Twas the night before Xmas...";
const newstr = str.replace(/xmas/i, "Christmas");
console.log(newstr); // Twas the night before Christmas...
```

```js
const str = "talking      picture    frames.";
const newstr = str.trim().replace(/\s+/g, " ");
console.log(str);
console.log(`newstr: ${newstr}`); // talking picture frames.
```

## Array.includes()

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

```js
const array1 = [1, 2, 3];

console.log(array1.includes(2));

const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat")); //true
console.log(pets.includes("lion")); // false
```

<hr />

**Day3**

## forEach/map vs for... loop

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
- There is no way to **stop** or break a `forEach()` loop other than by throwing an exception. If you need such behavior, the `forEach()` method is the wrong tool.
- Early termination may be accomplished with looping statements like for, `for...of`, and `for...in`. Array methods like `every()`, `some()`, `find()`, and `findIndex()` also **stops** iteration immediately when further iteration is not necessary.

**Example**

- Check if the hackedEmojis object has a "cry" key and, if so, return its value.

```js
const hackedEmojis = {
  angry: "🎁", // 😠
  thumbsdown: "👏", // 👎
  man_facepalming: "🎅", // 🤦‍♂️
  cry: "‍😄", // 😭
  puke: "🤩", // 🤮
};
const key = "cry";

//Use a for...in loop instead of forEach to allow early exit when the key is found.
for (const key in hackedEmojis) {
  if (key === emojiKey) return hackedEmojis[key];
}
```

## str.split() vs str.splice()

- str.split() -> Dividing -> returns <b>an array</b>.
- str.splice() -> Extracting - returns <b>a new string</b>.

- [MDN string.split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [MDN string.slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)

<hr />

**Day4**

## Array.splice()

- Remove an item from an original array
- `copyFilms.splice(randomIndex, 1); `
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

```js
const months = ["Jan", "March", "April", "June"];
const removed = months.splice(2, 1);
console.log(removed); // Array ["April"]
console.log(months); // Array ["Jan", "March", "June"]
```

## "this" problem

- https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout#the_this_problem
  > When you pass a method to setTimeout(), it will be invoked with a this value that may differ from your expectation. The general issue is explained in detail in the JavaScript reference.

**Callbacks**

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#callbacks

> When a function is passed as a callback, the value of this depends on how the callback is called, which is determined by the implementor of the API. Callbacks are typically called with a this value of undefined (calling it directly without attaching it to any object), which means if the function is non–strict, the value of this is the global object (globalThis).

**Solution**

- **Use a wrapper function**
- A common way to solve the problem is to use a wrapper function that sets this to the required value:
- The wrapper function can be an arrow function:

```js
setTimeout(() => {
  myArray.myMethod();
}, 1000); // prints "zero,one,two" after 2 seconds
```

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#callbacks

> Callbacks
> When a function is passed as a callback, the value of this depends on how the callback is called, which is determined by the implementor of the API. Callbacks are typically called with a this value of undefined (calling it directly without attaching it to any object), which means if the function is non–strict, the value of this is the global object (globalThis).

<hr />

**Day5**

## Array.sort

- [Array.sort](https://github.com/hirokoymj/JavaScript/tree/master/Array/Array-Sort)

```js
(a<b) return -1 // acending order
(a<b) return 1 // decending order

sort((a, b) => a < b ? -1: 1)
sort((a, b) => a < b ? 1: -1)

```

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#parameters
- To memorize this, remember that (a, b) => a - b sorts numbers in ascending order.
- If omitted, the array elements are converted to strings, then sorted according to each character's Unicode code point value.

<hr />

**Day8**

## HTML DOM selectors

- [MDN querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
  > Returns a static (not live) NodeList
- [MDN getElementsByClassName](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName)
  > Returns a live HTMLCollection of found elements.

<hr />

**Q: HTML DOM**

1. Select `sunglasses` element.
2. Select all `snowman-part` elements.
3. Select `guess-container` element.
4. Hide the `sunglasses` element.
5. Print `You Win!` to `guess-container`.
6. Print `<b>You Win!</b>` to `guess-container`.
7. Add click listener.

```js
<div class="snowman-container">
  <img class="sunglasses" src="images/sunglasses.png" alt="sunglasses">
  <img class="snowman-part body" src="images/body.png" alt="snowman's body">
  <img class="snowman-part head" src="images/head.png" alt="snowman's head">
  <img class="snowman-part scarf" src="images/scarf.png" alt="snowman's scarf">
  <img class="puddle" src="images/puddle.png" alt="puddle" />
</div>
<div id="guess-container" aria-live="polite"></div>
<div id="keyboard-container"></div>
```

**A: HTML DOM Selector**

```js
//1.
const sunglasses = document.querySelector(".sunglasses");
//2.
const snowmanParts = document.querySelectorAll(".snowman-part");
//3.
const guessContainer = document.getElementById("guess-container");
//4.
document.querySelector(".sunglasses").style.visibility = "hidden";
//5
document.getElementById("guess-container").textContent = "You Win!";
document.getElementById("guess-container").innerHTML = "<b>TEST</b>";
document
  .getElementById("keyboard-container")
  .addEventListener("click", () => {});
```

<hr />

**Day9**

## What is different between Array.some() and Array.includes()

- [Array.some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
- [Array.includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
- [Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

```js
Array.some(callback); // returns true or false
Array.includes(value); // returns true or false
Array.filter(callback); // returns Array or empty array
```

- **some** takes in a callback function where you can write your own logic to determine if an array contains some element which matches the conditions you wrote.
- The some() method of Array instances tests whether **at least one** element in the array passes the condition. It returns `true`.
- **includes** does a generic `equalTo` comparison on every element and will return true if at least one element in the array is equal to the value to find.

**Example**

- Check if at least one element finds in an array

```js
const guest = { loves: "banana" };
const hasLoved = ["apple", "banana", "mango", "guava"].some(
  (data) => data === guest.loves
);
console.log(hasLoved); // true
```

```js
const guest = { dislike: ["kale", "tomato", "kiwi"] };
const hasDisliked = ["apple", "banana", "mango", "guava"].some((data) =>
  guest.dislike.includes(data)
);
console.log(hasDisliked); //false
```

<hr />

**Day11**

## Shuffle array

```js
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
while (array.length > 0) {
  const randomIndex = Math.floor(Math.random() * array.length);
  const removed = array.splice(randomIndex, 1)[0];
  newArray.push(removed);
}
console.log(newArray);
```

<hr />

**Day13**

## Switch

- [MDN - switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)

```js
switch (expression) {
  case caseExpression1:
    statements;
  case caseExpression2:
    statements;
  // …
  case caseExpressionN:
    statements;
  default:
    statements;
}
```

**Example**

```js
const foo = 0;
switch (foo) {
  case -1:
    console.log("negative 1");
    break;
  case 0:
    console.log(0);
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  default:
    console.log("default");
}
```

## `for...of` vs `for...in`

- [MDN - for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
- [MDN - for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
- `for...of` - Array
- `for...in` - Object

```js
for (variable of iterable)
```

```js
const array1 = ["a", "b", "c"];

for (const element of array1) {
  console.log(element);
}
```

```js
for (variable in object)
```

```js
const object = { a: 1, b: 2, c: 3 };

for (const key in object) {
  console.log(`${key}: ${object[key]}`);
}
```

## Return

- [MDN return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)
- The return statement **ends** function execution and specifies a value to be returned to the function caller.

```js
function correctChangeFromSanta(bills) {
  let fives = 0;
  let tens = 0;
  let twenties = 0;

  for (let bill of bills) {
    switch (bill) {
      case 5:
        return false; //Ends this function and return "false".
      case 10:
      case 20:
    }
  }
  return true; // /Ends this function and return "true".
}
```

<hr />

**Day14**

## SetInterval()

- [setInerval](https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval)
- [setInterval - W3school](https://www.w3schools.com/jsreF/tryit.asp?filename=tryjsref_win_setinterval)

- https://www.programiz.com/javascript/setInterval

#### Example 1: Display a Text Once Every 1 Second

```js
// program to display a text using setInterval method
function greet() {
  console.log("Hello world");
}

setInterval(greet, 1000);
```

```js
Hello world
Hello world
Hello world
Hello world
Hello world
...
```

<hr />

**Example 2: Display Time Every 5 Seconds**

```js
function showTime() {
  // return new date and time
  let dateTime = new Date();

  // return the time
  let time = dateTime.toLocaleTimeString();

  console.log(time);
}

let display = setInterval(showTime, 5000);
```

```js
"5:15:28 PM"
"5:15:33 PM"
"5:15:38 PM"
....
```

## Stop a timer - clearInterval

```js
let count = 0;

let interval = setInterval(function () {
  count += 1;

  if (count === 5) {
    clearInterval(interval);
  }

  let dateTime = new Date();
  let time = dateTime.toLocaleTimeString();
  console.log(time);
}, 2000);
```

```js
4:47:41 PM
4:47:43 PM
4:47:45 PM
4:47:47 PM
4:47:49 PM
```

<hr />

**Day16**

## Nested object

**data structure**

```js
toysShipped: {  //<----Level 1 == Object
  NorthPole: {    //<----Level 2 == Object
    MainWarehouse: [  //<----Level 3 == Array
      { toy: "Teddy Bear", count: 3 },
      { toy: "Race Car", count: 5 },
    ],
    Overflow: [{ toy: "Teddy Bear", count: 2 }],
  },
  Europe: {
    Germany: [{ toy: "Teddy Bear", count: 5 }],
    France: [{ toy: "Doll", count: 7 }],
  },
},
```

**Example**

```js
const result = workshopData.map((data) => {
  const output = Object.values(data.toysShipped).reduce((acc, region) => {
    Object.values(region).forEach((location) => {
      location.forEach((item) => {
        acc[item.toy] = (acc[item.toy] || 0) + item.count;
      });
    });
    return acc;
  }, {});
  return {
    ...data,
    toysShipped: output,
  };
});
```

- [Object.values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

```js
const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};
```

- https://github.com/mendezpvi/javascriptmas-2024

**Day17**<hr />
**Day18**

## array.reduce()

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

**example**

```js
export default [
  {
    item: "Bluetooth Speaker",
    price: 49.99,
    isGift: true,
  },
  {
    item: "Office Chair",
    price: 135.99,
    isGift: true,
  },
  {
    item: "Gardening Gloves",
    price: 19.99,
    isGift: true,
  },
  {
    item: "Moon Cheese",
    price: 4.99,
    isGift: false,
  },
  {
    item: "Lifetime supply of olives",
    price: 299.99,
    isGift: true,
  },
  {
    item: "Pet Rock",
    price: 12.99,
    isGift: true,
  },
  {
    item: "USB Cable",
    price: 8.99,
    isGift: false,
  },
  {
    item: "Banana Holder",
    price: 14.99,
    isGift: true,
  },
  {
    item: "Can of Paint",
    price: 28.99,
    isGift: false,
  },
  {
    item: "Novelty Hot Sauce",
    price: 25.99,
    isGift: true,
  },
];
```

```js
function calculateCost(arr) {
  const total = arr.reduce((acc, data) => {
    if (data.isGift) acc = acc + data.price;
    return acc;
  }, 0); // Your code here!
  console.log(total); //559.9300000000001
  return Math.round(total * 100) / 100;
}

console.log(calculateCost(shoppingCartData)); //559.93
```

<hr />

**Day19**

## Array.join()

- [Array.join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(""));
// Expected output: "FireAirWater"
```

**example**

```js
export const addresses = [
  {
    name: "Holly Berry",
    "address line 1": "12 Snowflake Lane",
    town: "Winterville",
    state: "WV",
    country: "USA",
    relation: "Friend",
    isOnChristmasList: true,
  },
  {
    name: "Chris T. Mas",
    "address line 1": "25 Mistletoe Ave",
    town: "Festive Town",
    state: "FT",
    country: "USA",
    relation: "Uncle",
    isOnChristmasList: false,
  },
```

```js
const labelsContainer = document.querySelector(".labels-container");

const getRandomIndex = (array) => {
  const randomNum = Math.floor(Math.random() * array.length);
  return randomNum;
};

const generateLabel = (addressData) => {
  const printableAddress = addressData.filter(
    (data) => data.isOnChristmasList === true
  );
  const final = printableAddress
    .map((data) => {
      const { name, state, country } = data;
      const icon1 = getRandomIndex(icons);
      const icon2 = getRandomIndex(icons);
      let html = `
            <section>
                <p>${name}</p>
                <p>${state}</p>
                <img scr="icons/${icon1}" alt="${icon1}" />
                <img scr="icons/${icon2}" alt="${icon2}" />
            </section>`;
      return html;
    })
    .join("");
  return final;
};

labelsContainer.innerHTML = generateLabel(addresses);
```

<hr />

**Day23**

## Array.shift

- [Array.shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
- removes the first element from an array
- Returns undefined if array is empty.

```js
const array1 = [1, 2, 3];
const firstElement = array1.shift();
console.log(array1); // Expected output: Array [2, 3]
console.log(firstElement); // Expected output: 1
```

<hr />

<hr />
```
