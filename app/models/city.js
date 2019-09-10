import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
	name: attr('string'),
	avgTemp: attr('number'),
	windSpeed: attr('number'),
	windDegrees: attr('number'),
	weatherDescription: attr('string'),
	icon: attr('string'),
	sunrise: attr('string'),
	sunset: attr('string')
});
