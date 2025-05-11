"use strict";

var dropdownManager = (function(){

    // public methods
    return {
        init: function(){

            $("#Form").submit(function(event){
                event.preventDefault();
                console.log("call submit method");
                var formArray = $(this).serializeArray();
                console.log(formArray);
            });

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
        }
    }//

})();// end of addressbook

//https://stackoverflow.com/questions/10011802/how-to-get-this-selected-option-in-jquery