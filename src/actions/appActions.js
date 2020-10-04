import { 
	FILTER_CHANGED,
	REPORTS_CHANGED
} from './types';

export const filterChanged = (newFilter) => {
	return {
		type: FILTER_CHANGED,
		payload: newFilter
	};
}

export const reportsChanged = (newReports) => {
	return {
		type: REPORTS_CHANGED,
		payload: newReports
	};
}