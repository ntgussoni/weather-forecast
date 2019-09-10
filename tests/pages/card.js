import { create, text, attribute } from 'ember-cli-page-object';

export default create({
	name: text('[data-test-city-name]'),
	temp: text('[data-test-temp]'),
	windSpeed: text('[data-test-wind-speed]'),
	windDegrees: attribute('data-test-wind-degrees', '[data-test-wind-degrees]'),
	imageSrc: attribute('src', '[data-test-image]'),
	children: text('[data-test-yield]')
});
