import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import page from '../../../../pages/hourly-weather';

module('Integration | Component | hourly-weather', function(hooks) {
	setupRenderingTest(hooks);

	test('it renders hourlyweather information', async function(assert) {
		assert.expect(4);

		const newDate = new Date('2012-10-11 12:00:00 AM');
		const hour = {
			avgTemp: '20',
			icon: '02n',
			date: newDate
		};

		this.set('hour', hour);

		await render(hbs`<HourlyWeather @hour={{this.hour}} />`);

		assert.equal(page.temp, `${hour.avgTemp}°`, 'contains avg tmp');
		assert.equal(page.hour, '12 am', 'contains hour');
		assert.equal(page.day, '11 Oct', 'contains day');
		assert.equal(page.imageSrc, hour.icon, 'Has image');
	});
});
