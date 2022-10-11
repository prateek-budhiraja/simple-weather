(function () {
	if (!navigator.geolocation) return;

	let long;
	let lat;

	navigator.geolocation.getCurrentPosition((position) => {
		long = position.coords.longitude;
		lat = position.coords.latitude;
		getWeather(long, lat);
	});
})();

function getWeather(long, lat) {
	const api_key = "cb09f1b4bcc638da92043ed22a2b6f31";
	const weather_api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api_key}&units=metric`;

	const geo_api = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&limit=5&appid=${api_key}`;

	fetch(weather_api)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			displayWeather(data);
		});

	fetch(geo_api)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			displayCity(data);
		});
}

function displayWeather(weatherData) {
	const temprature = document.getElementById("temprature");
	const tempImg = document.getElementsByTagName("img")[0];

	temprature.innerText = weatherData.main.temp;
	tempImg.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
}

function displayCity(cityData) {
	const city = document.getElementById("city-name");
	city.innerText = `${cityData[0].name}, ${cityData[0].state}`;
}
