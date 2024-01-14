import { axiosGet, axiosPost } from "./axios";
import apiUrls from "./apiurls";

const processBlogs = ({
    all_blog
}) => all_blog;

const deleteBlog = ({ token, id }) => axiosPost(apiUrls.DELETE_BLOG, id, {
    Authorization: token
}, id).then(
    response => alert('blog deleted successfully')
).catch(
    error => alert('Something went wrong. Please try again later')
);

const createBlog = ({ token, ...data }) => axiosPost(apiUrls.CREATE_BLOG, data, {
    Authorization: token
})
    .then(
        response => alert('blog created successfully')
    )
    .catch(
        error => alert('Something went wrong. Please try again later')
    );

const fetchBlogById = ({ id }) => axiosGet(apiUrls.FETCH_BLOG_BY_ID, {}, id).then(
    response => processBlogById(response.data),
    err => {
        return Promise.reject(() => ({
            message: err,
        }));
    }
);

const countBlog = () => axiosGet(apiUrls.COUNT_BLOG, {}).then(
    response => processCountBlog(response.data),
    err => {
        return Promise.reject(() => ({
            message: err,
        }));
    }
);

const fetchBlogBySlug = ({ slug }) => axiosGet(apiUrls.FETCH_BLOG_BY_SLUG, {}, slug).then(
    response => processBlogById(response.data),
    err => {
        return Promise.reject(() => ({
            message: err,
        }));
    }
);

const fetchBlogs = ({
    skip, limit
}) => axiosGet(apiUrls.FETCH_BLOGS, {}, skip, limit).then(
    response => processBlogs(response.data),
    err => {
        return Promise.reject(() => ({
            message: err,
        }))
    }
);

const updateBlog = ({ token, id, ...data }) => axiosPost(apiUrls.UPDATE_BLOG, data, {
    Authorization: token
}, id)
    .then(
        response => alert('blog updated successfully')
    )
    .catch(
        error => alert('Something went wrong. Please try again later')
    );


export const endPoints = {
    CREATE_BLOG: createBlog,
    FETCH_BLOGS: fetchBlogs,
    // FETCH_BLOG: fetchBlog,
    FETCH_BLOG_BY_ID: fetchBlogById,
    FETCH_BLOG_BY_SLUG: fetchBlogBySlug,
    UPDATE_BLOG: updateBlog,
    DELETE_BLOG: deleteBlog,
    COUNT_BLOG: countBlog,
}