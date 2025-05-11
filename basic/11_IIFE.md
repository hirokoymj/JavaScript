# IIFE Immidiately invoked function
- IIFE - Immidiately Invoked Function Expression
- Once the file is loaded, IIFE invokes- there is no need to call function name bracket`()`.



```js
function test(){
    console.log('hello');    
}
test(); //<--invoked 
```

**test.js**
- Once test.js is loaded, below function is invoked.
```js
(function (){
    console.log('hello');    
})(); //<-- Invoked

```
## Example 

**main.js**
```js
"use strict";
(function () {
    var thing = {"hello": "main"};
    console.log(thing);
})();
```

**other.js**
```js
"use strict";
(function () {
    var thing = {"hello": "other"};
    console.log(thing);
})();
```

**index.html**
```html
<!DOCTYPE html>
<html lang="en">
<body>
    <script src="main.js"></script>
    <script src="other.js"></script>
</body>
</html>
```

**Result of executing index.html**
```js
{hello: "main"}
{hello: "other"}
```
