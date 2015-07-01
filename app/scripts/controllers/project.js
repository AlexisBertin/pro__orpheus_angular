"use strict";

app.controller('projectCtrl', function ($scope, $http, $routeParams) {
	$scope.awesomeThings = [
	  'HTML5 Boilerplate',
	  'AngularJS',
	  'Karma'
	];

	var self = this;
	self.project = $routeParams.project;

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


   function openProject(project){
   	$('.dashboard').addClass('modify');
   	setTimeout(function(){
   		$('#'+project).removeClass('hide');
   		$(".projects").addClass('open');
         $(".navBar-tools").addClass('hideNav');

   		$('a').click(function(e){
   			e.preventDefault();
   			var eLink = $(this).attr('href');
   			var eLinkBlank = $(this).attr('target');
   			$('.projects').removeClass('open');
   			setTimeout(function(){
   				if(eLinkBlank == '_blank'){
   					window.open(eLink);
   				} else {
   					window.location = eLink;
   				}
   			},300)
   		});

   	},100);
   }

});
