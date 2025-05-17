## Quiz (day-3)

**Q1**

- Output ":cry:" to "cry".

```js
const str = ":cry:";
```

**Q1-Answer 1**

```js
const str = ":cry:";
console.log(str.slice(1, -1));
```

**Q1-Answer 2**

```js
const str = ":cry:";
console.log(str.slice(1, str.length - 1));
```

<hr />

**Q2**

- Identify if a given word is emoji.
- `:angry:` is the emoji.

```js
const hackedEmojis = {
  angry: "🎁", // 😠
  thumbsdown: "👏", // 👎
  man_facepalming: "🎅", // 🤦‍♂️
  cry: "‍😄", // 😭
  puke: "🤩", // 🤮
};

console.log(emojifyWord(":angry:"));
```

**Q2-Answer-1**

```js
const emojifyWord = (word) => {
  if (word.startsWith(":") && word.endsWith(":")) {
    const emojiKey = word.slice(1, -1);
    if (hackedEmojis.hasOwnProperty(emojiKey)) {
      return hackedEmojis[emojiKey];
    }
  }
  return word;
};
```

**Q2-Answer-2**

```js
const emojifyWord2 = (word) => {
  if (word.startsWith(":") && word.endsWith(":")) {
    const emojiKey = word.slice(1, -1);

    for (const key in hackedEmojis) {
      if (key === emojiKey) return hackedEmojis[key];
    }
  }
  return word;
};

console.log(emojifyWord2(":angry:"));
```

## Quiz (day4)

**Q1**

- Display emoji (🌇 💣 👮 ✈️ ️🔫) selected at random every 2 seconds from data.js.
- The emoji should print in console. If there is no file, display "Game over!".

**Q1-Answer**

```js
import { films } from "./data.js";

const copyFilms = [...films];

const renderRandomEmoji = () => {
  if (copyFilms.length === 0) {
    console.log("Game over");
    clearInterval(interval);
    return;
  }
  const randomIndex = Math.floor(Math.random() * copyFilms.length);
  const removedItemArr = copyFilms.splice(randomIndex, 1);
  const emoji = removedItemArr[0].emoji.join(" ");
  console.log(emoji);
};

const interval = setInterval(() => {
  renderRandomEmoji();
}, 2000);
```

<hr />

**Q2**
How to stop setInterval()?

**Q2: answer**
clearInterval()

<hr />

**Q3**

- What is different between array.slice() and array.splice()?

**Q3:answer**

- array.slice() -> extracting, returns a new array.
- array.splice() -> removing and adding, modify an original array.
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

## Quiz (day-5)

**Q1**

```js
let anagrams = [
  ["Can Assault", "Santa Claus"],
  ["Refreshed Erudite Londoner", "Rudolf the Red Nose Reindeer"],
  ["Frosty The Snowman", "Honesty Warms Front"],
  ["Drastic Charms", "Christmas Cards"],
  ["Congress Liar", "Carol Singers"],
  ["The Tin Glints", "Silent Night"],
  ["Be The Helm", "Betlehem"],
  ["Is Car Thieves", "Christmas Eve"],
];
```

**Q1-Answer**

```js
const findAnagrams = (array) => {
  const output = [];

  array.forEach((data, index) => {
    const v1 = data[0]
      .replace(/\s+/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("");
    const v2 = data[1]
      .replace(/\s+/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("");
    if (v1 === v2) {
      output.push(data);
    }
  });
  console.log(output);
};
```

<hr />

**Q2**

1. Iteration every elements => no way to stop
2. Early termination

**Q2:answer**

1. map, forEach
2. for, every(), some(), find()

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#description

<p>There is no way to stop or break a forEach() loop </p>

<p>Unlike map(), forEach() always returns undefined and is not chainable. </p>

<p>Early termination may be accomplished with looping statements like for, for...of, and for...in. Array methods like every(), some(), find(), and findIndex() also stops iteration immediately when further iteration is not necessary.</p>

<hr />

**Q3**

- sort() - accending order
- sort() - decending order

**Q3:answer**

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

**Q4**

- Sort the months array by the correct monthly sequence.

```js
const months = ["March", "Jan", "Feb", "Dec"];
const monthList = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
```

**Q4: answer**

- findIndex(callBack)
- indexOf(value)

