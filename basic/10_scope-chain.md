# What is the scope chain?

- The scope chain is how Javascript resolve a variable.
- There are two scopes - Global Scope and Function Scope. 
- In function scope, JavaScript looks for a variable **its own scope first**. If it can't find it, JavaScript looks **next outer scope**. If it can't find again, JavaScript keep on looking **next outer, outer until it reaches the global scope**.


**Example 1**
```js
function foo(){
	console.log(myvar); // Error: myvar is not defined.
	                    // JavaScript can't find myvar inside foo function scope.
}

function goo(){
	var myvar = 1;
	foo();
}
goo();
```


**Fixed Example 1**
```js
function goo(){
    var myvar = 1;
    function foo(){
        console.log(myvar); // 1
                            // JavaScript can find myvar variable its same scope.
    }	
    foo();
}
goo();
```