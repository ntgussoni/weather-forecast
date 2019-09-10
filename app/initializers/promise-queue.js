export function initialize(application) {
	application.inject('route', 'promiseQueue', 'service:promise-queue');
	application.inject('controller', 'promiseQueue', 'service:promise-queue');
	application.inject('component', 'promiseQueue', 'service:promise-queue');
}

export default {
	name: 'promise-queue',
	initialize
};
