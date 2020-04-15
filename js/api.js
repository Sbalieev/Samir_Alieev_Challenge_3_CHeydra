function getAPIdata() {
	var url = 'https://api.openweathermap.org/data/2.5/weather?appid=d208868a5986aa80b81e3622080a435e';
	var city = document.getElementById('city').value;

	// construct request
	var request = url +  '&' + 'q=' + city;
	
	// get current weather
	fetch(request)
	
	// parse to JSON format
	.then(function(response) {
		if(!response.ok) throw Error(response.statusText);
		return response.json();
	})
	
	// render weather per day
	.then(function(response) {
		// render weatherCondition
		onAPISucces(response);	
	})
	
	// catch error
	.catch(function (error) {
		onAPIError(error);
	});
}

function onAPISucces(response) {
	// get type of weather in string format
	var name = response.name;
	var type = response.weather[0].description;
	
	// get temperature in Celcius
	var degC = Math.floor(response.main.temp - 273.15);

	// get icon for weather
	var iconUrl = 'http://openweathermap.org/img/w/'+response.weather[0].icon+'.png';
	
	// render weather in DOM
	var weatherBox = document.getElementById('weather');
	
	weatherBox.innerHTML =  '<div>' + "It's " + degC + '&#176;C ' + "now in </br>" + '</div>' + name + ' with </br>' + type + '<img src="'+iconUrl+'">'; 
}

function onAPIError(error) {
	console.error('Fetch request failed', error);
	var weatherBox = document.getElementById('weather');
	weatherBox.innerHTML = 'Geen data beschikbaar, controleer de stad nog eens.'; 
}

var populaireSteden = true;

document.getElementById('getWeather').onclick = function(){
	// init data stream
	getAPIdata();
	if(populaireSteden == true){
		getAPIWeerdata();
		populaireSteden = false;
	} 
};


