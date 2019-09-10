import Component from '@ember/component';
import { computed } from '@ember/object';
import { readOnly } from '@ember/object/computed';
import { isEmpty } from '@ember/utils';
import { htmlSafe } from '@ember/string';

export default Component.extend({
	classNames: ['triangle'],
	attributeBindings: ['style', 'data-test-wind-degrees'],
	'data-test-wind-degrees': readOnly('degrees'),

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
