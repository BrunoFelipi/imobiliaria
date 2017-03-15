'use strict';

/**
 * @ngdoc overview
 * @name imobiliariaApp
 * @description
 * # imobiliariaApp
 *
 * Main module of the application.
 */
angular
  .module('imobiliariaApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/rota1', {
        templateUrl: 'views/rota1.html',
        controller: 'Rota1Ctrl',
        controllerAs: 'rota1'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
