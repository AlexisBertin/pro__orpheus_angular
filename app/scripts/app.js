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
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ]);

  app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $stateProvider
      .state('app', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'mainCtrl'
      })
      $urlRouterProvider.otherwise("/");

  });

  app.directive('projectsDetails', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/project.html',
        controller: 'mainCtrl'
    };
  });