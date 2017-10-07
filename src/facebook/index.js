import fetch from 'isomorphic-fetch';

const config = {
  apiPath: 'https://graph.facebook.com/v2.3',
  pageId: '43419843244',
  access_token : 'EAACEdEose0cBAJnjiL8vPDFZAGEJtZCJRo3o7t9GeHgTiaEcyWCZAjq8yZBo5BQ5TAZCYZCordEAfHd56zpZCS5L6XZCJV3RfXWQYWJWxO9iGxb7NjDCYOMn2cz9hSQyV1m4KlzYLmV0L69rJ1Tz4B3cKHr2kC1spywCiPkk5DAFoaSKXUHGQh5qDI5cUNneBsYZD'
};

export default (path = '', params = 'empty=true') =>
  fetch(
    `${config.apiPath}/${config.pageId}${path}?${params}&access_token=${config.access_token}`
  ).then(resp => resp.json());
