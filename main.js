$(function() {
    
    $(".register").click(function(){
        $(".toggle").toggle("blind");
        
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
 
    $( ".toggle" ).hide();



});