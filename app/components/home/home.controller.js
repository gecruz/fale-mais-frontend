import './home.view.html'

export default class HomeController {
  constructor (DestinationsService, PlansService, $mdToast, $mdDialog, $timeout) {
    'ngInject'

    this._DestinationsService = DestinationsService
    this._PlansService = PlansService
    this._$mdToast = $mdToast
    this._$mdDialog = $mdDialog
    this._$timeout = $timeout

    this.results = []
  }

  init () {
    this.getDestinations()
    this.getPlans()
  }

  getDestinations () {
    return this._$timeout(() => {
      this._DestinationsService
        .getAllDestinations()
        .then(res => {
          if (res.data) {
            this.origins = res.data
          } else {
            this._$mdToast.show(this._$mdToast.simple().textContent('Something went wrong'))
          }
        })
        .catch(err => {
          console.error(err)
        })
    }, 100)
  }

  getPlans () {
    return this._$timeout(() => {
      this._PlansService
        .getAllPlans()
        .then(res => {
          if (res.data) {
            this.plans = res.data
            console.log(this.plans)
          } else {
            this._$mdToast.show(this._$mdToast.simple().textContent('Something went wrong'))
          }
        })
        .catch(err => {
          console.error(err)
        })
    }, 100)
  }

  calculate (call) {
    console.log(call)
    let result = {

    }
    this.add(result, this.results)
  }

  add (item, list) {
    list.push(item)
  }

  remove (item, list) {
    let idx = list.indexOf(item)
    list.splice(idx, 1)
  }

}
