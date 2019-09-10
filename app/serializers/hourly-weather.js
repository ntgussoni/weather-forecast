import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
	normalize(model, hash) {
		hash.id = hash.dt;
		hash.date = hash.dt_txt;
		hash.avgTemp = hash.main.temp;
		hash.windSpeed = hash.wind.speed;
		hash.windDegrees = hash.wind.deg;
		hash.icon = `http://openweathermap.org/img/wn/${hash.weather[0].icon}@2x.png`;
		return this._super(...arguments);
	}
});
