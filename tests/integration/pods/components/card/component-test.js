import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import page from '../../../../pages/card';

module('Integration | Component | card', function(hooks) {
	setupRenderingTest(hooks);

	test('it renders card information', async function(assert) {
		assert.expect(5);

		const city = {
			name: 'Amsterdam',
			avgTemp: '20',
			icon: '02n',
			windSpeed: '22',
			windDegrees: '18'
		};

		this.set('city', city);

		await render(hbs`<Card @city={{this.city}} />`);

		assert.equal(page.name, city.name, 'contains city name');
		assert.equal(page.temp, `${city.avgTemp}°`, 'contains avg tmp');
		assert.equal(page.windSpeed, `${city.windSpeed}m/s`, 'contains windspeed');
		assert.equal(page.windDegrees, city.windDegrees, 'has degrees arrow');
		assert.equal(page.imageSrc, city.icon, 'Has image');
	});

	test('it renders yield', async function(assert) {
		assert.expect(1);

		await render(hbs`<Card>
      <div data-test-yield>Lorem</div>
    </Card>
    `);

		assert.equal(page.children, 'Lorem', 'Passes down Yield');
	});
});
