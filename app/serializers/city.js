import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
	normalize(model, hash) {
		hash.avgTemp = hash.main.temp;
		hash.windSpeed = hash.wind.speed;
		hash.windDegrees = hash.wind.deg;
		hash.sunrise = hash.sys.sunrise;
		hash.sunset = hash.sys.sunset;
		hash.icon = `http://openweathermap.org/img/wn/${hash.weather[0].icon}@2x.png`;
		hash.weatherDescription = hash.weather[0].main;

		return this._super(...arguments);
	}
});
