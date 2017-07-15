import './home.view.html'
import './show.dialog.html'

export default class HomeController {
  constructor (RegionsService, PlansService, $mdToast, $mdDialog, $timeout) {
    'ngInject'

    this._RegionsService = RegionsService
    this._PlansService = PlansService
    this._$mdToast = $mdToast
    this._$mdDialog = $mdDialog
    this._$timeout = $timeout
  }

  loadUsers () {
    // Use timeout to simulate a request.
    return this._$timeout(() => {
      this.users = this.users || [
        { id: 1, name: 'Scooby Doo' },
        { id: 2, name: 'Shaggy Rodgers' },
        { id: 3, name: 'Fred Jones' },
        { id: 4, name: 'Daphne Blake' },
        { id: 5, name: 'Velma Dinkley' }
      ]
    }, 650)
  }

  listItemClick (index) {
    var clickedItem = this.items[index]
    this._$mdBottomSheet.hide(clickedItem)
  }

  init () {
    this.getRegions()
    this.getPlans()
  }

  getRegions () {
    this._RegionsService
      .getAllRegions()
      .then(res => {
        if (res.data) {
          this.regions = res.data
        } else {
          this._$mdToast.show(this._$mdToast.simple().textContent('Something went wrong'))
        }
      })
      .catch(err => {
        console.error(err)
      })
  }

  getPlans () {
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
  }

  showDialog (event) {
    this.alert = this._$mdDialog.show({
      templateUrl: require('./show.dialog.html'),
      clickOutsideToClose: true,
      controller: () => this,
      controllerAs: 'ctrl',
      fullscreen: true,
      targetEvent: event
    })
  }

  closeDialog () {
    this._$mdDialog.hide()
  }

  exists (item, list) {
    return list.includes(item)
  }

  toggle (item, list) {
    let idx = list.indexOf(item)
    if (idx > -1) {
      list.splice(idx, 1)
    } else {
      list.push(item)
    }
  }

}
