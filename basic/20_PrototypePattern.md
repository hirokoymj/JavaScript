# Prototype OO Pattern

- Only using prototype chain
- NO function constructor and NO `new` keyword
- This way is not mimic way for classical language such like Java.

- JavaScript has to offer natively rather than attempting to imitate features of other languages. 


## How to create instance via the prototype pattern.
**Basic**
- Use **Object.create()** method

```js
var Person = {
	full_name: function(){
		return this.first_name + " " + this.last_name; 
	}
};

var asim = Object.create(Person);
console.log(asim); //{}
```


**Method 1**


| Step  | Description  |
|-------|--------------|
|  Basic Object  |  Create Person object |
|  Instance | Create asim object pointed to Person object using Object.create()  |
|  Initialize |  Initialize asim object with "asim" and "hussain" |


```js
var Person = {
	init: function(first_name, last_name){
		this.first_name = first_name;
		this.last_name = last_name;
		return this;
	},
	full_name: function(){
		return this.first_name + " " + this.last_name; 
	}
};

var asim = Object.create(Person);
asim.init("asim", "hussain")
console.log(asim.full_name());// asim hussain
```

**Method 2**

| Step  | Description  |
|-------|--------------|
|  Basic Object  |  Create Person object |
|  Instance/Initialize | Create asim object using Object.create method, in which the properties are initialized. |


```js
var Person = {
	full_name: function(){
		return this.first_name + " " + this.last_name; 
	}
};

var asim = Object.create(Person, {
	first_name: {value: "asim"},
	last_name: {value: "hussain"}
});

console.log(asim.full_name());
```

**Method 3**

| Step  | Description  |
|-------|--------------|
|  Basic Object  |  Create Person object |
|  Instance/Initialize | Create Factory method to generate an instance. |


```js
var Person = {
	full_name: function(){
		return this.first_name + " " + this.last_name; 
	}
};

function PersonFuctory(first_name, last_name){
	var person = Object.create(Person);
	person.first_name = first_name;
	person.last_name = last_name;
	return person;

}

var asim = PersonFuctory("asim", "hussain");
console.log(asim.full_name());
```

## How to implement inheritance?
- Just keep adding prototype chain.

**Basic**

```js
// Person object
var Person = {
	full_name: function(){
		return this.first_name + " " + this.last_name; 
	}
};

// Professional object is created pointed to Person object.
var Professional = Object.create(Person);

// asim object is created pointed to Professional object.
var asim = Object.create(Professional);
```

**Method 1**

```js
var Person = {
	full_name: function(){
		return this.first_name + " " + this.last_name; 
	}
};

var Professional = Object.create(Person, {
	init: {
		value: function(honorific, first_name, last_name){
			this.honorific = honorific;
			this.first_name = first_name;
			this.last_name = last_name;
		}
	},
	professional_name: {
		value: function(){
			return this.honorific + " " + this.first_name + " " + this.last_name; 
		}
	}
});


var asim = Object.create(Professional);
asim.init("mr.", "asim", "hussain");

console.log(asim.full_name());
console.log(asim.professional_name());
```


**Using Factory method (not sure it is correct...)**

```js
var Person = {
	full_name: function(){
		return this.first_name + " " + this.last_name; 
	}
};


function ProfessionalFactory(honorific, first_name, last_name){
	var human = Object.create(Person);
	
	human.first_name = first_name;
	human.last_name = last_name;
	human.honorific = honorific;
	human.professional_name = function(){
		return honorific + " " + first_name + " " + last_name; 
	}
	return human;
}


var asim = ProfessionalFactory("mr.", "asim", "hussain");

console.log(asim.full_name()); //asim hussain
console.log(asim.professional_name()); // mr. asim hussain
```

