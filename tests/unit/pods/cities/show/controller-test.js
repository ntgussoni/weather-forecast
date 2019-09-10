import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { run } from '@ember/runloop';

module('Unit | Controller | cities/show', function(hooks) {
	setupTest(hooks);

	test('isDay should be true if date is between sunrise and sunset', function(assert) {
		assert.expect(1);
		const controller = this.owner.lookup('controller:cities/show');
		const city = run(() => this.owner.lookup('service:store').createRecord('city'));
		const hourlyWeather = run(() =>
			this.owner.lookup('service:store').createRecord('hourly-weather')
		);

		hourlyWeather.set('date', new Date(1568161340 * 1000));

		city.setProperties({
			sunrise: 1568151340,
			sunset: 1568196407
		});
		controller.setProperties({ hourlyWeathers: [hourlyWeather], city });

		assert.ok(controller.get('isDay'), 'Date is in daytime');
	});

	test('isDay should be false if date is between sunset and sunrise', function(assert) {
		assert.expect(1);
		const controller = this.owner.lookup('controller:cities/show');
		const city = run(() => this.owner.lookup('service:store').createRecord('city'));
		const hourlyWeather = run(() =>
			this.owner.lookup('service:store').createRecord('hourly-weather')
		);

		hourlyWeather.set('date', new Date(1568151339 * 1000));

		city.setProperties({
			sunrise: 1568151340,
			sunset: 1568196407
		});

		controller.setProperties({ hourlyWeathers: [hourlyWeather], city });

		assert.notOk(controller.get('isDay'), 'Date is in nighttime');
	});
});
