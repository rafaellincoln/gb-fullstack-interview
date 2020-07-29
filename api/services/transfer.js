const { api } = require('../utils/apiwrapper');
const { dwolla } = require('../utils/dwollaClient');

const TRANSFER_URL = '/transfers';

module.exports.service = {
  post: async (data) => {
    const requestBody = {
      _links: {
        source: {
          href: `https://api-sandbox.dwolla.com/funding-sources/${data.transferFrom}`,
        },
        destination: {
          href: `https://api-sandbox.dwolla.com/funding-sources/${data.transferTo}`,
        },
      },
      amount: {
        currency: 'USD',
        value: data.amountValue,
      },
    };

    const { body } = await dwolla.post(`${TRANSFER_URL}`, requestBody);

    return api.parseResponse(body);
  },
}
