# Closure

- Normally a valuable in a function is deleted as soon as a function has been executed. But in Closure, a valuable can keep alive even if the function is finished to execute. This is a closure.
- Closure is an inner function and refers outer scope's variable or functions evey if the outer scope function has been finished to exetute.



**Example 1**
```js
function sayHello(name){
    var text = "Hello " + name;
    return function(){ //<-- Closure
        console.log(text);
    }
}
var sayHiroko = sayHello("Hiroko");
sayHiroko();// Hello Hiroko
```



**Example2** This is NOT Closure.

```js
var foo = [];
for(var i=0; i<10; i++){
    foo[i] = function(){return i}
}

console.log(foo[0]()); //10
console.log(foo[1]()); //10
console.log(foo[2]()); //10
```

**Example 3**  This is Closure.
```js
var foo = [];
for(var i=0; i<10; i++){
    (function(){
        var y = i;
        foo[y] = function(){ // Closure
            return y
        };
    })();
}

console.log(foo[0]());
console.log(foo[1]());
console.log(foo[2]());
```

**Example 4** 
```js
function numberGenerator() {
  // Local “free” variable that ends up within the closure
  var num = 1;
  function checkNumber() { 
    console.log(num);
  }
  num++;
  return checkNumber;
}

var number = numberGenerator();
number(); //2
```

**Example 5**
```js
function sayHello() {
  var say = function() { console.log(hello); }
  // Local variable that ends up within the closure 
  var hello = 'Hello, world!';
  return say;
}
var sayHelloClosure = sayHello(); 
sayHelloClosure(); // ‘Hello, world!’
```

**Example 6**
```js
var x = 10;
function foo(a) {
  var b = 20;

  function bar(c) {
    var d = 30;
    return boop(x + a + b + c + d);
  }

  function boop(e) {
    return e * -1;
  }

  return bar;
}

var moar = foo(5); // Closure  

moar(15); //-80 
```

**Example 7**

```js
var x = 10;

function foo() {
  var y = 20; // free variable
  function bar() {
    var z = 15; // free variable
    return x + y + z;
  }
  return bar;
}

var test = foo();

test(); // 45
```

## References
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures