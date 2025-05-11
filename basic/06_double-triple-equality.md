# What is difference between '==' and '==='?

1. '==' checkes for both type and value equality.
2. '===' checks the equlity of value ONLY.
3. About'===', the result is only TRUE if it compares exact same value.

```js
0 == '' // true
0 == '0' // true
false == 'false' // false (boolean == string)
```

## Triple Equality

**The result is only TRUE if it compares exact same value.**
![Triple Equality](http://www.hirokoymj.com/images/Equality_triple.png)


## Double Equality

**The result is only TRUE if it compares exact same value.**
![Triple Equality](http://www.hirokoymj.com/images/Equality_double.png)


## References:
[JavaScript-Equality-Table](https://dorey.github.io/JavaScript-Equality-Table/)


