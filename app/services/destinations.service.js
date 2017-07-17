export default class DestinationsService {
  constructor ($http, $q, API) {
    'ngInject'

    this._$http = $http
    this._$q = $q
    this.API = API
  }

  // getAllDestinations () {
  //   return this._$http.get(`${this.API}/destinations`)
  // }

  getAllDestinations () {
    return this._$q.resolve({
      data: [{
        origin: '011',
        destinations: [{
          destination: '016',
          fare: 1.90
        }, {
          destination: '017',
          fare: 1.70
        }, {
          destination: '018',
          fare: 0.9
        }]
      }, {
        origin: '016',
        destinations: [{
          destination: '011',
          fare: 2.90
        }]
      }, {
        origin: '017',
        destinations: [{
          destination: '011',
          fare: 2.70
        }]
      }, {
        origin: '018',
        destinations: [{
          destination: '011',
          fare: 1.90
        }]
      }]
    })
  }
}
