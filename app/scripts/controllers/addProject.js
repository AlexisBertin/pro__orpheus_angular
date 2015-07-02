"use strict";

app.controller('addProjectCtrl', function ($scope, $http, $routeParams) {
	$scope.awesomeThings = [
	  'HTML5 Boilerplate',
	  'AngularJS',
	  'Karma'
	];

	setTimeout(function(){
		$(".navBar-tools").removeClass('hideNav');
		$(".addProject").addClass('open');
		$(".addProject .addProject-background").addClass('open');
		$(".addProject .addProject-content").addClass('open');
		$(".navBar--addProject").addClass('open');
		$(".addProject--form").mCustomScrollbar({
			theme: 'light-thin',
			mouseWheel:{ scrollAmount: 100 },
			scrollInertia: 100
		});
	},0);


	$('.navBar--addProject').click(function(e){
		if($(this).hasClass('open')){
			e.preventDefault();
			$(".navBar--addProject").removeClass('open');
			$(".addProject").removeClass('open');
			$(".addProject .addProject-background").removeClass('open');
			$(".addProject .addProject-content").removeClass('open');
			setTimeout(function(){
				window.location = '#/';
			},400);
		}
	});




			// -------- Check inputs ----------- //
			$('.input__field').focus(function(){
				console.log('focus');
				var thisId = $(this).attr('id');
				if(document.getElementById(thisId).checkValidity() === false){
					$('.'+thisId).removeClass('input--filled');
				} else {
					$('.'+thisId).addClass('input--filled');
				}
			});
			$('.input__field').blur(function() {
				console.log('blur');
				var thisId = $(this).attr('id');
				if(document.getElementById(thisId).checkValidity() === false){
					$('.'+thisId).removeClass('input--filled');
				} else {
					$('.'+thisId).addClass('input--filled');
				}
			});











	// var self = this;
	// self.project = $routeParams.project;

 //   $http.get('data/projects.json')
 //   	.success(function(data){
 //   		$scope.projects = data;
 //   		$scope.projectsDashboard = data;
 //   		return $scope.projects;
 //   		return $scope.projectsDashboard;
 //   	})
 //   	.error(function(data){
 //   		console.log(data);
 //   	})
 //   	.then(function(){
 //   		openProject(self.project);
 //   	});


 //   function openProject(project){
 //   	$('.dashboard').addClass('modify');
 //   	setTimeout(function(){
 //   		$('#'+project).removeClass('hide');
 //   		$(".projects").addClass('open');

 //   		$('a').click(function(e){
 //   			e.preventDefault();
 //   			var eLink = $(this).attr('href');
 //   			var eLinkBlank = $(this).attr('target');
 //   			$('.projects').removeClass('open');
 //   			setTimeout(function(){
 //   				if(eLinkBlank == '_blank'){
 //   					window.open(eLink);
 //   				} else {
 //   					window.location = eLink;
 //   				}
 //   			},300)
 //   		});

 //   	},100);
 //   }

});
