$(function() {
   //-------drop down box for register and login --------
    $(".register").click(function(){
        $(".toggle").toggle("blind");
        
    });

    $(".logIn").click(function(){
        $(".logToggle").toggle("blind");
    });

    $( ".toggle" ).hide();
    $(".logToggle").hide();


    //-------password match begin------------

    $("#confirmPassword").keyup(function() {
        //Store the password field objects into variables ...
        var pass1 = document.getElementById('password');
        var pass2 = document.getElementById('confirmPassword');
        //Store the Confimation Message Object ...
        var message = document.getElementById('confirmMessage');
        //Set the colors we will be using ...
        var goodColor = "#66cc66";
        var badColor = "#ff6666";
        //Compare the values in the password field 
        //and the confirmation field
            if(pass1.value == pass2.value){
                //The passwords match. 
                //Set the color to the good color and inform
                //the user that they have entered the correct password 
                pass2.style.backgroundColor = goodColor;
                message.style.color = goodColor;
                message.innerHTML = "Passwords Match!"
                $('#submitReg').prop("disabled", false);
            }else{
                //The passwords do not match.
                //Set the color to the bad color and
                //notify the user.
                pass2.style.backgroundColor = badColor;
                message.style.color = badColor;
                message.innerHTML = "Passwords Do Not Match!"
                $('#submitReg').prop("disabled", true);
            }
    });
//___________table data populate begin___________________________
    

    $('.go').click(function(){

       var userParam = {
            category: $("#category").val(),
            zip_code: $(".zip").val()
       };

        $.ajax({
            url: "search.php",
            data: userParam,
            cache: false,
            dataType: 'json',
            type: 'POST',
            success: function(data){
                var template = Handlebars.compile( $('#searchResults').html() );
                for (i in data.results) {
                    $('table').append(template(data.results[i]));
                }
            }

        });
    });

});









