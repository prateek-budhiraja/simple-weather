(function () {
	if (!navigator.geolocation) return;

	let long;
	let lat;

	navigator.geolocation.getCurrentPosition((position) => {
		long = position.coords.longitude;
		lat = position.coords.latitude;
		const api_key = "cb09f1b4bcc638da92043ed22a2b6f31";
		const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api_key}`;

		fetch(api)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
			});
	});
})();
