"use strict";

var checkboxManager = (function(){

    // public methods
    return {
        init: function(){

            $("#hobbyForm").submit(function(event){
                event.preventDefault();
                console.log("call submit method");
                var formArray = $(this).serializeArray();
                console.log(formArray);
            });


            // === OK
            $("[name=hobby]").on("click", function() {
                //
                // Get checked item count
                //
                var len = $('[name=hobby]:checked').length;
                console.log(len);

                //
                // get all checked items => each()
                //
                var array = [];
                $("[name=hobby]:checked").each(function(){
                    array.push($(this).val());
                });
                console.log(array);

                //
                // Get Not checked item
                //
                var array2 = [];
                $('[name=hobby]:not(":checked")').each(function(){
                     array2.push($(this).val());
                });
                console.log(array2);


            });

        }
    }//

})();// end of addressbook

//https://stackoverflow.com/questions/10011802/how-to-get-this-selected-option-in-jquery