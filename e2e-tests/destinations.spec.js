const MainTask = require('./mainTask.js')
const origin = '018'
const destination = '011'
const plan = 'FaleMais 30'
const minutes = 30
const noPlanValue = 'R$: 57.00'
const planValue = 'R$: 0.00'

describe('Validate destinations', () => {
  const EC = protractor.ExpectedConditions

  beforeEach(() => {
    browser.get('http://localhost:9000')
  })

  it('Should calculate and check the result of the phone call with all values', () => {
    browser.wait(EC.visibilityOf($('.formTest')), 5000).then(() => {
      MainTask.checkComboBox(origin, destination, plan)
        .checkInput(minutes)
        .sendData()
        .checkCorrectValues(origin, destination, plan, minutes, noPlanValue, planValue)
    })
  })

  it('Should try to submit without all required fields', () => {
    browser.wait(EC.visibilityOf($('.formTest')), 5000).then(() => {
      MainTask.checkOneBox('ctrl.call.origin', '.origin', origin)
        .tryingToSkip()
        .checkOneBox('ctrl.call.destination', '.destination', destination)
        .tryingToSkip()
        .checkOneBox('ctrl.call.plan', '.plan', plan)
        .tryingToSkip()
    })
  })
})
