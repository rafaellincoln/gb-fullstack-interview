const { api } = require('../utils/apiwrapper');
const { dwolla } = require('../utils/dwollaClient');

const FUNDING_SOURCE_URL = '/accounts';
const DWOLLA_ACCOUNT_ID = process.env.DWOLLA_ACCOUNT_ID;

module.exports.service = {
  get: async (data) => {
    const { body } = await dwolla.get(`${FUNDING_SOURCE_URL}/${DWOLLA_ACCOUNT_ID}/funding-sources`);
    return api.parseResponse(body);
  },
}