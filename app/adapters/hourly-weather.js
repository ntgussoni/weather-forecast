import ApplicationAdapter from 'weather-forecast/adapters/application';
import RSVP from 'rsvp';
import $ from 'jquery';
import ENV from 'weather-forecast/config/environment';

export default ApplicationAdapter.extend({
	query(store, type, { id }) {
		return new RSVP.Promise(function(resolve, reject) {
			$.getJSON(`${ENV.APP.API_URL}forecast?appid=${ENV.APP.API_KEY}&units=metric&id=${id}`).then(
				function({ list: hourlyWeathers }) {
					resolve({ hourlyWeathers });
				},
				function(jqXHR) {
					reject(jqXHR);
				}
			);
		});
	}
});
