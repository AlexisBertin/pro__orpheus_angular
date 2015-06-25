"use strict";

app.controller('mainCtrl', function ($scope, $state, $http) {
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
   		init();
   	});

   $scope.showLinkDev = function(project) {
   	return project.hasOwnProperty('linkDev');
   }


   if (window.history && window.history.pushState) {
   	$(window).on('popstate', function() {
   		init();
   	});
   }




   function init(){
   	if(window.location.hash){
	    	var project = window.location.hash;
	    	// project = project.replace(/^.*#/, '')
	    	console.log(project);
	    	openProject(project);
	   } else {
	   	$(".projects").removeClass('open');
	     	$('.dashboard').removeClass('modify');
	     	resetDashboard();
		}
   }






   function openProject(project){
   	$('.dashboard').addClass('modify');
   	// $('body').css({'background':'#fff'});
   	setTimeout(function(){
   		$(project).removeClass('hide');
   		$(".projects").addClass('open');
   	},100);
   }

   function resetDashboard(){
   	$('.dashboard--project').removeAttr('style');
   	// Dashboard content width
   	// var dashboardArticleLength = $('.dashboard-projects .dashboard--project').length;
   	// if(dashboardArticleLength < 4){
   	// 	$('.dashboard-projects').css({'width':(256*dashboardArticleLength)});
   	// 	$('.dashboard-projects .dashboard--project').css({'width':'256px'});
   	// 	console.log($('.dashboard--project').css('width'));
   	// }
   	// $('.dashboard--projectClicked .dashboard---projectTitle .hrLoader')
   	$('.dashboard--projectClicked footer').removeAttr('style');
   	$('.dashboard--projectClicked .dashboard---projectDevelopment').removeAttr('style');
   	$('.dashboard--projectClicked .dashboard---projectTitle h3').removeAttr('style');
   	$('.dashboard--projectClicked .dashboard---projectTitle h2').removeAttr('style');
   	$('.dashboard--projectClicked .dashboard---projectTitle hr').removeAttr('style');

   	$('.dashboard-projects .dashboard--project')
   		.removeClass('dashboard--projectNotClicked')
   		.removeClass('dashboard--projectClicked');
   	$('.projects .project').addClass('hide');

   	setTimeout(function(){
   		dashboardEvents();
   		// fallback to avoid spam rush
   		$('.dashboard--projectClicked .dashboard---projectTitle h2').removeAttr('style');
   	},50);
   }



   // Dashboard Content Hover
   var clicked = false;

   $scope.projectMouseover = function(project){
		if(clicked === false){
   		$('.dashboard-projects .dashboard--project')
   			.addClass('dashboard--projectNotHover');
   		$('.'+project)
   			.removeClass('dashboard--projectNotHover')
   			.addClass('dashboard--projectHover');
   	}
   }
   $scope.projectMouseout = function(){
   	if(clicked === false){
   		$('.dashboard-projects .dashboard--project')
   		.removeClass('dashboard--projectNotHover')
   		.removeClass('dashboard--projectHover');
   	}
   }


   function dashboardEvents(){
   	// $('body').css({'background':'#eee'});
	   // Dashboard Content Click
	   $('.dashboard-projects .dashboard--project').click(function(){
	   	clicked = true;
	   	$('.dashboard-projects .dashboard--project').addClass('dashboard--projectNotClicked');
	   	$(this).removeClass('dashboard--projectNotClicked').addClass('dashboard--projectClicked');

	   	$('.dashboard--projectClicked .dashboard---projectTitle .hrLoader').css({
		   	'width': '100px',
		   	'opacity':'1'
			});
	   	$('.dashboard--projectNotClicked').css({
	   		'opacity':'0'
	   	});

	   	setTimeout(function(){
		   	$('.dashboard--projectClicked footer')
		   		.delay(200)
		   		.queue(function(){
		   			$(this).css({
				   		'opacity':'0',
				   		'-moz-transform': 'translateY(40px)',
				   		'-webkit-transform': 'translateY(40px)',
				   		'-o-transform': 'translateY(40px)',
				   		'-ms-transform': 'translateY(40px)',
				   		'transform': 'translateY(40px)'
				   	}).dequeue();
		   		});
		   },200);

	   	setTimeout(function(){
	   		$('.dashboard--projectClicked .dashboard---projectDevelopment')
	   			.fadeOut('fast');
	   		$('.dashboard--projectClicked .dashboard---projectTitle h3')
	   			.delay(200)
	   			.queue(function(){
	   				$(this).css({
			   			'opacity':'0',
			   			'-moz-transform': 'translateY(40px)',
			   			'-webkit-transform': 'translateY(40px)',
			   			'-o-transform': 'translateY(40px)',
			   			'-ms-transform': 'translateY(40px)',
			   			'transform': 'translateY(40px)'
			   		}).dequeue();
	   			});
	   		$('.dashboard--projectClicked .dashboard---projectTitle h2')
	   			.delay(400)
	   			.queue(function(){
	   				$(this).css({'opacity':'0'}).dequeue();
	   			});
	     	},400);
	     	setTimeout(function(){
	   		$('.dashboard--projectClicked .dashboard---projectTitle hr').css({
	   			'opacity':'0'
	   		});
	   		$('.dashboard--projectClicked').css({
	   			'opacity':'0'
	   		});
	   	},600);
	   	setTimeout(function(){
			var projectId = $('.dashboard--projectClicked').data("id");
			var project = '#project'+projectId;
			window.history.pushState('project', 'Project Page', project)
				openProject(project);
	   	},700);
	   });
   }



})


.filter('updateDate', [
    '$filter', function($filter) {
        return function(input, format) {
            return $filter('date')(new Date(input), format);
        };
    }
]);