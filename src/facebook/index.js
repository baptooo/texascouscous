import fetch from 'isomorphic-fetch';

const config = {
  apiPath: 'https://graph.facebook.com/v2.3',
  pageId: '43419843244',
  access_token : 'EAACEdEose0cBAOhpttXlHFUsvN5PLtfEu4tLwqucT610BfirAf4ZBr9DJd4wwCpyx8tOay5xjAWeyZCJYg3tgoGV7ycFF2KVYDJ6oY9mcxfIsbZBhHOEreh3PUsXfzYkMC6RsaE6YlRL4ZA01dGTS92Vp9YfoEZC5EU2ZBsNqeKBeoR7AkbLnq530p7hmpGxkZD'
};

export default (path = '', params = 'empty=true') =>
  fetch(
    `${config.apiPath}/${config.pageId}${path}?${params}&access_token=${config.access_token}`
  ).then(resp => resp.json());
