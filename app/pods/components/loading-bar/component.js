import Component from '@ember/component';
import { alias } from '@ember/object/computed';

export default Component.extend({
	isLoading: alias('promiseQueue.isLoading')
});
