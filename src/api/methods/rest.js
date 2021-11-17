import axios from 'axios';

const BASE_PATH = process.env.NODE_ENV === 'production' ? 'PRODUCTION URL' : 'DEV URL'; // SETUP: Replace with your real base paths
const getUrl = (path, version = 1) => `${BASE_PATH}/api/v${version}${path}`;

export const get = (path, data, version) => () => axios.get(getUrl(path, version), { params: data });
export const post = (path, data, version) => () => axios.post(getUrl(path, version), data);
export const put = (path, data, version) => () => axios.put(getUrl(path, version), data);
export const remove = (path, version) => () => axios.delete(getUrl(path, version));
