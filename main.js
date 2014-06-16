;var App = App || {};
(function($) {

   //-------drop down box for register and login --------
    $(".register").click(function(){
        $(".toggle").toggle("blind");
        
    });

    $(".logIn").click(function(){
        $(".logToggle").toggle("blind");
    });

    // $(".logOut").click(function(){
    //     $('.logOutToggle').toggle('blind');

    // });

    $( ".toggle" ).hide();
    $(".logToggle").hide();
    // $(".logOutToggle").hide();

    // //-------password match begin------------

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
            if(pass1.value == pass2.value) {
                //The passwords match. 
                //Set the color to the good color and inform
                //the user that they have entered the correct password 
                pass2.style.backgroundColor = goodColor;
                message.style.color = goodColor;
                message.innerHTML = "Passwords Match!"
                $('#submitReg').prop("disabled", false);
            } else {
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

        $('tbody').html('');

       var userParam = {
            category: $("#category").val(),
            zip_code: $(".zip").val()
       };

        $.ajax({
            url: "search.php",
            cache: false,
            dataType: 'json',
            type: 'POST',
            data: userParam,
            success: function(data) {
                //-------put data into table on screen-------------
                var template = Handlebars.compile( $('#searchResults').html() );
                for (i in data.results) {
                    $('tbody').append(template(data.results[i]));
                    
                    
                    //-----------choosing which pin to use for each place---------------
                    mapPin = "greenmed.png";
                    // if(tweet_count <= 50) {
                    //     if(rating <= 1.5) {
                    //         var mapPin = "redsmall.png";
                    //     } else if (rating <= 2.5) {
                    //         var mapPin = "orangesmall.png";
                    //     } else if (rating <= 3.5) {
                    //         var mapPin = "yellowsmall.png";
                    //     } else { 
                    //         var mapPin = "greensmall.png";
                    //     }

                    // } else if (tweet_count <= 100) {
                    //     if(rating <= 1.5) {
                    //         var mapPin = "redsmed.png";
                    //     } else if (rating <= 2.5) {
                    //         var mapPin = "orangemed.png";
                    //     } else if (rating <= 3.5) {
                    //         var mapPin = "yellowmed.png";
                    //     } else { 
                    //         var mapPin = "greenmed.png";
                    //     }

                    // } else if (tweet_count <= 150) {
                    //     if(rating <= 1.5) {
                    //         var mapPin = "redlarge.png";
                    //     } else if (rating <= 2.5) {
                    //         var mapPin = "orangelarge.png";
                    //     } else if (rating <= 3.5) {
                    //         var mapPin = "yellowlarge.png";
                    //     } else { 
                    //         var mapPin = "greenlarge.png";
                    //     }

                    // } else {
                    //     if(rating <= 1.5) {
                    //         var mapPin = "redxl.png";
                    //     } else if (rating <= 2.5) {
                    //         var mapPin = "orangexl.png";
                    //     } else if (rating <= 3.5) {
                    //         var mapPin = "yellowxl.png";
                    //     } else { 
                    //         var mapPin = "greenxl.png";
                    //     }
                    //   }

                    //--------geocode db address----------
                    var geocoder;
                    var map;
                        geocoder = new google.maps.Geocoder();
                        var latlng = new google.maps.LatLng(33.433702, -111.941948);
                        var mapOptions = {
                          zoom: 13,
                          center: latlng
                        };
                        map = new google.maps.Map(document.getElementById('map_div'), mapOptions);

                    address = data.results[i]['street_address'];
                    geocoder.geocode( { 'address': address}, function(results, status) {
                      if (status == google.maps.GeocoderStatus.OK) {
                        map.setCenter(results[0].geometry.location);
                        //-------defining pin/marker properties-------------
                        var marker = new google.maps.Marker({
                            map: map,
                            position: results[0].geometry.location,
                            icon: mapPin,
                            title:data.results['name']
                        });
                      } else {
                        alert('Geocode was not successful for the following reason: ' + status);
                      }
                    });
                };
            }

        });


    });

})(jQuery);









