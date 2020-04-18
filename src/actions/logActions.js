import { GET_LOGS, SET_LOADING, LOGS_ERROR } from './types';

// export const getLogs = () => {
// 	return async dispatch => {
// 		setLoading();

// 		const res = await fetch('/logs');
// 		const data = await res.json();

// 		dispatch({
// 			types: GET_LOGS,
// 			payload: data
// 		});
// 	};
// };

export const getLogs = () => async dispatch => {
	try {
		setLoading();

		const res = await fetch('/logs');
		const data = await res.json();

		dispatch({
			types: GET_LOGS,
			payload: data
		});
	} catch {
		dispatch({
			types: GET_LOGS,
			payload: data
		});
	}
};
