/**
 * Created by nalantianyi on 2017/1/2.
 */
import {combineReducers} from 'redux';
import {
    SELECT_SUBREDDIT, INVALIDTAE_SUBREDDIT,
    REQUEST_POST, RECEIVE_POSTS
} from './actions';

function selectedsubreddit(state = 'reactjs', action) {
    switch (action.type) {
        case SELECT_SUBREDDIT:
            return action.subreddit;
        default:
            return state;
    }
}
function posts(state = {
    isFetching: false, didInvalidate: false,
    items: []
}, action) {
    switch (action.type) {
        case INVALIDTAE_SUBREDDIT:
            return {...state, didInvalidate: false};
        case REQUEST_POST:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            };
        case RECEIVE_POSTS:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receiveAt
            };
        default:
            return state;
    }

}
function postsBySubreddit(state = {}, action) {
    switch (action.type) {
        case INVALIDTAE_SUBREDDIT:
        case RECEIVE_POSTS:
        case REQUEST_POST:
            return {...state, [action.subreddit]: posts(state[action.subreddit],action)};
        default:
            return state;
    }
}
const rootReducer = combineReducers({postsBySubreddit, selectedsubreddit});
export default rootReducer;