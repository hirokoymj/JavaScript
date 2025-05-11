# Function Constructor Pattern - 1
## How to create an instance?
 
1. Function constructor
2. `new` keyword

- The mimic concept of `class` in other language ==  **function constructor** 
- all objects in javascript have a **prototype property**.
- When we need to create multiple instances, a class concept is very useful.




**Exampl 1** - Error - because in strict mode, the default value of `this` is undefined.
```js
"use strict";
function Person(first_name, last_name){
    this.first_name = first_name;
    this.last_name = last_name;
}
var dude = Person("Hiroko", "Yamaji");

```


**Example 2: Function Constructor** - The "new" keyword performs below activity.
```js
"use strict";
function Person(first_name, last_name){
    this.first_name = first_name;
    this.last_name = last_name;
}

var dude = new Person("Hiroko", "Yamaji");
console.log(dude);

// The "new" keyword performs below activity.
var dudu = {};
Person.call(dude, "Hiroko", "Yamaji");
console.log(dude);
```

**Example 3 - Function Constructor** - Creating `dude` instance using Person function constructor.
```js
function Person(first_name, last_name){
    this.first_name = first_name; 
    this.last_name = last_name;
    this.full_name = function(){
        return this.first_name + " " + this.last_name;
    }
}

var dude = new Person("Hiroko", "Yamaji");
console.log(dude.full_name());
```

**Example 4 - How to add a function in a function constructor**
1) Defining a function **IN** a body of a function constructor.
2) Extending prototype properties **OUTSIDE body** of a function constructor.

```js
function Person(first_name, last_name){
    this.first_name = first_name;
    this.last_name = last_name;
    this.full_name = function(){ //<-- 1) In a body of a function constructor.
        return this.first_name + " " + this.last_name;
    }
}
Person.prototype.get_first_name = function () { // 2) Outside body of a function constructor.
    return this.first_name;
}

var dude = new Person("Hiroko", "Yamaji");
console.log(dude.full_name());
console.log(dude.get_first_name());
```

**Example 5 - private variable in a fucntion constructor** 
- Defining a function in body ONLY can set up a private variable.
- Below example, first_name is overwritten to "Grace" but it didn't affect in Person constructor.

```js
function Person(first_name, last_name){
    this.first_name = first_name;
    this.last_name = last_name;
    this.full_name = function(){
        return first_name + " " + last_name; // first_name and last_name in closure are PRIVATE.
                                             // NOT PUBLIC - CAN'T OVERWRITTEN!!!
    }
}
Person.prototype.get_first_name = function () {
    return this.first_name;
}

var dude = new Person("Hiroko", "Yamaji");
console.log(dude.full_name());
console.log(dude.get_first_name());

dude.first_name = "Grace";
console.log(dude.full_name());

```




