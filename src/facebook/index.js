import fetch from 'isomorphic-fetch';

const config = {
  apiPath: 'https://graph.facebook.com/v2.3',
  pageId: '43419843244',
  access_token : 'EAAGNKtcV9UIBAMEFHVi8Gnj3oaDTD11zcvo2x2eJZCduIA7VyPq7q5zrtcLHqq4ljLaJP8D26lMX9J2oPRVkWpQZCJLZAXsxeJDSpr6q5PTpsCc8ZBrqqVFb5aZCMquirhZB8mYWdZBtw8pZAmVLYEsi6v6o4psGUtXzcbMUOGFynAZDZD'
};

export default (path = '', params = 'empty=true') =>
  fetch(
    `${config.apiPath}/${config.pageId}${path}?${params}&access_token=${config.access_token}`
  ).then(resp => resp.json());
