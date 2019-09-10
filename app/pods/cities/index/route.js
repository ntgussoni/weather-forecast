import BaseRoute from 'weather-forecast/pods/base-route/route';

export default BaseRoute.extend({
	model() {
		this._super(...arguments);
		return this.get('store').query('city', {
			ids: [2759794, 3441575, 2193733, 1796236, 1850147]
		});
	}
});
