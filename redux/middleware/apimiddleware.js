// import getIsFetching
// fake data for apis that are not implemented yet
export const apiMiddleware = store => next => action => {
	const callAPI = action.RSAA;
	if (typeof callAPI === 'undefined') {
		return next(action);
	}

	let { method, types, data, race } = callAPI;

	const actionWith = resp => Object.assign({}, data, resp);	// a function that concats data and response

	const params = data && Object.keys(data).map(k => data[k]); //will understand later

	//handle race conditions
	if (
		typeof race === 'function' &&
		((params && race(store.getState(), ...params)) ||
			race(store.getState()))
	) {
		return Promise.resolve();
	}

	const [requestType, successType, failureType] = types;
	next(
		actionWith({
			type: requestType,
		})
	);

	if (typeof method !== 'function') return Promise.resolve();

	return method(data).then(
		response => {
			return next(
				actionWith({
					response,
					type: successType,
				})
			)
		},
		error => {
			return next(
				actionWith({
					type: failureType,
					error: error.message || 'Something bad happened',
				})
			)
		}
	);
};
