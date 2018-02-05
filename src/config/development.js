import baseConfig from './baseConfig';

const development = {
  baseUrl: baseConfig.apiBaseUrl['int'], //eslint-disable-line
};

export default {
  ...baseConfig,
  ...development,
};
