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



	//Oproepen van marker

	//Vlieg bestemmingen
  	addMarker({lat: 33.920681, lng: -118.328279});
  	addMarker({lat: 52.310539, lng: 4.768274});

  	//Toevoegen van marker function
  	function addMarker(coords){
  		var marker = new google.maps.Marker({
		map: map,
		icon:  'img/airplane.png',
		animation: google.maps.Animation.DROP,
		position: coords
	});
  	marker.addListener('click', toggleBounce);
  	}

  		//Vlieg bestemmingen
  	addFoodMarker({lat: 40.391220, lng: 49.843630});
  	addFoodMarker({lat: 41.387340, lng: 2.156200});

  	//Toevoegen van marker function
  	function addFoodMarker(coords){
  		var foodMarker = new google.maps.Marker({
		map: map,
		icon:  'img/food.png',
		animation: google.maps.Animation.DROP,
		position: coords
	});
  	foodMarker.addListener('click', toggleBounce);
  	}


}

//Marker animatie
function toggleBounce() {
	if (marker.getAnimation() !== null) {
		marker.setAnimation(null);
	} else {
		marker.setAnimation(google.maps.Animation.BOUNCE);
	}
}		