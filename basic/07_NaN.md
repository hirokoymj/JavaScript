# What is the type of NaN?

- NaN stands for "Not A Number"
- The result of a bad calculation for exampe -  "abc"/4.
- NaN equal to ANYTHING is always false even if compared to itself. 
-  isNaN checks if a value is NaN.

```js
// [ Type of NaN ]
typeof NaN
//"number"

// [ a bad calculation ]
"abc"/4
//NaN

// [ Comparing NaN]
// Even if NaN compare itself, it is false.
NaN==NaN
//false

NaN === NaN
//false

isNaN(NaN)
// true

// [ How to check NaN?]
isNaN("A") //true <--- Strange but it is true 

```


## Q: How to check NaN?
## A: use isNaN() function because NaN == NaN is false

