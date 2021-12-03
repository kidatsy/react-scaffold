import axios from 'axios';

// SETUP: Replace this dummy URL/path with your real base paths
const BASE_PATH = 'https://swapi.dev';
// eslint-disable-next-line no-unused-vars
const getUrl = (path, version = 1) => `${BASE_PATH}/api${path}`;
// const BASE_PATH = process.env.NODE_ENV === 'production' ? PRODUCTION_URL : DEVELOPMENT_URL;
// const getUrl = (path, version = 1) => `${BASE_PATH}/api/v${version}${path}`;

export const get = (path, data, version) => () => axios.get(getUrl(path, version), { params: data });
export const post = (path, data, version) => () => axios.post(getUrl(path, version), data);
export const put = (path, data, version) => () => axios.put(getUrl(path, version), data);
export const remove = (path, version) => () => axios.delete(getUrl(path, version));