```js
//solution #1
months.sort((a, b) => (monthList.indexOf(a) < monthList.indexOf(b) ? -1 : 1));
console.log(months); //[ 'Jan', 'Feb', 'March', 'Dec' ]

//solution #2
months.sort((a, b) => {
  const index_a = monthList.findIndex((data) => data === a);
  const index_b = monthList.findIndex((data) => data === b);
  return index_a < index_b ? -1 : 1;
});
```

## Quiz (day-8)

**Q1**

- const word = "TREE" -> `- - - -`
- const word = "gift" -> `- - - -`

```js
const guessContainer = document.getElementById("guess-container");
const word = "TREE";
```

**Q1:answer**

```js
let guessedLetters = word.split("").map(() => "_");
guessContainer.textContent = guessedLetters.join(" ");
```

<hr />

**Q2**

- HTML DOM
- Add a click event lister for the `keyboard-container` element.

```js
<div id="keyboard-container">
  <button class="letter" aria-label="Guess letter a" id="a">
    a
  </button>
  <button class="letter" aria-label="Guess letter b" id="b">
    b
  </button>
</div>
```

**Q2:answer**

```js
document
  .getElementById("keyboard-container")
  .addEventListener("click", checkGuess);
```

<hr />

**Q3**

- Complete the `checkGuess` function in the `addEventListener`.
- If that letter is in the word, that letter replaces the dash in the corresponding position. For the word "TREE", if the player has selected the letter E, they will see --EE.

```js
const word = "tree";
let guessLetters = ["-", "-", "-", "-"];
const letter = "e";
//Output ["-", "-", "e", "e"]
```

**Q3:answer**

```js
const word = "TREE";
const guessLetters = ["-", "-", "-", "-"];
//

function checkGuess(e) {
  let letter = e.target.id;
  if (word.includes(letter)) {
    const updates = word.split("").map((d, index) => {
      if (d === letter) return (dashLetters[index] = letter);
      return dashLetters[index];
    });
    guessContainer.textContent = updates.join(" ");
  }
}

const word = "tree";
let guessLetters = ["-", "-", "-", "-"];
const letter = "e";

if (word.includes(letter)) {
  guessLetters = guessLetters.map((underscore, index) => {
    return word[index] === letter ? letter : underscore;
  });
}

console.log(guessLetters); // Output: ["-", "-", "e", "e"]
```

**Q4:**

- When you click on the letter button, hide the `snowman-part` element for each.

```js
<div class="snowman-container">
  <img class="snowman-part body" src="images/body.png" alt="snowman's body">
  <img class="snowman-part head" src="images/head.png" alt="snowman's head">
  <img class="snowman-part scarf" src="images/scarf.png" alt="snowman's scarf">
  <img class="snowman-part nose" src="images/nose.png" alt="snowman's nose">
  <img class="snowman-part arm" src="images/arm.png" alt="snowman's arm">
  <img class="snowman-part hat" src="images/hat.png" alt="snowman's hat">
</div>
```

**Q4:answer**

```js
const snowmanParts = [...document.querySelectorAll(".snowman-part")];
//const snowmanParts = [...document.getElementsByClassName("snowman-part")];
const hidden = () => {
  if (snowmanParts.length > 0) {
    const removedIndex = Math.floor(Math.random() * snowmanParts.length);
    console.log(removedIndex);
    const removedItem = snowmanParts.splice(removedIndex, 1)[0];
    console.log(removedItem);
    removedItem.style.visibility = "hidden";
  }
};
```

