import './home.view.html'

export default class HomeController {
  constructor (DestinationsService, PlansService, $mdToast, $mdDialog, $timeout, $scope) {
    'ngInject'

    this._DestinationsService = DestinationsService
    this._PlansService = PlansService
    this._$mdToast = $mdToast
    this._$mdDialog = $mdDialog
    this._$timeout = $timeout
    this._$scope = $scope

    this.results = []
    this.call = {}
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
    let result = {
      origin: call.origin.origin,
      destination: call.destination.destination,
      minutes: call.minutes,
      plan: call.plan.name,
      noPlanValue: (call.minutes * call.destination.fare).toFixed(2),
      planValue: undefined
    }

    if (call.plan.minutes >= call.minutes) {
      result.planValue = 0
    } else {
      result.planValue = ((call.minutes - call.plan.minutes) * (call.destination.fare * 1.1).toFixed(2))
    }
    this.add(result, this.results)

    this.init()
    this.call = {}
    this._$scope.Form.$setUntouched()
  }

  add (item, list) {
    list.push(item)
  }

  remove (item, list) {
    let idx = list.indexOf(item)
    list.splice(idx, 1)
  }

}
