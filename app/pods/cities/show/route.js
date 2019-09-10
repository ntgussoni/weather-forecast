import BaseRoute from 'weather-forecast/pods/base-route/route';
import RSVP from 'rsvp';

export default BaseRoute.extend({
	model({ city_id }) {
		this._super(...arguments);

		return RSVP.hash({
			hourlyWeathers: this.store.query('hourly-weather', {
				id: city_id
			}),
			city: this.store.findRecord('city', city_id)
		});
	},

	setupController(controller, model) {
		this._super(controller, model);

		controller.setProperties({
			hourlyWeathers: model.hourlyWeathers,
			city: model.city
		});
	}
});
