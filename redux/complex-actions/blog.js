import { actions } from "../action-types/blog";
import { endPoints } from "../../src/API/blog";

export const fetchBlogs = (skip, limit) => (
    dispatch,
    getState
) => dispatch({
    RSAA: {
        types: [
            actions.REQUEST_FETCH_BLOGS,
            actions.SUCCESS_FETCH_BLOGS,
            actions.FAILURE_FETCH_BLOGS
        ],
        method: endPoints.FETCH_BLOGS,
        race: () => false,
        data: {
            skip,
            limit,
        }
    }
});

export const fetchBlogById = id => ({
    RSAA: {
        types: [
            actions.REQUEST_FETCH_BLOG_BY_ID,
            actions.SUCCESS_FETCH_BLOG_BY_ID,
            actions.FAILURE_FETCH_BLOG_BY_ID,
        ],
        method: endPoints.FETCH_BLOG_BY_ID,
        race: () => false,
        data: {
            id,
        },
    },
});

export const fetchBlogBySlug = slug => ({
    RSAA: {
        types: [
            actions.REQUEST_FETCH_BLOG_BY_SLUG,
            actions.SUCCESS_FETCH_BLOG_BY_SLUG,
            actions.FAILURE_FETCH_BLOG_BY_SLUG,
        ],
        method: endPoints.FETCH_BLOG_BY_SLUG,
        race: () => false,
        data: {
            slug,
        },
    },
});

export const createBlog = state => (
    dispatch,
    getState
) => dispatch({
    RSAA: {
        types: [
            actions.REQUEST_CREATE_BLOG,
            actions.SUCCESS_CREATE_BLOG,
            actions.FAILURE_CREATE_BLOG
        ],
        method: endPoints.CREATE_BLOG,
        race: () => false,
        data: {
            ...state,
            images: [state.images],
            token: getToken(getState()),
            sequence: parseInt(state.sequence)
        }
    }
});

export const updateBlog = state => (
    dispatch,
    getState
) => dispatch({
    RSAA: {
        types: [
            actions.REQUEST_UPDATE_BLOG,
            actions.SUCCESS_UPDATE_BLOG,
            actions.FAILURE_UPDATE_BLOG
        ],
        method: endPoints.UPDATE_BLOG,
        race: () => false,
        data: {
            ...state,
            images: [state.images],
            token: getToken(getState()),
            id: state.id,
            sequence: parseInt(state.sequence)
        }
    }
});

export const deleteBlog = id => (
    dispatch,
    getState
) => dispatch({
    RSAA: {
        types: [
            actions.REQUEST_DELETE_BLOG,
            actions.SUCCESS_DELETE_BLOG,
            actions.FAILURE_DELETE_BLOG
        ],
        method: endPoints.DELETE_BLOG,
        race: () => false,
        data: {
            id,
            token: getToken(getState()),
        }
    }
});

export const countBlog = () => (
    dispatch,
    getState
) => dispatch({
    RSAA: {
        types: [
            actions.REQUEST_COUNT_BLOG,
            actions.SUCCESS_COUNT_BLOG,
            actions.FAILURE_COUNT_BLOG,
        ],
        method: endPoints.COUNT_BLOG,
        race: () => false,
    },
});