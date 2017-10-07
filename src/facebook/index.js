import fetch from 'isomorphic-fetch';

const config = {
  apiPath: 'https://graph.facebook.com/v2.3',
  pageId: '43419843244',
  access_token : 'EAACEdEose0cBABZB0ZBvbNu9o3ArOmZAmgVuFHPaYs7XDU4ceoVfmLvGfAwCZA4HpJgpNu0Dzhwj7mx8D6idbFung5YkEFadKIB67EU9g7IKtGx92dWiZA2NMh2x5agvx4EsV2YzpUGUbgpXZBg6A7xQqSpVUFAQRXWZBp6wYNqAQSpGjZBejNGZBuXWCzDwml7AZD'
};

export default (path = '', params = 'empty=true') =>
  fetch(
    `${config.apiPath}/${config.pageId}${path}?${params}&access_token=${config.access_token}`
  ).then(resp => resp.json());
