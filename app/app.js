import Router from './router.js'
import ToolbarController from './shared/toolbar/toolbar.controller.js'
import HomeController from './components/home/home.controller.js'
import SigninController from './components/auth/signin/signin.controller.js'
import SignupController from './components/auth/signup/signup.controller.js'
import DestinationsService from './services/destinations.service.js'
import PlansService from './services/plans.service.js'

const app = angular.module('App', [
  'ui.router',
  'ngAnimate',
  'ngAria',
  'ngMessages',
  'ngMaterial'
])

app.config(($mdThemingProvider) => {
  'ngInject'

  $mdThemingProvider.theme('default')
    .primaryPalette('indigo')
    .accentPalette('blue')
})

Router.configure(app)

app
  .controller('ToolbarController', ToolbarController)
  .controller('HomeController', HomeController)
  .controller('SigninController', SigninController)
  .controller('SignupController', SignupController)
  .service('DestinationsService', DestinationsService)
  .service('PlansService', PlansService)

app.constant('API', 'http://localhost:3000/api')
