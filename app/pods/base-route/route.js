import Route from '@ember/routing/route';
import RouteQueueMixin from 'weather-forecast/mixins/router-promise-queue';

export default Route.extend(RouteQueueMixin, {
	activate: function() {
		this._super();
		window.scrollTo(0, 0);
	}
});
