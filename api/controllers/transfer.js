const yup = require('yup');

const { service } = require('../services/transfer');
const { api } = require('../utils/apiwrapper');
const { dwolla } = require('../utils/dwollaClient');

const TRANSFER_URL = '/transfers';

const schema = yup.object({
  body: yup.object().shape({
    transferFrom: yup.string().required('ID of found source source'),
    transferTo: yup.string().required('ID of found source destination'),
    amountValue: yup.number().required('Amount Value'),
  })
});

module.exports.post = async (event, context, callback) => {
  console.info(`Starting Request: ${event}`);

  try {
    await schema.validate(event);
    const data = JSON.parse(event.body);

    return await service.post(data);
  } catch (error) {
    return api.handleError(error);
  }
};

