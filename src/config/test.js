import baseconfig from './baseConfig';

const test = {
  baseUrl: 'https://int-edge.ditech.us',
  fmaBaseUrl: '',
  logoutBaseUrl: '',
  staticAppUrl: 'https://int-myaccount.ditech.us',
  authBaseUrl: '',
};

export default {
  ...baseconfig,
  ...test,
};
