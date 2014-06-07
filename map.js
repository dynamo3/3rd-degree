$(function() {

  //------- Google Maps ---------//

  // Creating a LatLng object containing the coordinate for the center of the map
  var latlng = new google.maps.LatLng(33.437287, -112.009881);

  // Creating an object literal containing the properties we want to pass to the map
  var options = {
      zoom: 13, // This number can be set to define the initial zoom level of the map
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP // This value can be set to define the map type ROADMAP/SATELLITE/HYBRID/TERRAIN
  };
  // Calling the constructor, thereby initializing the map
  var map = new google.maps.Map(document.getElementById('map_div'), options);
  
  // Autocomplete - brings in library of search results as person types in input box.
  var acOptions = {
    types: ['geocode']
  };
    
  var autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'),acOptions);
  autocomplete.bindTo('bounds',map);

  // Define Marker properties
  var image1 = new google.maps.MarkerImage('letter_a.png',
      // This marker is 129 pixels wide by 42 pixels tall.
      new google.maps.Size(129, 42),
      // The origin for this image is 0,0.
      new google.maps.Point(0,0),
      // The anchor for this image is the base of the flagpole at 18,42.
      new google.maps.Point(18, 42)
  );

      // Define Marker properties
  var image2 = new google.maps.MarkerImage('letter_b.png',
      // This marker is 129 pixels wide by 42 pixels tall.
      new google.maps.Size(129, 42),
      // The origin for this image is 0,0.
      new google.maps.Point(0,0),
      // The anchor for this image is the base of the flagpole at 18,42.
      new google.maps.Point(18, 42)
  );

  // Add Marker
  var marker1 = new google.maps.Marker({
      position: new google.maps.LatLng(33.431497, -112.056057),
      map: map,
      animation:google.maps.Animation.BOUNCE,
      icon: image1 // This path is the custom pin to be shown. Remove this line and the proceeding comma to use default pin
  });

  var marker2 = new google.maps.Marker({
      position: new google.maps.LatLng(33.452184, -112.043698),
      map: map,
      animation:google.maps.Animation.BOUNCE,
      icon: image2 // This path is the custom pin to be shown. Remove this line and the proceeding comma to use default pin
  });



  // // Add listener for a click on the pin
  // google.maps.event.addListener(marker1, 'click', function() {
  //     infowindow1.open(map, marker1);
  // });

  // // Add information window with custom content
  // var infowindow1 = new google.maps.InfoWindow({
  //      content:  createInfo('Evoluted New Media', 'Ground Floor,
  // 35 Lambert Street,
  // Sheffield,
  // South Yorkshire,
  // S3 7BH
  // <a title="Click to view our website" href="http://www.evoluted.net">Our Website</a>')
  //     });

  //   // Create information window
  //   function createInfo(title, content) {
  //       return '<div class="infowindow"><strong>'+ title +'</strong>'+content+'</div>';
  //   };

  //Add information window with premade content from googlemaps library
  var infoWindow = new google.maps.InfoWindow();

  google.maps.event.addListener(autocomplete, 'place_changed', function() {
    infoWindow.close();
    var place = autocomplete.getPlace();
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }
    // marker1.setPosition(place.geometry.location);
    // infoWindow.setContent('<div><strong>' + place.name + '</strong><br>');
    // infoWindow.open(map, marker1);
    // google.maps.event.addListener(marker,'click',function(e){

    //   infoWindow.open(map, marker);

    // });
  });


// // ---------Geocode to turn zip into Lat/Long -------------------

//   //Geocode function for the origin location
//   function GoogleGeocode() {
//     geocoder = new google.maps.Geocoder();
//     this.geocode = function(address, callbackFunction) {
//       geocoder.geocode( { 'address': address}, function(results, status) {
//         if (status == google.maps.GeocoderStatus.OK) {
//           var result = {};
//           result.latitude = results[0].geometry.location.lat();
//           result.longitude = results[0].geometry.location.lng();
//           callbackFunction(result);
//         } else {
//           alert("Geocode was not successful for the following reason: " + status);
//           callbackFunction(null);
//         }
//       });
//     };
//   };

});







