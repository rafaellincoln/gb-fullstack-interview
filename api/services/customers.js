const { api } = require('../utils/apiwrapper');
const { dwolla } = require('../utils/dwollaClient');

const CUSTOMERS_URL = 'customers';

module.exports.service = {
  get: async (customerId) => {
    const { body } = await dwolla.get(`${CUSTOMERS_URL}/${customerId}`);
    return api.parseResponse(body);
  },
  list: async () => {
    const { body } = await dwolla.get(CUSTOMERS_URL);
    return api.parseResponse(body);
  },
  listCustomerFundingSources: async (customerId) => {
    const { body: { _embedded } } = await dwolla.get(`${CUSTOMERS_URL}/${customerId}/funding-sources`);

    return api.parseResponse(_embedded['funding-sources']);
  },
}
