import {
	combineReducers
} from 'redux';

import {
	actions
} from '../action-types/blog';

const blogs = (state = [], action) => {
	switch (action.type) {
        case actions.SUCCESS_FETCH_BLOGS:
            return action.response;
        default:
            return state;
	}
};

const blog = (state = [], action) => {
	switch (action.type) {
		case actions.SUCCESS_FETCH_BLOG_BY_SLUG:
		case actions.SUCCESS_FETCH_BLOG_BY_ID:
			return [action.response];
		default:
			return state;
    }
};

const isFetchingIndividual = (state = false, action) => {
	switch (action.type) {
		case actions.REQUEST_FETCH_BLOG_BY_ID:
		case actions.REQUEST_FETCH_BLOG_BY_SLUG:
			return true;
		case actions.SUCCESS_FETCH_BLOG_BY_ID:
		case actions.FAILURE_FETCH_BLOG_BY_ID:
		case actions.SUCCESS_FETCH_BLOG_BY_SLUG:
		case actions.FAILURE_FETCH_BLOG_BY_SLUG:
			return false;
		default:
			return state;
	}
   
};

const count = (state = 0, action) => {
	switch (action.type) {
		case actions.SUCCESS_COUNT_BLOG:
			return action.response;
		default:
			return state;
	}
}

const isFetching = (state = false, action) => {
	switch (action.type) {
		case actions.REQUEST_FETCH_BLOGS:
		case actions.REQUEST_CREATE_BLOG:
		case actions.REQUEST_UPDATE_BLOG:
		case actions.REQUEST_DELETE_BLOG:
		case actions.REQUEST_COUNT_BLOG:
			return true;
		case actions.SUCCESS_UPDATE_BLOG:
		case actions.FAILURE_UPDATE_BLOG:
		case actions.SUCCESS_DELETE_BLOG:
		case actions.FAILURE_DELETE_BLOG:
		case actions.FAILURE_COUNT_BLOG:
		case actions.SUCCESS_COUNT_BLOG:
		case actions.SUCCESS_CREATE_BLOG:
		case actions.FAILURE_CREATE_BLOG:
		case actions.SUCCESS_FETCH_BLOGS:
		case actions.FAILURE_FETCH_BLOGS:
			return false;
		default:
			return state;
	}
};

export default combineReducers({
    blog,
    blogs,
    count,
    isFetching,
    isFetchingIndividual
});

export const getBlogs = state => state.blogs || [];

export const getIsFetchingIndividual = state => state.isFetchingIndividual;

export const getIsFetching = state => state.isFetching;

export const getBlog = (state, id) => (state.blog.length !== 0 && state.blog.find(i => i.id === id)) || '';

export const getBlogBySlug = (state, slug) => (state.blog.length !== 0 && state.blog.find(i => i.slug === slug)) || '';

export const getCount = state => state.count;