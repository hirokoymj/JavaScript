# Function Constructor - 2
## How to implement inheritance in JavaScript?

- encapsulation
- inheritance
 
Create a professional instance using Person 

```js
"use strict";

function Person(first_name, last_name){
    this.first_name = first_name;
    this.last_name = last_name;
}
Person.prototype.full_name = function () {
    return this.first_name +  " " + this.last_name;
}

function Professional(honorific, first_name, last_name){
//     this.first_name = first_name;
//     this.last_name = last_name;
    Person.call(this, first_name, last_name);// base class is Person!!
    this.honorific = honorific;
}

```


```js
"use strict";

function Person(first_name, last_name){
    this.first_name = first_name;
    this.last_name = last_name;
}
Person.prototype.full_name = function () {
    return this.first_name +  " " + this.last_name;
}

function Professional(honorific, first_name, last_name){
//     this.first_name = first_name;
//     this.last_name = last_name;
    Person.call(this, first_name, last_name);// base class is Person!!
    this.honorific = honorific;
}

Professional.prototype.professional_name = function () {
    return this.honorific + this.first_name +  " " + this.last_name;
}
```


**Q: Why professional.full_name() function happens an error?**
```js
"use strict";

function Person(first_name, last_name){
    this.first_name = first_name;
    this.last_name = last_name;
}
Person.prototype.full_name = function () {
    return this.first_name +  " " + this.last_name;
}

function Professional(honorific, first_name, last_name){
    Person.call(this, first_name, last_name);// base class is Person!!
    this.honorific = honorific;
}

Professional.prototype.professional_name = function () {
    return this.honorific + this.first_name +  " " + this.last_name;
}

var prof = new Professional("Dr.", "Asim", "Hussain");
console.log(prof.professional_name()); // Dr.Asim Hussain
console.log(prof.full_name()); //====== ERROR WHY? ======


```

**A: Add Professional.prototype = Object.create(Person.prototype)**

```js
"use strict";

function Person(first_name, last_name){
    this.first_name = first_name;
    this.last_name = last_name;
}
Person.prototype.full_name = function () {
    return this.first_name +  " " + this.last_name;
}

function Professional(honorific, first_name, last_name){
    Person.call(this, first_name, last_name);// base class is Person!!
    this.honorific = honorific;
}
Professional.prototype = Object.create(Person.prototype);

Professional.prototype.professional_name = function () {
    return this.honorific + this.first_name +  " " + this.last_name;
}


var prof = new Professional("Dr.", "Asim", "Hussain");
console.log(prof.professional_name()); // Dr.Asim Hussain
console.log(prof.full_name()); // Asim Hussain
```