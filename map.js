;var App = App || {};
(function($) {

  //--------geocoder turns location search value into lat/long for maps api-----------
  var geocoder;
  var map;
  function initialize() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(33.433702, -111.941948);
    var mapOptions = {
      zoom: 13,
      center: latlng
    };
    map = new google.maps.Map(document.getElementById('map_div'), mapOptions);
  };

  //-----run geocoder when click search button------------------
  $('.go').click(function() {
    var address = document.getElementById('zip').value;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        // var marker = new google.maps.Marker({
        //     map: map,
        //     position: results[0].geometry.location,
        //     icon: mapPin,
        //     title:data.results['name']
        // });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  });

  google.maps.event.addDomListener(window, 'load', initialize);

  // //--------get addresses of each place in search results from database----------
  // function getAddress (callback){
  //   $.getJson('http://yoganow-api.herokuapp.com/api/yoga_studios.json?lat=');
  // };

  // getAddress(function (data){
  //   var addresses= data.results['address'];
  //   var address, latLng;
  //   for(i in address) {
  //     address = addresses[i];
  //     latLng = new google.maps.LatLng(address.latitude, address.longtiude)

  //     //-----------choosing which pin to use for each place---------------
  //     var mapPin = "";
  //     if(tweet_count <= 50) {
  //       if(rating <= 1.5) {
  //         var mapPin = "redsmall.png";
  //        } else if (rating <= 2.5) {
  //         var mapPin = "orangesmall.png";
  //       } else if (rating <= 3.5) {
  //         var mapPin = "yellowsmall.png";
  //       } else { 
  //         var mapPin = "greensmall.png";
  //       }

  //     } else if (tweet_count <= 100) {
  //       if(rating <= 1.5) {
  //         var mapPin = "redsmed.png";
  //        } else if (rating <= 2.5) {
  //         var mapPin = "orangemed.png";
  //       } else if (rating <= 3.5) {
  //         var mapPin = "yellowmed.png";
  //       } else { 
  //         var mapPin = "greenmed.png";
  //       }

  //     } else if (tweet_count <= 150) {
  //       if(rating <= 1.5) {
  //         var mapPin = "redlarge.png";
  //        } else if (rating <= 2.5) {
  //         var mapPin = "orangelarge.png";
  //       } else if (rating <= 3.5) {
  //         var mapPin = "yellowlarge.png";
  //       } else { 
  //         var mapPin = "greenlarge.png";
  //       }

  //     } else {
  //       if(rating <= 1.5) {
  //           var mapPin = "redxl.png";
  //         } else if (rating <= 2.5) {
  //           var mapPin = "orangexl.png";
  //         } else if (rating <= 3.5) {
  //           var mapPin = "yellowxl.png";
  //         } else { 
  //           var mapPin = "greenxl.png";
  //         }
  //     }

  //     //-------defining pin/marker properties-------------
  //     var marker = new google.maps.Marker({
  //       position:latLng,
  //       map:map,
  //       title:studio.name,
  //       icon:mapPin
  //     });
  //   }
  // });

  // // Define Marker properties
  // var image1 = new google.maps.MarkerImage('letter_a.png',
  //     // This marker is 129 pixels wide by 42 pixels tall.
  //     new google.maps.Size(129, 42),
  //     // The origin for this image is 0,0.
  //     new google.maps.Point(0,0),
  //     // The anchor for this image is the base of the flagpole at 18,42.
  //     new google.maps.Point(18, 42)
  // );


  // // Define Marker properties
  // var image2 = new google.maps.MarkerImage('letter_b.png',
  //     // This marker is 129 pixels wide by 42 pixels tall.
  //     new google.maps.Size(129, 42),
  //     // The origin for this image is 0,0.
  //     new google.maps.Point(0,0),
  //     // The anchor for this image is the base of the flagpole at 18,42.
  //     new google.maps.Point(18, 42)
  // );

  // // Add Marker
  // var marker1 = new google.maps.Marker({
  //     position: new google.maps.LatLng(33.431497, -112.056057),
  //     map: map,
  //     icon: image1 // This path is the custom pin to be shown. Remove this line and the proceeding comma to use default pin
  // });

  // var marker2 = new google.maps.Marker({
  //     position: new google.maps.LatLng(33.452184, -112.043698),
  //     map: map,
  //     icon: image2 // This path is the custom pin to be shown. Remove this line and the proceeding comma to use default pin
  // });

  // };






})(jQuery);




