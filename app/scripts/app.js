'use strict';

/**
 * @ngdoc overview
 * @name orpheusHtmlTemplatesApp
 * @description
 * # orpheusHtmlTemplatesApp
 *
 * Main module of the application.
 */
var app = angular.module('orpheusHtmlTemplatesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

  app.config(function ($routeProvider) {
    // $locationProvider.html5Mode(true).hashPrefix('!');

    $routeProvider
      .when('/',{
        templateUrl:'views/main.html',
        controller: 'mainCtrl'
      })
      .when('/:project',{
        templateUrl:'views/project.html',
        controller: 'projectCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  });
