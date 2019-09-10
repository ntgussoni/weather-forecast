import ApplicationAdapter from 'weather-forecast/adapters/application';
import RSVP from 'rsvp';
import $ from 'jquery';
import ENV from 'weather-forecast/config/environment';

export default ApplicationAdapter.extend({
	findRecord(store, type, id) {
		return new RSVP.Promise(function(resolve, reject) {
			$.getJSON(`${ENV.APP.API_URL}weather?appid=${ENV.APP.API_KEY}&units=metric&id=${id}`).then(
				function(city) {
					resolve({ city });
				},
				function(jqXHR) {
					reject(jqXHR);
				}
			);
		});
	},

	query(store, type, query) {
		const { ids = [], ...rest } = query;
		const commaIds = ids.join(',');

		return new RSVP.Promise(function(resolve, reject) {
			$.getJSON(
				`${ENV.APP.API_URL}group?appid=${ENV.APP.API_KEY}&units=metric&id=${commaIds}`,
				rest
			).then(
				function(data) {
					resolve({ cities: data.list });
				},
				function(jqXHR) {
					reject(jqXHR);
				}
			);
		});
	}
});
