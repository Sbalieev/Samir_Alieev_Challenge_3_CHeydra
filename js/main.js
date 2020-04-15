function initMap() {
 	
 	//Centreren van map
 	var world = {lat: 41.385063, lng: 2.173404};

 	//toevoegen van map en stylen van map in dark mode.
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 3,
		center: world,
		mapTypeControl: false,
		zoomControl: false,
		styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ],
		streetViewControlOptions: {
              position: google.maps.ControlPosition.RIGHT_TOP
          }
	});

	//Vlieg bestemmingen /////////////
	//////////
	////////
	/////////
	var locations = [
	  ['SpaceX, Los Angeles', 33.920681, -118.328279, 4],
	  ['Schiphol, Amsterdam', 52.310539, 4.768274, 5],
	  ['Sheremetyevo International Airport, Russian Federation.', 55.9703, 37.4088, 3],
	  ['Heydar Aliyev International Airport, Azerbaijan', 40.467164798, 50.041333168, 2],
	  ['Athens International Airport (ATH), Spata Srtemida, Greece', 37.937225, 23.945238, 1]
	];

	var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon:  'img/airplane.png'
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
    ////////
    //////
    ///////

    //Restaurants bestemmingen /////////////
	//////////
	////////
	/////////
	var restaurants = [
	  ['The Clove Club, London, United Kingdom', 51.521580, -0.079258, 4],
	  ['Nusr-Et, Jumeirah Beach Dubai Restaurant Village Four Seasons Resort, United Arab Emirates', 25.202388, 55.240366, 5],
	  ['El Salvadoreño Restaurant Bar, New York, USA.', 40.661790, -74.212758, 3],
	  ['40 Rue Diour Saboun, Marrakesh, Morocco', 31.635638,  -7.989053, 2],
	  ['Косатка / Kosatka, Kiev, Ukraine', 50.455161,  30.511378, 1]
	];

	var infoFoodWindow = new google.maps.InfoWindow();

    var foodMarker, l;

    for (l = 0; l < restaurants.length; l++) {  
      foodMarker = new google.maps.Marker({
        position: new google.maps.LatLng(restaurants[l][1], restaurants[l][2]),
        map: map,
        icon:  'img/food.png'
      });

      google.maps.event.addListener(foodMarker, 'click', (function(foodMarker, l) {
        return function() {
          infoFoodWindow.setContent(restaurants[l][0]);
          infoFoodWindow.open(map, foodMarker);
        }
      })(foodMarker, l));
    }
    ////////
    //////
    ///////
}






	


