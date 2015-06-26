"use strict";

app.controller('projectCtrl', function ($scope, $http, $routeParams) {
	$scope.awesomeThings = [
	  'HTML5 Boilerplate',
	  'AngularJS',
	  'Karma'
	];

	var self = this;
	self.project = $routeParams.project;

	console.log(self.project);


   $http.get('data/projects.json')
   	.success(function(data){
   		$scope.projects = data;
   		$scope.projectsDashboard = data;
   		return $scope.projects;
   		return $scope.projectsDashboard;
   	})
   	.error(function(data){
   		console.log(data);
   	})
   	.then(function(){
   		openProject(self.project);
   	});

	   // $scope.showLinkDev = function(project) {
	   // 	return project.hasOwnProperty('linkDev');
	   // }


	   // if (window.history && window.history.pushState) {
	   // 	$(window).on('popstate', function() {
	   // 		init();
	   // 	});
	   // }


   // function init(){
	  //  var project = document.location.href;
	  //  project = project.split('/');
	  //  project = project[project.length - 1];
	  //  console.log(project);
	  //  openProject(project);
   // }
   function openProject(project){
   	$('#'+project).removeClass('hide');
   	$(".projects").addClass('open');
   }

});
