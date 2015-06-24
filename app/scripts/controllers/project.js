"use strict";

app.controller('projectCtrl', function ($scope, $http) {
	$scope.awesomeThings = [
	  'HTML5 Boilerplate',
	  'AngularJS',
	  'Karma'
	];


	console.log('This is a test');

	// $('body').css({'background':'#fff'});

	// $('#project2').removeClass('hide');
	// $(".project").addClass('open');

	// $scope.Page.setTitle('Works | Alexis Bertin');



	$scope.showLinkDev = function(project) {
		return project.hasOwnProperty('linkDev');
	}




});
