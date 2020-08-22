'use strict';

const axios = require('axios');

module.exports.getAccessToken = async (event) => {

  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
    + '?client_id=deeam72letsonevjnsk65aejmm'
    + '&client_secret=m005vn9art6jf05mv8dvs27bp0'
    + '&grant_type=authorization_code'
    + '&redirect_uri=https://rmkraus49.github.io/meetup/'
    + '&code=' + event.pathParameters.code;

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};

module.exports.refreshAccessToken = async (event) => {

  const MEETUP_OAUTH_REFRESH_URL = 'https://secure.meetup.com/oauth2/access'
    + '?client_id=deeam72letsonevjnsk65aejmm'
    + '&client_secret=m005vn9art6jf05mv8dvs27bp0'
    + '&grant_type=refresh_token'
    + '&refresh_token=' + event.pathParameters.code;

  const info = await axios.post(MEETUP_OAUTH_REFRESH_URL);

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};