# What is the difference between event bubbling and event capturing?

- When the event is fired by a target element(ex. a button), the event is propagating every single parent elements.
- To propagating the event from top to bottom in DOM - it calls **Event Capturing Phase (Phase 1)**.
- To propagating the event from bottom to top in DOM - it calls **Event Bubbling Phase (Phase 2)**. 


**Syntax**
```js
document.addEventListener(event, function, useCapture)
```

- userCapture: **true**: event capturing phase
- useCapture: **false** (default): event bubbling phase

**DOM example**
 <table>
 <tr><td align="center">Window</td></tr>
 <tr><td align="center">document</td></tr>
 <tr><td align="center">body</td></tr>
 <tr><td align="center">first</td></tr>
 <tr><td align="center">second</td></tr>
 <tr><td align="center">third</td></tr>
 <tr><td align="center">forth</td></tr>
 <tr><td align="center">button</td></tr>
 </table>
 

 
 
 # What is difference between stopPropagation and preventDefaut?
 - propagate means to spread them to others.
 - Both - Stop event doing something.
 
 **stopPropagation**
 ```js
To stop event capturing phase or an event bubbling phase.
 
```

**preventDefault**
```html
To stop the target event but event propagation work.
For example, if I' added preventDefautl for a checkbox, the checkbox doesn't checked but event bubbling phase or event capturing phase work after clicking.
```

