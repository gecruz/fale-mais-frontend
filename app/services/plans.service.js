export default class PlansService {
  constructor ($http, $q, API) {
    'ngInject'

    this._$http = $http
    this._$q = $q
    this.API = API
  }

  // getPlan (code) {
  //   return this._$http.get(`${this.API}/plans/${code}`)
  // }

  // getAllPlans () {
  //   return this._$http.get(`${this.API}/plans`)
  // }

  // getPlanById (code) {
  //   return this._$q.when(
  //     this.getAllPlans().then(plans => {
  //       return { data: plans.data.filter(_plan => _plan.id === code) }
  //     })
  //   )
  // }

  getAllPlans () {
    return this._$q.resolve({
      data: [{
        id: 1,
        name: 'FaleMais 30',
        minutes: 30
      }, {
        id: 2,
        name: 'FaleMais 60',
        minutes: 60
      }, {
        id: 3,
        name: 'FaleMais 120',
        minutes: 120
      }]
    })
  }

}
