import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
	location: config.locationType,
	rootURL: config.rootURL
});

Router.map(function() {
	this.route('cities', { path: '/' }, function() {
		this.route('show', { path: '/city/:city_id' });
	});
});

export default Router;
