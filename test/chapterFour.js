// Add
// Sub
// Multiplication
// Division
const assert = require('assert');

describe('Chapter Four - Mathematical Operations - Test Suite', () => {
  const a = 10;
  const b = 10;

  it.skip('Addition of two numbers', () => {
    const c = a + b;
    assert.equal(c, 20);
  });
  it('Subtraction of two numbers', () => {
    const c = a - b;
    assert.equal(c, 0);
  });
  it('Multiplication of two numbers', () => {
    const c = a * b;
    assert.equal(c, 100);
  });
  it('Division of two numbers', () => {
    const c = a / b;
    assert.equal(c, 1);
  });
});
