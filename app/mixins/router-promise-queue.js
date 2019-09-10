import Mixin from '@ember/object/mixin';

export default Mixin.create({
	model() {
		this.get('promiseQueue').pushPromise(this.get('routeName'));
	},

	afterModel() {
		this.get('promiseQueue').removePromise(this.get('routeName'));
	},

	actions: {
		willTransition() {
			this.get('promiseQueue').removePromise(this.get('routeName'));
		},

		error() {
			this.get('promiseQueue').removePromise(this.get('routeName'));
		}
	}
});
