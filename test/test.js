const chai = require('chai');

const expect = chai.expect;

describe('some simple test', () => {
  it('test equal', () => {
    expect(4+3).to.equal(7);
    expect(4+3).to.not.equal(8);
  });
});
