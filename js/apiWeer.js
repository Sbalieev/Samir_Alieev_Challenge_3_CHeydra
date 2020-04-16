function getAPIWeerdata() {
	var request = 'https://api.openweathermap.org/data/2.5/group?id=5128581,292223,524901,703448,2643743&appid=d208868a5986aa80b81e3622080a435e';
	
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
		onAPIWeerSucces(response);	
	})
	
	// catch error
	.catch(function (error) {
		onAPIWeerSucces(error);
	});
}

function onAPIWeerSucces(response) {

	var weatherList = response.list;
	var weatherBox = document.getElementById('steden');
	var omstreken = document.getElementById('omstreken');
	var ookPopulair = "Other cities";

	for(var i=0; i< weatherList.length; i++){
		var temp = Math.floor(weatherList[i].main.temp - 273.15);
		var name = weatherList[i].name;
		var description = weatherList[i].weather[0].description;
		var iconUrl = 'http://openweathermap.org/img/w/'+weatherList[i].weather[0].icon+'.png';
		omstreken.innerHTML = ookPopulair;

		forecastMessage =  '<div class="forecastMoment">';
		forecastMessage +=	 '<div class="name"> '+ name +' </div>';
		forecastMessage +=	 '<div class="time"> '+ temp + ' &#176;C' +' </div>';
		forecastMessage +=	 '<div class="description"> ' + description + ' </div>';
		forecastMessage +=	 '<div class="icon"> <img src="' + iconUrl + '"> </div>';
		forecastMessage += '</div>';
		weatherBox.innerHTML += forecastMessage;
	}
	
}

function onAPIWeerError(error) {
	console.error('Fetch request failed', error);
}