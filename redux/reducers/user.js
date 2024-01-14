import {
    combineReducers
} from 'redux';
import {
    actions
} from '../../actions/Login';

const login = (state = {}, action) => {
    switch (action.type) {
        case actions.SUCCESS_LOGIN:
            localStorage.setItem('token', action.response.token);
            return {
                ...state,
                token: localStorage.getItem('token')
            }
        case actions.REQUEST_LOGIN:
            return {
                ...state,
                token: '',
                id: '',
                userName: action.user_name
            }
        case actions.SUCCESS_FETCH_ID:
            return {
                ...state,
                id: action.response.id
            }
        case actions.SUCCESS_FETCH_PROFILE:
            return {
                ...state,
                profile: action.response
            }
        case actions.SUCCESS_LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                profile: {},
                token: localStorage.removeItem('token'),
                id: '',
                userName: ''
            }
        default:
            return state;
    }
};

const isFetching = (state = false, action) => {
    switch (action.type) {
        case actions.REQUEST_LOGIN:
        case actions.REQUEST_LOGOUT:
        case actions.REQUEST_FETCH_ID:
        case actions.REQUEST_FETCH_PROFILE:
            return true;
        case actions.SUCCESS_LOGIN:
        case actions.SUCCESS_LOGOUT:
        case actions.SUCCESS_FETCH_ID:
        case actions.SUCCESS_FETCH_PROFILE:
        case actions.FAILURE_FETCH_PROFILE:
        case actions.FAILURE_FETCH_ID:
        case actions.FAILURE_LOGIN:
        case actions.FAILURE_LOGOUT:
            return false;
        default:
            return state;
    }
};

export default combineReducers({
    login,
    isFetching,
});

export const getLoginIsFetching = state => state.isFetching;

export const getToken = state => state.login.token || '';

export const getUserName = state => state.login.userName || '';

export const getUserID = state => state.login.id || '';

export const getProfile = state => (state.login.profile && {
    ...state.login.profile,
    address: Array.isArray(state.login.profile.address) ? state.login.profile.address.join(', ') : ''
}) || {};

export const getIsLoggedIn = state => (state.login.token !== '' && state.login.id !== '') ? true : false;