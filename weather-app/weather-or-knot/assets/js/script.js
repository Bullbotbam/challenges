let searchBtn = document.querySelector('#search-btn');
let citySearch = document.querySelector('#search-box');
let searchResults = document.querySelector('#search-display');
import moment from 'moment';
moment().format();
let currentDate = document.createElement('span');
currentDate.textContent = moment(data.list[0].dt.value).format(
	'dddd MMMM D, YYYY'
);
searchResults.appendChild(currentDate);
console.log(currentDate);

let weatherNow = data.city.name;

// function to make API call
async function weatherApp(cityName) {
	// api key
	const API_KEY = 'f5c6fa6daa7f1c278db04340a72314da';
	console.log('Hello');
	// openweathermap url endpoint
	const URL =
		'https:/api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}';

	console.log(response);
	fetch(URL).then(function (response) {
		response.json().then(function (data) {
			showWeather(data, city);
		});
	});

	console.log(response);
	// collect data received to API
	let data = await response.json();
	console.log(data);
	function useApiData(data) {}

	let currentWeatherIcon =
		'https://openweathermap.org/img/w/' + data.list[0].weather[0].icon + '.png';
}

// assign the data to be used to the container
searchResults.innerHTML = `<div class="card col-8 offset-2">
  <div class="card">
  <div class="card-body">
  <h3>${weatherNow}<img src="${currentWeatherIcon}"></h3>
  <h4>${currentDate.textContent}</h4>
  <p class="search-temp">
  ${'Temperature: ' + Math.floor(data.list[0].main.temp) + ' °F'} ~ ${
	data.list[0].weather[0].description
}</p>
  
  <p class="search-wind">${
		'Wind speed: ' + Math.floor(data.list[0].wind.speed) + ' MPH'
	}</p>
  <p class="search-humidity">${
		'Humidity: ' + data.list[0].main.humidity + ' %'
	}</p>
  <p class="search-uv">${'UV Rating: ' + data.coord}</p>
  
  </div>
</div>`;

console.log(weatherNow);
console.log(useApiData);
console.log(data);

// display five day forecast
let fiveDayForecast = function (forecast) {
	for (let i = 0; i <= 5; i++) {
		let days = document.querySelector('#date- ' + i);
		days.textContent = moment().add(i, 'days').format('dddd');

		let imageIcon = document.querySelector('#icon-' + i);
		let iconCode = forecast.list[i].weather[0].icon;
		iconImg.setAttribute(
			'src',
			`http://openweathermap.org/img/wn/${iconCode}.png`
		);
		iconImg.setAttribute('alt', forecast.list[i].weather[0].main);

		displayTemp('#temp-' + i, forecast.list[i].temp.day);
		displayTemp('#high-' + i, forecast.list[i].temp.max);
		displayTemp('#low-' + i, forecast.list[i].temp.min);

		let humiditySpan = document.querySelector('#humidity-' + i);
		humiditySpan.textContent = forecast.list[i].humidity;
	}
};

searchBtn.addEventListener('click', () => {
	console.log('button');
	weatherApp();
});
