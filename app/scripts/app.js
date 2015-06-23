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
      .state('project', {
        url: '/project',
        templateUrl: 'views/project.html',
        controller: 'projectCtrl'
      });
      $urlRouterProvider.otherwise("/");

  });

  app.directive('projectsDetails', function() {
    return {
        restrict: 'A',
        replace: 'false',
        templateUrl: 'views/project.html',
        controller: 'projectCtrl'
    };
  });