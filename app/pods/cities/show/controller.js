import Controller from '@ember/controller';
import { computed } from '@ember/object';
import moment from 'moment';

export default Controller.extend({
	filteredHourlyWeathers: computed('hourlyWeathers', {
		get() {
			return this.get('hourlyWeathers').slice(0, 10);
		}
	}),

	isDay: computed('filteredHourlyWeathers.[],city.{sunrise,sunset}', {
		get() {
			const nextWeather = this.get('filteredHourlyWeathers.firstObject');
			const date = moment(nextWeather.get('date'));
			const sunrise = moment.unix(this.get('city.sunrise'));
			const sunset = moment.unix(this.get('city.sunset'));

			return date.isBetween(sunrise, sunset);
		}
	})
});
