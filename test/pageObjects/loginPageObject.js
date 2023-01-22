const ParentPageObject = require('./parentPageObject.js')

class LoginPageObject extends ParentPageObject {
  get loginMenuItem () { return $('[data-testid="nav-login"]') }
  get INPUT_EMAIL () { return $('#email') }
  get INPUT_PASSWORD () { return $('#password') }
  get recaptchaFrame () { return $('iframe[title="reCAPTCHA"]') }
  get loginButton () { return $('button=Log in') }
  get recaptchaButton () { return $('#recaptcha-anchor') }
  get errorMessage () { return $('#password ~ div > p') }

  async clickLoginMenu () {
    await this.loginMenuItem.click()
  }

  async inputEmail (email) {
    await this.INPUT_EMAIL.setValue(email)
  }

  async inputPassword (password) {
    await this.INPUT_PASSWORD.setValue(password)
  }

  async verifyCaptcha () {
    await browser.switchToFrame(await this.recaptchaFrame)
    await this.recaptchaButton.click()
    await browser.switchToParentFrame()
  }

  async clickLoginButton () {
    await this.loginButton.click()
  }

  async isErrorMessageDisplayed () {
    await this.errorMessage.isDisplayed()
  }
}

module.exports = LoginPageObject
