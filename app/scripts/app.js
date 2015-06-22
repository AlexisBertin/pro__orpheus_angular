'use strict';

/**
 * @ngdoc overview
 * @name orpheusHtmlTemplatesApp
 * @description
 * # orpheusHtmlTemplatesApp
 *
 * Main module of the application.
 */
angular
  .module('orpheusHtmlTemplatesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainCtrl'
      })
      .when('/project', {
        templateUrl: 'views/project.html',
        controller: 'projectCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
