import axios from 'axios';

const BASE_PATH = '';
const getUrl = (path, version = 1) => `${BASE_PATH}/api/v${version}${path}`;
// const getGetUrl = (path, version = 1, data) => `${getUrl(path, version)}${data ? `?${getParamString(data)}` : ''}`;
// const getParamString = params => _.map(params, (value, name) => `${name}=${encodeURIComponent(value)}`).join('&');

export const get = (path, data, version) => axios.get(getUrl(path, version), data);
export const post = (path, data, version) => axios.post(getUrl(path, version), data);
export const put = (path, data, version) => axios.put(getUrl(path, version), data);
export const remove = (path, version) => axios.delete(getUrl(path, version));
