# Const

- Const declared immutable variables.
- The variable is mutable.
- But for an object, we can still change properties of a const object.
- To make an object immutable we use the Object.freeze(...) function.


**Q1**


```js
const foo;
```
**Q1-Answer**
```text
// You can see the syntax error if it is missing inisialize. 
// SyntaxError: Missing initializer in const declaration
```
<hr>

**Q2**
```js
const foo=1;
foo=2;
```

**Q2-Answer**
```text
//Const variable isn't supposed to change over time
// so we're not allowed to give a different.
//TypeError: Assignment to constant variable.
```

<hr>

**Q3**

```js
function test(){
  if(true){
    const tmp = 123;
  }
  console.log(tmp);
}

test(); 
```

**Q3-Answer**
```text
//tmp is not defined
```

**Q4**
```js
let foo = "foo";
foo="moo";
console.log(foo); 
```

**Q4-Answer**
- `let` is mutable 
- The mutable means is that it can change over time.

```text
//moo
```

<hr>

**Q5**

```js
const foo = {};
foo['prop'] = 'moo';
console.log(foo); 
```

**Q5-Answer**

- const is mutable that value is object and add the properties. 
```text
//{prop: "moo"}
```

<hr>

**Q6**
- Non-strict mode

```js
const foo = Object.freeze({});
foo['prop'] = 'Moo';
console.log(foo.prop); 
```

**Q6-Answer**
```text
//undefined
```

<hr>

**Q7**
- strict mode

```js
'use strict';

const foo = Object.freeze({});
foo['prop'] = 'Moo';
console.log(foo.prop); 
```

**Q7-Answer**
```text
//TypeError: Cannot add property prop, object is not extensible
```

## From MDN - const
- Constants are block-scoped, much like variables defined using the let statement. The value of a constant cannot change through re-assignment, and it can't be redeclared.

**Q8**

```js
const number = 42;
try {
  number = 99;
} catch(err) {
  console.log(err);
}
console.log(number);
```

**Q8-Answer**
```text
> TypeError: Assignment to constant variable.
> 42
```

<hr>

**Q9**

```js
for (const property in {a: 1, b: 2}) {
  setTimeout(() => {
    console.log(property);
  }, 100);
}
```

**Q9-Answer**
- for (const property in object) works because with each iteration
 you get a new variable, which is scoped only to that iteration.
  You can easily check that by using a closure inside a loop:

  This logs a and b, but if you change const to var, it logs b twice.

```text
a
b
```
<hr>

**Q10**

```js
for (var property in {a: 1, b: 2}) {
  setTimeout(() => {
    console.log(property);
  }, 100);
}
```

**Q10-Answer**
```js
b
b
```

<hr>

**Q11**
```js
for (let property in {a: 1, b: 2}) {
  setTimeout(() => {
    console.log(property);
  }, 100);
}
```

**Q11-Answer**
```js
b
b
```