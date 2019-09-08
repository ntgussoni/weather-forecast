import ApplicationAdapter from 'weather-forecast/adapters/application';
import RSVP from 'rsvp';
import $ from 'jquery';
import ENV from 'weather-forecast/config/environment';

export default ApplicationAdapter.extend({
	urlForFindRecord(id, modelName, snapshot) {
		let baseUrl = this.buildURL(modelName, id, snapshot);
		return `${baseUrl}/weather?&appid=${ENV.APP.API_KEY}&id=${id}`;
	},

	query(store, type, query) {
		const { ids = [], ...rest } = query;
		const commaIds = ids.join(',');

		return new RSVP.Promise(function(resolve, reject) {
			$.getJSON(
				`${ENV.APP.API_URL}group?appid=${ENV.APP.API_KEY}&id=${commaIds}&units=metric`,
				rest
			).then(
				function(data) {
					resolve({ weathers: data.list });
				},
				function(jqXHR) {
					reject(jqXHR);
				}
			);
		});
	}
});
