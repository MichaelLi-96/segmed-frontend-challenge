import { FILTER_CHANGED, REPORTS_CHANGED, TAGS_CHANGED } from '../actions/types';
import { reportsData } from '../assets/reportsData';

const INITIAL_STATE = {
	"filter": "",
	"reports": reportsData,
	"currentReports": []
}

const appReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FILTER_CHANGED:
			return { 
				...state,
				"filter": action.payload
			};
		case REPORTS_CHANGED:
			return { 
				...state,
				"currentReports": action.payload
			};
		case TAGS_CHANGED:
			return { 
				...state,
				"reports": action.payload
			};
		default:
			return state;
	}
}

export default appReducer;
