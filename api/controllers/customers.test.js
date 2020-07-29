const { get, list, listCustomerFundingSources } = require('./customers');

it('Customer Get Exception', () => {
  return get().then(data => {
    expect(data.body).toEqual(expect.stringContaining('[BadRequest] ID of Customer is Required'));
  })
});

it('Customer List 200', () => {
  return list().then(data => {
    expect(data.statusCode).toEqual(200);
  })
});

it('Customer listCustomerFundingSources Exception', () => {
  return listCustomerFundingSources().then(data => {
    expect(data.body).toEqual(expect.stringContaining('[BadRequest] ID of Customer is Required'));
  })
});