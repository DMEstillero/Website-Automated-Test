const { When, Then } = require('@cucumber/cucumber')
const LoginPageObject = require('../pageObjects/loginPageObject.js')

const loginPageObject = new LoginPageObject()

When('I open the login page', async () => {
  await loginPageObject.clickLoginMenu()
})

When('I enter {string} into email and {string} into password', async (email, password) => {
  // These needed await statements before them
  await loginPageObject.inputEmail(email)
  await loginPageObject.inputPassword(password)
})

Then('I should trigger the user and password error messages', async () => {
  await loginPageObject.verifyCaptcha()
  await loginPageObject.clickLoginButton()
  await loginPageObject.isErrorMessageDisplayed()
})
