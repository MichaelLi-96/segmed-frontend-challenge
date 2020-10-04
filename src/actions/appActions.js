import { 
	FILTER_CHANGED,
	REPORTS_CHANGED,
	TAGS_CHANGED
} from './types';

export const filterChanged = (payload) => {
	return {
		type: FILTER_CHANGED,
		payload: payload
	};
}

export const reportsChanged = (payload) => {
	return {
		type: REPORTS_CHANGED,
		payload: payload
	};
}

export const tagsChanged = (payload) => {
	return {
		type: TAGS_CHANGED,
		payload: payload
	};
}
