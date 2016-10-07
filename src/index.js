import angular from 'angular'
import 'angular-ui-router'

import MyComponent from '../component-archetype/main';

function AppConfig($stateProvider, $urlRouterProvider, $locationProvider){
  $stateProvider
    .state('app', {
      url: '/',
      controllerAs: '$app',
      controller: 'AppCtrl',
      template: require('./_app.html')
    });

  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
}

class AppCtrl {
  constructor() {

    new MyComponent({
      elementId: 'demo-target1',
      greeting: 'Bonjour le monde!',
      locale: 'fr'
    });

  }
}

angular
  .module( 'app', ['ui.router'] )
  .controller('AppCtrl', AppCtrl )
  .config( AppConfig );