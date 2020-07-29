const yup = require('yup');

const { service } = require('../services/customers');
const { api } = require('../utils/apiwrapper');
const { dwolla } = require('../utils/dwollaClient');

const schema = yup.object({
  pathParameters: yup.object().shape({
    id: yup.string().required('ID of Customer is Required')
  })
});

module.exports.get = async (event, context, callback) => {
  console.info(`Starting Request: ${event}`);

  try {
    await schema.validate(event);

    const customerId = api.getId(event);
    return await service.get(customerId);
  } catch (error) {
    return api.handleError(error);
  }
};

module.exports.list = async (event, context, callback) => {
  console.info(`Starting Request: ${event}`);

  try {
    return await service.list();
  } catch (error) {
    return api.handleError(error);
  }
};

module.exports.listCustomerFundingSources = async (event, context, callback) => {
  console.info(`Starting Request: ${event}`);

  try {
    await schema.validate(event);

    const customerId = api.getId(event);
    return await service.listCustomerFundingSources(customerId);
  } catch (error) {
    return api.handleError(error);
  }
};
