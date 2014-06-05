$(function() {
   //-------drop down box for register and login --------
    $(".register").click(function(){
        $(".toggle").toggle("blind");
        
    });
<<<<<<< HEAD
=======

    $(".logIn").click(function(){
        $(".logToggle").toggle("blind");
    });

    // // run the currently selected effect
    // function runEffect() {
 
    //   // run the effect
    //   $( "#effect" ).show( $.effects.effect.blind, 500, callback );
    // };
 
    // //callback function to bring a hidden box back
    // function callback() {
    //   setTimeout(function() {
    //     $( "#effect:visible" ).removeAttr( "style" ).fadeOut();
    //   }, 1000 );
    // };
 
    // // set effect from select menu value
    // $( "#button" ).click(function() {
    //   runEffect();
    //   return false;
    // });
>>>>>>> a6521f2edbafc5ab29d50b9597a0ef881e1fbf25
 
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
            }else{
                //The passwords do not match.
                //Set the color to the bad color and
                //notify the user.
                pass2.style.backgroundColor = badColor;
                message.style.color = badColor;
                message.innerHTML = "Passwords Do Not Match!"
            }
    });



});