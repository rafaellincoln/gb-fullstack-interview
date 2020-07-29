const { get } = require('./accounts');

it('Account Get 200', () => {
  return get().then(data => {
    expect(data.statusCode).toEqual(200);
  })
});