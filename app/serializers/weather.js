import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
	normalize(model, hash) {
		hash.avgTmp = hash.main.temp;
		hash.wind = hash.wind.speed;

		return this._super(...arguments);
	}
});
