const ParentPageObject = require('./parentPageObject')

class SimpleSearchPageObject extends ParentPageObject {
  async goToHomePage () {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    await browser.url('')
  }

  async verifyHomePage () {
    await this.isElementEqualToExpected($('h2=Recommended For You'), 'Recommended For You')
  }

  async acceptCookies () {
    await $('button[id="onetrust-accept-btn-handler"]').click()
  }

  async openSearchBar () {
    await $('button[data-testid="nav-search-desktop"]').click()
  }

  async inputSearchTerm (searchTerm) {
    await $('input[data-testid=search-input]').addValue(searchTerm)
  }

  async selectFourthListing () {
    const element = $('div[data-testid="search_results_row"]:nth-child(2) span[data-testid="search-result-title"]')
    await this.waitUntilElementEqualsExpected(element, 'Student Discounts')
    await $('div:nth-child(4) > a[data-testid="search-result-offer"]').click()
  }
}

module.exports = SimpleSearchPageObject
