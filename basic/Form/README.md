# Form 

## Basic 1 
- JavaScript module
- jQuery  
- Handlebars.js
- Code: [addressbook.js](https://github.com/hirokoymj/Udemy/blob/master/Form/basic/addressbook.js)

**1. Submit Form**

```js
$('#form').submit(function(event){
    event.preventDefault();    
});
```

**2. Get form data**
```js
$('#form').serializeArray();
```


```js
[
    {name: "firstname", value: "hiroko"},
    {name: "lastname", value: "yamaji"},
    {name: "department", value: "IT"},
    {name: "hobby", value: "yoga"},
    {name: "hobby", value: "Golf"},
    {name: "hobby", value: "Tennis"}
]
```



**3. Convert formArray to JSON**

```js
var formJson = formArray.reduce(function(acc, value, index){
    var existing = acc.hasOwnProperty(value.name);
    if(existing){
        acc[value.name] = [ acc[value.name] ]; //convert string to array
        acc[value.name].push(value.value);
    }else{
        acc[value.name] = value.value;
    }
    return acc;
}, {});
//
//{firstname: "hiroko", lastname: "yamaji", department: "HR", hobby: ["yoga", "golf"]}
//
```
**4. Display form array with Handlebars**
```js
var source = $("#addressbook-template").html();
var template = Handlebars.compile(source);
var html = template(data);
$("#addressList").html(html);
```

## Form selector/event

## Selector
```js
$(id), $(class), $('[name=hobby]')
```

## Submit
```js
$('#form').serializeArray()
```

## Get a selected value(s)
- `:checked`
- `option:selected`

## Selectbox

```html
<select name="department" id="department" multiple="multiple">
    <option value="HR">HR</option>
    <option value="IT">IT</option>
    <option value="Accounting">Accounting</option>
</select>

<select name="skills" id="skills">
    <option value="HTML">HTML</option>
    <option value="CSS">CSS</option>
    <option value="JavaScript">JavaScript</option>
</select>
```


```js
$("#department").on('change', function(){
    var selected = $("#department").val();
    console.log(selected);


    if($(this).add("option:selected").val() == "IT"){
        console.log("IT is selected.");
    }else if( $('[name=department] option:selected').val() == "HR"){
        console.log("HR is selected");
    }

});

$('#skills').on('change', function(){
    var selected = $(this).val();
    console.log(selected);

    if(selected == "CSS"){
        console.log("css is selected");
    }
});
```



```js
var selectedOne = $('#selectbox').val()
var multiple = $("#selectbox").val()
```

## Radio button

```html
<input type="radio" name="commute" value="car" id="commute_car" /><label for="commute_car">car</label>
<input type="radio" name="commute" value="train" id="commute_train"/><label for="commute_train">train</label>
<input type="radio" name="commute" value="bus" id="commute_bus"/><label for="commute_bus">bus</label>
```

```js
$("[name=commute]").on("click", function() {

    var checked = $(this).add(":checked").val();
    console.log(checked);

    var array = [];
    $('[name=commute]:not(":checked")').each(function () {
        array.push($(this).val());
    });
    console.log(array);

    var array2 = [];
    $('[name=hobby]:not(":checked")').each(function(){
    array2.push($(this).val());
    });
    console.log(array2);
});
```


```js
$("#radio").val();
```



## Checkbox
- multiple 

```html
<form id="hobbyForm">
    <input type="checkbox" name="hobby" value="yoga" id="hobby_yoga" /><label for="hobby_yoga">Yoga</label>
    <input type="checkbox" name="hobby" value="golf" id="hobby_golf"/><label for="hobby_golf">Golf</label>
    <input type="checkbox" name="hobby" value="tennis" id="hobby_tennis"/><label for="hobby_tennis">tennis</label>
    <input type="checkbox" name="hobby" value="soccer" id="hobby_soccer"/><label for="hobby_soccer">Soccer</label>
    <hr>
    <input type="submit" value="submit">
</form>
```
```js
$("[name=hobby]").on("click", function() {

    // Get checked item count
    var len = $('[name=hobby]:checked').length;
    console.log(len);

    // get all checked items => each()
    var array = [];
    $("[name=hobby]:checked").each(function(){
        array.push($(this).val());
    });
    console.log(array);

    // Get Not checked item
    var array2 = [];
    $('[name=hobby]:not(":checked")').each(function(){
         array2.push($(this).val());
    });
    console.log(array2);
});
```


## Is selected?


```html
<input type="checkbox" name="hobby" value="yoga" id="hobby_yoga" >
<input type="checkbox" name="hobby" value="golf" id="hobby_golf">
<input type="checkbox" name="hobby" value="tennis" id="hobby_tennis">
```

```js
$('#hobby_golf').is(":checked")
```

**radio button**

```html
<input type="radio" name="commute" value="car" id="commute_car" >
<input type="radio" name="commute" value="train" id="commute_train">
<input type="radio" name="commute" value="bus" id="commute_bus">
```

```js
$("#commute_car").is(":checked")
```

**selectbox**

```html
<select name="skills" id="skills">
    <option value="HTML">HTML</option>
    <option value="CSS">CSS</option>
    <option value="JavaScript">JavaScript</option>
</select>
```

```js
var selected = $("#skill").val();
if(selected == "css"){
    console.log("css is selected");
}
```

## Events

```text
selectbox- change()
checkbox - click
radio - click
```
```js
$('#selectbox').change(function(){})
$('#checkbox').on('click', function(){})
$("#radio").on('click', function(){})

```






# Method 2 - jQuery Ajax+PHP

- Module - Creating public and private area. Also a module name is namespace.
- return {} object
```js
var addressbook = (function(){
    return {} 
})();
```

## Ajax
**"tudd"** - type, url, data, dataType
```js
$.ajax({}) 
```

```js
function addData(formdata){
    $.ajax({ //tudd
        type: "POST",
        url: "",
        data: formdata,
        dataType: 'json',
        success: function(){},
        error: function(){}
    });
}
```





# References:
- [jQuery Events](https://api.jquery.com/category/events/form-events/)
- [Events](https://api.jquery.com/category/events/)
- [Handlebars](http://handlebarsjs.com/)