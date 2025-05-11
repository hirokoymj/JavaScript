## JSONP

Below screenshot is the example for JSONP. The main domain is _webapp.hirokoymj.com_ and to display weather information, OpenWeather API (http://api.openweathermap.org/data/2.5/weather) is called. 
Because of **same origin resource policy** in web browser, if the application below doesn't use jsonp, it will be error.

![jsonp](http://www.hirokoymj.com/images/images_udemy/JSONP_example.png)





## Angular $http.jsonp()

- [$http.jsonp](https://docs.angularjs.org/api/ng/service/$http#jsonp) 

```js
productDB.factory('Weather', function($http) {
    var dataObj = {};

    dataObj.getOpenWeatherAPI = function(unit, longitude, latitude){
        var url = "api.openweathermap.org/data/2.5/weather?q=London&APPD=123&callback=JSON_CALLBACK";
        return $http.jsonp(url);//<----------- Open Weather API is called from different domain which is webapp.hirokoymj.com.
    };

    return dataObj;
});// end of factory
```

### References:
- https://stackoverflow.com/questions/2067472/what-is-jsonp-all-about
