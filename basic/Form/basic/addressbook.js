"use strict";

var addressbook = (function(){

    var data = {
        addressbook: [],
        firstName: "HIROKO",
        lastName: "Yamaji"
    };

    function saveAddress(formArray){
        var formJson = convertFromArraytoJSON(formArray);
        data.addressbook.push(formJson);
        displayAddress();
    }

    function deleteAddress(id){
        data.addressbook.splice(id,1);
        displayAddress();
    }

    function displayAddress(){
        var source = $("#addressbook-template").html();
        var template = Handlebars.compile(source);
        var html = template(data);
        $("#addressList").html(html);
    }

    function convertFromArraytoJSON(formArray){
        var formJson = formArray.reduce(function(acc, value, index){
            acc[value.name] = value.value;
            return acc;
        }, {});
        return formJson;
    }


    // public methods
    return {
        init: function(){
            // Submit form
            $("#addressForm").submit(function(event){
                event.preventDefault();
                var formArray = $(this).serializeArray(); //[{name: firstname, value: Hiroko}, {name: lastname, value: Yamaji}]
                saveAddress(formArray);
            });

            // Delete
            $(document).on('click', '.delete', function(event){
                event.preventDefault();
                var id = $(this).data('id');
                deleteAddress(id);
            })
        }
    }//

})();// end of addressbook