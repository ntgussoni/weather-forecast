import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
	date: attr('date'),
	avgTemp: attr('number'),
	windSpeed: attr('number'),
	windDegrees: attr('number'),
	icon: attr('string'),
	weatherDescription: attr('string')
});
