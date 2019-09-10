import { create, text, attribute } from 'ember-cli-page-object';

export default create({
	temp: text('[data-test-temp]'),
	imageSrc: attribute('src', '[data-test-image]'),
	hour: text('[data-test-hour]'),
	day: text('[data-test-day]')
});