- [MDN querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
  > Returns a static (not live) NodeList
- [MDN getElementsByClassName](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName)
  > Returns a live HTMLCollection of found elements.

<hr />

**Q5: HTML DOM**

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

**Q6:Answer**

- HTML DOM Selector

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

## Quiz (day-9)

**Q1:**

```js
const guest = {
  name: "Alice",
  loves: ["avocado", "quinoa", "kale"],
};

const recipes = [
  {
    name: "Honey-Glazed Ham",
    ingredients: ["pork", "banana", "brown sugar", "kale", "butter"],
  },
];
```

**Q1 - Answer:**

```js
const suitableRecipes = recipes.filter((recipe) => {
  const hasLovedIngredient = recipe.ingredients.some((ingredient) => guest.loves.includes(ingredient););
  return hasLovedIngredient;
});

console.log(suitableRecipes);
```

## Quiz (day-16)

**Q1**: Flatten three nested toysShipped object.

```js
const workshopData = [
  {
    name: "Elf Tiberius III",
    toysMade: {
      "Teddy Bear": 10,
      "Race Car": 5,
      Doll: 7,
    },
    toysShipped: {
      NorthPole: {
        MainWarehouse: [
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
  },
];

/*
Output
[
   {
     name: 'Elf Tiberius III',
     toysMade: { 'Teddy Bear': 10, 'Race Car': 5, Doll: 7 },
     toysShipped: { 'Teddy Bear': 10, 'Race Car': 5, Doll: 7 }
   }
 ]
*/
```

**Q1:answer**

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

## Quiz (Day 18)

**Q1: Output total price ammount.**

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

**Q1:answer**

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

## Quiz (Day-21)

**Q1:**

```js
export const toysRequested = [
  {
    location: "Germany",
    amount: 11000,
    toys: [
      { "🚗 cars": 2500 },
      { "🪁 kites": 3500 },
      { "🎲 board games": 1500 },
      { "🎺 trumpets": 1000 },
      { "🧩 puzzles": 1500 },
      { "🛷 sleds": 1000 },
    ],
  },
  {
    location: "USA",
    amount: 16000,
    toys: [
      { "🎨 art kits": 3000 },
      { "🔫 water guns": 2500 },
      { "🪆 nesting dolls": 2000 },
      { "🛹 skateboards": 2500 },
      { "🎮 video games": 2000 },
      { "🧩 puzzles": 1500 },
      { "🎲 board games": 1500 },
      { "🛷 sleds": 1000 },
    ],
  },
  {
    location: "Japan",
    amount: 18500,
    toys: [
      { "🚀 rocket ships": 3000 },
      { "🐉 dragon figurines": 2500 },
      { "🧩 puzzles": 2000 },
      { "🧙‍♂️ wizard wands": 4000 },
      { "🎲 board games": 4500 },
      { "🎨 art kits": 2500 },
    ],
  },
  {
    location: "Zimbabwe",
    amount: 11500,
    toys: [
      { "🚀 rocket ships": 2000 },
      { "🐉 dragon figurines": 2500 },
      { "🔫 water guns": 2500 },
      { "🪆 nesting dolls": 2000 },
      { "🧩 puzzles": 1500 },
      { "🏀 basketballs": 1000 },
    ],
  },
  {
    location: "India",
    amount: 9000,
    toys: [
      { "📚 coloring books": 4000 },
      { "🧙‍♂️ wizard wands": 2500 },
      { "🎲 board games": 1500 },
      { "🎺 trumpets": 1000 },
    ],
  },
];
```

**Q1:answer**

```js
const flatten = toysRequested.reduce((acc, data) => {
  data.toys.forEach((toy) => {
    const toyName = Object.keys(toy)[0];
    const amount = toy[toyName];
    const isExist = acc.find((d) => d.hasOwnProperty(toyName));

    if (isExist) {
      isExist[toyName] += amount;
    } else {
      acc.push({ [toyName]: amount });
    }
  });
  return acc;
}, []);
console.log(flatten);
```

## Quiz (day-23)

```js
const santasArr = [
  "James",
  "Yi",
  "Grinch",
  "Fatima",
  "Tariq",
  "Grinch",
  "Clare",
  "Grinch",
];
const missingNamesArr = ["Florinda", "Jose", "Gibbs"];

const output = santasArr.map((name) => {
  if (name === "Grinch") {
    name = missingNamesArr.shift();
    return name;
  }
  return name;
});

console.log(output);
//["James", "Yi", "Florinda", "Fatima", "Tariq", "Jose", "Clare", "Gibbs"];
```

## Extra

## How to update a value of an object in the array.

**Q1:**

- The name of the data with ID 2 is "Lala".

```js
let myArray = [
  {id: 0, name: "Jhon"},
  {id: 1, name: "Sara"},
  {id: 2, name: "Domnic"},
  {id: 3, name: "Bravo"}
],
```

**Q1:answer**

1. Use `Array.find()`

```js
const found = myArray.find((d) => d.id === 2);
found.name = "Lala";
console.log(myArray);
// [
//   { id: 0, name: 'Jhon' },
//   { id: 1, name: 'Sara' },
//   { id: 2, name: 'Lala' },
//   { id: 3, name: 'Bravo' }
// ]
```

2. Using ES6 spread operator (...)

```js
const newArray = myArray.map((data) =>
  data.id === 2 ? { ...data, name: "lala" } : data
);
console.log(newArray);
```

## Delete an object value in the array.

```js
const index = state.findIndex((todo) => todo.id === action.payload);
state.splice(index, 1);
```
