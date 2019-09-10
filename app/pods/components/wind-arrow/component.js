import Component from '@ember/component';
import { computed } from '@ember/object';
import { isEmpty } from '@ember/utils';
import { htmlSafe } from '@ember/string';

export default Component.extend({
	classNames: ['triangle'],
	attributeBindings: ['style'],

	style: computed('degrees', {
		get() {
			let result = '';
			if (!isEmpty(this.get('degrees'))) {
				const degrees = this.get('degrees');
				result = `transform: rotate(${degrees}deg);`;
			}

			return htmlSafe(result);
		}
	})
});
