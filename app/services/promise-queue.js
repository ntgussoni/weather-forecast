import { gt } from '@ember/object/computed';
import { A } from '@ember/array';
import Service from '@ember/service';

export default Service.extend({
	init() {
		this._super(...arguments);
		this.set('promiseQueue', A());
	},

	isLoading: gt('promiseQueue.length', 0),

	pushPromise(id) {
		this.get('promiseQueue').pushObject(id);
	},

	removePromise(id) {
		this.get('promiseQueue').removeObject(id);
	}
});
