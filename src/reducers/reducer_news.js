
import { FETCH_ARTICLES } from '../actions/index';
import _ from 'lodash';

const INITIAL_STATE = { articles: [] };

export default function(state = INITIAL_STATE, action) {
    
    switch(action.type) {
        case FETCH_ARTICLES:
        return { ...state, articles: action.payload.data.articles }
    }

    return state;
}