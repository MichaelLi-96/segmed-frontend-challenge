import { 
	FILTER_CHANGED
} from './types';

export const filterChanged = (newFilter) => {
	return {
		type: FILTER_CHANGED,
		payload: newFilter
	};
}