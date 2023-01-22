const { assert } = require('chai')

class ParentPageObject {
  async isElementEqualToExpected (element, expectedText) {
    const errorMessage = 'Actual does not match expected'
    assert(await expect(await element.getText(), errorMessage).to.equal(expectedText))
  }

  // Function to wait until element equals expected text
  async waitUntilElementEqualsExpected (element, expectedText) {
    await browser.waitUntil(
      async () => {
        return expect(await element.getText()).to.equal(expectedText)
      },
      {
        timeout: 20000,
        timeoutMsg: 'Text does not match expected',
        interval: 500
      })
  }
}

module.exports = ParentPageObject
