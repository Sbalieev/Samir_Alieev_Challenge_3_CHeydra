function getCorona() {
	var request = 'https://api.covid19api.com/summary';
	var requestOptions = {
	  method: 'GET',
	  redirect: 'follow'
	};
	// get current weather
	fetch(request, requestOptions)
	
	// parse to JSON format
	.then(function(response) {
		if(!response.ok) throw Error(response.statusText);
		return response.json();
	})
	
	// render weather per day
	.then(function(response) {
		// render weatherCondition
		onCoronaSucces(response);	
	})
	
	// catch error
	.catch(function (error) {
		onCoronaSucces(error);
	});
}

function onCoronaSucces(response) {
	var reach = response.Global;
	
	var newConfirmed = response.Global.NewConfirmed;
	var totalConfirmed = response.Global.TotalConfirmed;
	var newDeaths = response.Global.NewDeaths;
	var totalDeaths = response.Global.TotalDeaths;
	var newRecovered = response.Global.NewRecovered;
	var totalRecovered = response.Global.TotalRecovered;

	document.getElementById("newConfirmed").innerHTML = newConfirmed;
	document.getElementById("totalConfirmed").innerHTML = totalConfirmed;
	document.getElementById("newDeaths").innerHTML = newDeaths;
	document.getElementById("totalDeaths").innerHTML = totalDeaths;
	document.getElementById("newRecovered").innerHTML = newRecovered;
	document.getElementById("totalRecovered").innerHTML = totalRecovered;
}

function onCoronaError(error) {
	console.error('Fetch request failed', error);
}

getCorona();