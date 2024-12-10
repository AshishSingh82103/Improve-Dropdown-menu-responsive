describe('My First Test', function () {
  before((browser) => {
    browser.init()
  })

  it('visits the app root url', function () {
    browser.assert.textContains('.green', 'You did it!');
    browser.assert.textContains('yellow',"you did it!")
  })

  after((browser) => browser.end()); 
})
