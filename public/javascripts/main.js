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
  app.controller( 'myAppHomeCtrl', function( $scope ) {
    $scope.person = { firstName: 'Bob', lastName: 'Guy' };
  } );

  var Hello = React.createClass( {
    propTypes: {
      firstName: React.PropTypes.string.isRequired,
      lastName: React.PropTypes.string.isRequired
    },

    render: function() {
      return React.DOM.span( null,
        'Hello, ' + this.props.firstName + ' ' + this.props.lastName + '.'
      );
    }
  } );

  app.value( "Hello", Hello );

  app.directive( 'hello', function( reactDirective ) {
    return reactDirective( Hello );
  } );


})()
