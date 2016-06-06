var dir = 'angular/';
var owner = 'Narendra Hanif';

var taApp = angular.module('taApp', [
  'ngRoute',    
  'ngMaterial',
  
  'mainController'
])
.config(function ($mdThemingProvider,$mdIconProvider) {
    $mdThemingProvider.theme('default')
    .primaryPalette('deep-purple',{
        'default' : '400',
        'hue-1' : '100',
    })
    .accentPalette('pink');    
})

taApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: dir+'partials/main.html',
        controller: 'mainCtrl'
      }).       
      otherwise({
        redirectTo: '/'
      });
  }]);