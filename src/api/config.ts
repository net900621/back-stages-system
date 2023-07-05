import { SERVER_HOST } from '@/config/base';

// 考虑到网站可能有好几个域名，所以单独提出来
// const { host } = window.location;

let _API = 'https://www.baidu.com';
// process.env.REACT_APP_ENV === 'dev' ? '/api' : 'https://www.baidu.com';

const env = (window as any)?.gfdatav1?.env;
if (env === 'boe' && _API !== '/api') {
  _API = SERVER_HOST.offline;
} else if (_API !== '/api') {
  _API = SERVER_HOST.online;
}

// export const ISBOE = process.env.REACT_APP_ENV === 'dev' || env === 'boe';
export const API = _API;

export const URLAPI = '';
