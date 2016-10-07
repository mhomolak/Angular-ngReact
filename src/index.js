import angular from 'angular';
import React from 'react';
import ReactDOM from 'react-dom';
import 'ngreact';
import 'angular-ui-router';

import ComponentOwner from '../component-archetype/src/js/component-owner';
import '../component-archetype/demo/elements.css';

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
  constructor($state) {
    this.state = $state;
    this.data = {
      data: {
        elementId: 'demo-target2',
        greeting: 'Bonjour le monde',
        locale: 'fr'
      }
    }
  }
}

const app = angular.module( 'app', ['ui.router', 'react'] );

app.value("ComponentOwner", ComponentOwner);
app.directive('componentOwner', (reactDirective) => {
  return reactDirective( ComponentOwner )
});

app.controller('AppCtrl', AppCtrl );
app.config( AppConfig );
