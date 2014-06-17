(function($) {



// //--------------Register email validation-------
    $("#email").keyup(function(){
        var emailInput = $('#email').val();
        var filter = /^[a-zA-Z-_.+]+@[a-zA-Z-_.+]+\.[a-z]{2,6}\.?[a-z]+/;

        if(!filter.test(emailInput)){

            $('#email').css('background-color', '#F6CED8');
       
        }else {
            $('#email').css('background-color', '#0B6121');
        }

    });


});