import DS from 'ember-data';
import ENV from 'weather-forecast/config/environment';

export default DS.JSONAPIAdapter.extend({
	host: ENV.APP.API_HOST
});
