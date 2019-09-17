describe('Mocha Hooks', () => {
  before('Execute before all the tests', () => {
    console.log('Execute before all the tests');
  });
  beforeEach('Execute before each test', () => {
    console.log('Execute before each test');
  });
  after('Execute afer all tests', () => {
    console.log('Execute after all the tests');
  });
  afterEach('Execute after each test', () => {
    console.log('Execute before each test');
  });

  it('Mocha Hooks Test', () => {
    console.log('Mocha - This is a test for Mocha hooks');
  });
});
