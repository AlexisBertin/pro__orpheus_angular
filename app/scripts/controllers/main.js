'use strict';

/**
 * @ngdoc function
 * @name orpheusHtmlTemplatesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the orpheusHtmlTemplatesApp
 */
angular.module('orpheusHtmlTemplatesApp')
.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    // Dashboard navbar search input
    var dashboardSearchIcon = $('.dashboard--search label i').css('color');
    $('.dashboard---searchInput').focus(function(){
    	$('.dashboard--search label i').css({'color':'#3F51B5'});
    });
    $('.dashboard---searchInput').blur(function(){
    	$('.dashboard--search label i').css({'color':dashboardSearchIcon});
    });





});
