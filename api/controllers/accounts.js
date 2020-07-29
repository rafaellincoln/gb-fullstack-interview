const { service } = require('../services/accounts');
const { api } = require('../utils/apiwrapper');
const { dwolla } = require('../utils/dwollaClient');

module.exports.get = async (event, context, callback) => {
  console.info(`Starting Request: ${event}`);

  try {
    return await service.get();
  } catch (error) {
    return api.handleError(error);
  }
};

