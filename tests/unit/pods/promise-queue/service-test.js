import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | promise-queue', function(hooks) {
	setupTest(hooks);

	// Replace this with your real tests.
	test('isLoading = FALSE on initialization', function(assert) {
		let service = this.owner.lookup('service:promise-queue');
		assert.notOk(service.get('isLoading'));
	});

	test('isLoading = TRUE if has promises', function(assert) {
		let service = this.owner.lookup('service:promise-queue');

		service.pushPromise('some-id');
		assert.ok(service.get('isLoading'));
	});

	test('isLoading = FALSE if has no promises', function(assert) {
		let service = this.owner.lookup('service:promise-queue');

		service.pushPromise('some-id');
		service.pushPromise('some-id-2');
		assert.ok(service.get('isLoading'), 'isLoading = true on 2 promises');

		service.removePromise('some-id');
		assert.ok(service.get('isLoading'), 'remove a promise and isLoading = true');

		service.removePromise('some-id-2');
		assert.notOk(service.get('isLoading'), 'no promises isLoading  = false');
	});
});
