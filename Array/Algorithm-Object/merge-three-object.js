var gdp = {
    "city": "LA",
    "gdp": [],  
};

var income = {
    "city": "LA",
    "income": [],  
};

var uRate = {
    "city": "SF",
    "uRate": [],  
};
//{ city: [ 'LA', 'LA', 'SF' ], gdp: [], income: [], uRate: [] }

function extend(a,b,c){
    var output = {};
    var array = [a, b, c];

    array.forEach(function(obj){
        for(var key in obj){

            if(output.hasOwnProperty(key)){
                output[key].push(obj[key]);
            }else{ 
                // not existing
                //var v = (typeof obj[key] == 'string') ? [obj[key]]: obj[key]; //"[LA]"
                if(typeof obj[key] == 'string'){
                    obj[key] = [ obj[key] ];
                }

                output[key] = v;
            }
        }    

    });
    return output;
}
console.log(extend(gdp, income, uRate));


