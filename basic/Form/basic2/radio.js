"use strict";

var radioManager = (function(){

    // public methods
    return {
        init: function(){

            $("#Form").submit(function(event){
                event.preventDefault();
                console.log("call submit method");
                var formArray = $(this).serializeArray();
                console.log(formArray);
            });


            // === OK
            $("[name=commute]").on("click", function() {

                var checked = $(this).add(":checked").val();
                console.log(checked);

                var array = [];
                $('[name=commute]:not(":checked")').each(function () {
                    array.push($(this).val());
                });
                console.log(array);

                //
                // var array2 = [];
                // $('[name=hobby]:not(":checked")').each(function(){
                //      array2.push($(this).val());
                // });
                // console.log(array2);


            });

        }
    }//

})();// end of addressbook

//https://stackoverflow.com/questions/10011802/how-to-get-this-selected-option-in-jquery