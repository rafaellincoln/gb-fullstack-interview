const { post } = require('./transfer');

it('Transfer post exception', () => {
  const req = {
    "transferTo": "753747b2-52ee-4523-affd-de4d772dc4da",
    "transferFrom": "f7787161-7b29-4ca2-922e-d1328cfe673c"
  };
  return post({ body: req }).then(data => {
    expect(data.body).toEqual(expect.stringContaining('[BadRequest] Amount Value is required'));
  })
});

it('Transfer post statusCode 200', () => {
  const req = {
    "amountValue": "1",
    "transferTo": "753747b2-52ee-4523-affd-de4d772dc4da",
    "transferFrom": "f7787161-7b29-4ca2-922e-d1328cfe673c"
  };
  return post({ body: req }).then(data => {
    expect(data.statusCode).toEqual(200);
  })
});

it('Transfer post statusCode 400', () => {
  const req = {
    "amountValue": "test",
    "transferTo": "test",
    "transferFrom": "teste"
  };
  return post({ body: req }).then(data => {
    expect(data.statusCode).toEqual(400);
  })
});