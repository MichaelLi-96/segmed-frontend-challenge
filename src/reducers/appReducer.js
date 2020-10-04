import { FILTER_CHANGED } from '../actions/types';
import { reportsData } from '../assets/reportsData';

const INITIAL_STATE = {
	"filter": "",
	"reports": reportsData
}

const appReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FILTER_CHANGED:
			return { 
				...state,
				"filter": action.payload
			};
		default:
			return state;
	}
}

export default appReducer;
