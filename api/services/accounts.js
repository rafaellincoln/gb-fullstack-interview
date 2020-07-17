const { Client } = require('dwolla-v2');
const yup = require('yup');
const { api } = require('../utils/apiwrapper');

const FUNDING_SOURCE_URL = 'funding-sources';

const dwolla = new Client({
  key: process.env.DWOLLA_ID,
  secret: process.env.DWOLLA_SECRET,
  environment: process.env.DWOLLA_ENV
});

const schema = yup.object({
  pathParameters: yup.object().shape({
    id: yup.string().required('ID of FundingSource is Required')
  })
});

module.exports.get = async (event, context, callback) => {
  console.info(`Starting Request: ${event}`);

  try {
    await schema.validate(event);

    const fundingSourceId = api.getId(event);
    const { body } = await dwolla.get(`${FUNDING_SOURCE_URL}/${fundingSourceId}`);

    return api.parseResponse(body);
  } catch (error) {
    return api.handleError(error);
  }
};

