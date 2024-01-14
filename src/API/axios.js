import axios from "axios";

export const axiosGet = (f, header, ...d) => {
    if (typeof f === 'string') {
        if (!f) return Promise.reject(() => "empty request");
        return axios.get(f, {
            headers: header,
        });
    }

    if (typeof f === 'function') {
        if (!f(...d)) return Promise.reject(() => "empty request");
        return axios.get(f(...d), {
            headers: header,
        });
    }
    return Promise.reject(() => "Invalid Request");
};

export const axiosPost = (f, data, header = {}, ...d) => {
    let headers = {
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*',
        ...header,
    }, url;

    if (typeof f === 'string') {
        if (!f) return Promise.reject(() => "empty request");
        url = f;
    }
    if (typeof f === 'function') {
        if (!f(...d)) return Promise.reject(() => "empty request");
        url = f(...d);
    }
    if (url !== '') return axios.post(url, data, {
        headers,
    });

    return Promise.reject(() => "Invalid Request");
};