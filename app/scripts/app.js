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
    $routeProvider
      .when('/',{
        templateUrl:'views/main.html',
        controller: 'mainCtrl'
      })
      .when('/project/:project',{
        templateUrl:'views/project.html',
        controller: 'projectCtrl'
      })
      .when('/addProject',{
        templateUrl:'views/addProject.html',
        controller: 'addProjectCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  });


  app.directive('navTools',function(){
    return {
      restrict: 'A',
      templateUrl: 'views/_navTools.html',
      controller: 'mainCtrl'
      // controller: function($scope, $http){
      //   $http.get('views/_menuOverlayData.json')
      //     .success(function(data){
      //       $scope.menuOverlay = data;
      //     })
      //     .error(function(data){
      //       console.log('Error - $http.get(views/_menuOverlayData.json) - '+ data);
      //     });
      // }
    };
  });