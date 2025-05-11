

function getCar(make, model, value){
    return {
        make,
        model,
        value,
        ['make' + make]: true,
        depreciate(){}
    }
}


var getCar = (make, model, value) => ({
        make,
        model,
        value,
        ['make' + make]: true,
        depreciate(){}
});



console.log(getCar('Kia', 'Sorento', 40000));




