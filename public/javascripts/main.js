(function(){

  var app = angular.module('myApp',['ngRoute', 'react']);

  // point to correct template for url...
  app.config(['$routeProvider', function($routeProvider){

    $routeProvider.when('/home',{
      templateUrl:'templates/myAppHome.ejs',
      controller:'myAppHomeCtrl'
    }).otherwise( {redirectTo:'/' } )

  }])


  // Service for backend...
  app.service('backendService', ['$http', function($http){

    // GET something...
    $http.get()


    // POST something...


    // DELETE something...


  }])


  // list of controllers...
  app.controller('myAppHomeCtrl', ['$scope', function($scope){

    $scope.displayController = 'myAppHome';

  }])





})()
