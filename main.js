;(function($) {
    $('.logOut').hide();
   //-------drop down box for register and login --------

    $(".register").click(function(){
        $(".toggle").toggle("blind");
        
    });

    $(".logIn").click(function(){
        $(".logToggle").toggle("blind");
    });

    $( ".toggle" ).hide();
    $(".logToggle").hide();

// //--------------Server side Login email validation-------
    
    $("#logInEmail").keyup(function(){
        var emailInput = $('#logInEmail').val();
        var filter = /^[a-zA-Z0-9-_.+]+@[a-zA-Z-_.+]+\.[a-z]{1,6}\.?[a-z]+$/;

        if(!filter.test(emailInput)){

            $('#logInEmail').css('background-color', '#F6CED8');
       
        }else {
            $('#logInEmail').css('background-color', '#64CE7F');
        }

    });

    $('.logInSubmit').click(function(){

        var validate = {
            logInEmail: $("#logInEmail").val(),
            password: $("#logInPassword").val()
        };

        $.ajax({
            url: "login.php",
            type: 'POST',
            cache: false,
            dataType: 'json',
            data: validate,
            error: function(xhr){

                var dataError = $.parseJSON(xhr.responseText);
                console.log(dataError.msg);

                $('.logToggle div').remove(); //removing the div created below so there isn't a duplicate message
                $('.logToggle').prepend('<div>' + dataError.msg + '</div>');
                
            },

            success: function(xhr) { 

                $('div.status').hide();
                $('.logOut').show();
                $('.welcome').text(xhr.msg + ', ' + validate.logInEmail);
                console.log(xhr.msg);

            }

        }); 
        return false;
    });
    $('#submitReg').click(function(){

        var validate = {
            email: $("#email").val(),
            password: $("#password").val()
        };

        // console.log(validate);

        $.ajax({
            url: "register.php",
            type: 'POST',
            cache: false,
            dataType: 'json',
            data: validate,
            error: function(xhr){

                var dataError = $.parseJSON(xhr.responseText);
                console.log(dataError.msg);
                $('.toggle div').remove();
                $('.toggle').prepend('<div>' + dataError.msg + '</div>');
                
            },

            success: function(xhr) { 

                $('div.status').hide();
                $('.logOut').show();
                $('.welcome').text(xhr.msg + ', ' + validate.email);
            }

        }); 
        return false;
    });

    // //--------------Client Side Register email validation-------
    $("#email").keyup(function(){
        var emailInput = $('#email').val();
        var filter = /^[a-zA-Z0-9-_.+]+@[a-zA-Z-_.+]+\.[a-z]{1,6}\.?[a-z]+$/;

        if(!filter.test(emailInput)){

            $('#email').css('background-color', '#F6CED8');
       
        }else {
            $('#email').css('background-color', '#64CE7F');
        }

    });

    // // ------Client Side registration password validation------
    $("#password").keyup(function(){
        var regpass = $('#password').val();
        var filter = /^((?=.*(\d|[@#$%]))(?=.*[a-zA-Z]).{6,20})/;

        if(!filter.test(regpass)){
            $('#password').css('background-color', '#F6CED8');
        }else {
            $('#password').css('background-color', '#64CE7F');
        }

    })
    // //-------registration password match begin------------

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
                message.innerHTML = "Passwords Match!";
            } else {
                //The passwords do not match.
                //Set the color to the bad color and
                //notify the user.
                pass2.style.backgroundColor = badColor;
                message.style.color = badColor;
                message.innerHTML = "Passwords Do Not Match!"
                
            }
    });
    //----------registration submit button disabled/enabled----------
    $('.toggle').keyup( function(){
        var email = $('#email').val();
        var regpass1 = $('#password').val();
        var regpass2 = $('#confirmPassword').val();
        var passfilter = /^((?=.*(\d|[@#$%]))(?=.*[a-zA-Z]).{6,20})/;
        var emailfilter = /^[a-zA-Z0-9-_.+]+@[a-zA-Z-_.+]+\.[a-z]{1,6}\.?[a-z]+$/;
        if(emailfilter.test(email)) {            
            if(passfilter.test(regpass1)) {
                if(regpass1==regpass2){
                    $('#submitReg').prop("disabled", false);
                } else {
                    $('#submitReg').prop("disabled", true);
                }
            } else {
                $('#submitReg').prop("disabled", true);
            }
        } else {
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
                
                var Icons = [];
                var Titles = [];
                var Addresses  =[];

                for (i in data.results) {
                    $('tbody').append(template(data.results[i]));
                    
                    var name = data.results[i]['name'];
                    Titles.push(name);

                    var address = data.results[i]['street_address'];
                    Addresses.push(address);
                    
                    //-----------choosing which pin to use for each place---------------
                    var tweet_count = data.results[i]['tweet_count'];
                    var rating = data.results[i]['rating'];
                    var pin;
                    if(tweet_count <= 50) {
                        if(rating <= 1.5) {
                            pin = "images/redsmall.png";
                        } else if (rating <= 2.5) {
                            pin = "images/orangesmall.png";
                        } else if (rating <= 3.5) {
                            pin = "images/yellowsmall.png";
                        } else { 
                            pin = "images/greensmall.png";
                        }

                    } else if (tweet_count <= 100) {
                        if(rating <= 1.5) {
                            pin = "images/redsmed.png";
                        } else if (rating <= 2.5) {
                            pin = "images/orangemed.png";
                        } else if (rating <= 3.5) {
                             pin = "images/yellowmed.png";
                        } else { 
                             pin = "images/greenmed.png";
                        }

                    } else if (tweet_count <= 150) {
                        if(rating <= 1.5) {
                             pin = "images/redlarge.png";
                        } else if (rating <= 2.5) {
                             pin = "images/orangelarge.png";
                        } else if (rating <= 3.5) {
                             pin = "images/yellowlarge.png";
                        } else { 
                             pin = "images/greenlarge.png";
                        }

                    } else {
                        if(rating <= 1.5) {
                             pin = "images/redxl.png";
                        } else if (rating <= 2.5) {
                             pin = "images/orangexl.png";
                        } else if (rating <= 3.5) {
                             pin = "images/yellowxl.png";
                        } else { 
                             pin = "images/greenxl.png";
                        }
                      }

                      Icons.push(pin);

                };

                var geocoder;
                var map;
                geocoder = new google.maps.Geocoder();
                var latlng = new google.maps.LatLng(33.433702, -111.941948);
                var mapOptions = {
                  zoom: 12,
                  center: latlng
                };
                map = new google.maps.Map(document.getElementById('map_div'), mapOptions);

                for (var i in Icons){
                    //--------geocode db address----------
                    var makePins  = function (index){
                        geocoder.geocode( { 'address': Addresses[index]}, function(results, status) { 
                          if (status == google.maps.GeocoderStatus.OK) {
                            map.setCenter(results[0].geometry.location);
                            //-------defining pin/marker properties-------------
                            var marker = new google.maps.Marker({
                                map: map,
                                position: results[0].geometry.location,
                                icon: Icons[index],
                                title: Titles[index]
                            });
                          } else {
                            alert('Geocode was not successful for the following reason: ' + status);
                          }
                        });

                    };

                    makePins(i);
                }
            }

        });

    });

})(jQuery);









