const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)
const expect = chai.expect

module.exports =
  class MainTask {

    static checkCorrectValues (_origin, _destination, _plan, _minutes, _noPlanValue, _planValue) {
      const origin = element(by.name('originResult'))
      const destination = element(by.name('destinationResult'))
      const plan = element(by.name('planResult'))
      const minutes = element(by.name('minutesResult'))
      const noPlanValue = element(by.name('noPlanValueResult'))
      const planValue = element(by.name('planValueResult'))

      origin.getText().then(origin => expect(origin).to.equal(_origin))

      destination.getText().then(destination => expect(destination).to.equal(_destination))

      plan.getText().then(plan => expect(plan).to.equal(_plan))

      minutes.getText().then(minutes => expect(parseInt(minutes)).to.equal(_minutes))

      noPlanValue.getText().then(noPlanValue => expect(noPlanValue).to.equal(_noPlanValue))

      planValue.getText().then(planValue => expect(planValue).to.equal(_planValue))

      return this
    }

    static checkOneBox (model, classe, param) {
      element(by.model(model)).click()
      browser.waitForAngular()

      element(by.cssContainingText(classe, param)).click()
      browser.waitForAngular()

      return this
    }

    static checkComboBox (origin, destination, plan) {
      element(by.model('ctrl.call.origin')).click()
      browser.waitForAngular()

      element(by.cssContainingText('.origin', origin)).click()
      browser.waitForAngular()

      element(by.model('ctrl.call.destination')).click()
      browser.waitForAngular()

      element(by.cssContainingText('.destination', destination)).click()
      browser.waitForAngular()

      element(by.model('ctrl.call.plan')).click()
      browser.waitForAngular()

      element(by.cssContainingText('.plan', plan)).click()
      browser.waitForAngular()

      browser.waitForAngular()

      return this
    }

    static checkInput (minutes) {
      element(by.name('minutes')).sendKeys('')
      browser.waitForAngular()
      console.log("can't send empty value")

      element(by.name('calculate')).click()
      browser.waitForAngular()

      element(by.name('errors')).isDisplayed()
      browser.waitForAngular()

      element(by.name('minutes')).sendKeys(0)
      browser.waitForAngular()
      console.log("can't send values < 0")

      element(by.name('calculate')).click()
      browser.waitForAngular()

      element(by.name('errors')).isDisplayed()
      browser.waitForAngular()

      element(by.name('minutes')).sendKeys(minutes)
      browser.waitForAngular()

      return this
    }

    static sendData () {
      element(by.name('calculate')).click()
      browser.waitForAngular()

      return this
    }

    static checkComboxSelector (origin) {
      element(by.model('ctrl.call.origin')).click()
      browser.waitForAngular()

      element(by.cssContainingText('.origin', origin)).click()
      browser.waitForAngular()

      return this
    }

    static tryingToSkip () {
      const btn = element(by.name('calculate'))
      btn.isEnabled().then(i => {
        expect(i).to.equal(false)
      })
      return this
    }
}
