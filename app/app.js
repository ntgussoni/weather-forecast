import Ember from 'ember';
import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const App = Application.extend({
	modulePrefix: config.modulePrefix,
	podModulePrefix: config.podModulePrefix,
	Resolver
});

loadInitializers(App, config.modulePrefix);

Ember.onerror = function(error) {
	if (Ember.testing) {
		throw error;
	}

	// ...desired development and production behaviors here...
};

export default App;
