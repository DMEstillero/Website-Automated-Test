const { Given, When, Then } = require('@cucumber/cucumber')
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject.js')

const simpleSearchPageObject = new SimpleSearchPageObject()

Given('I am on the studentbeans homepage', async () => {
  await simpleSearchPageObject.goToHomePage()
  await simpleSearchPageObject.verifyHomePage()
  await simpleSearchPageObject.acceptCookies()
})

When('I open the search bar', async () => {
  await simpleSearchPageObject.openSearchBar()
})

When('I enter {string}', async (searchTerm) => {
  await simpleSearchPageObject.inputSearchTerm(searchTerm)
})

Then('I should select the 4th {string} search listing', async (searchTerm) => {
  await simpleSearchPageObject.selectFourthListing()
  // Browser pause is technically bad practice, but is included here to visually verify offer has loaded
  await browser.pause(3000)
})
