'use strict';

/**
 * @ngdoc function
 * @name orpheusHtmlTemplatesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the orpheusHtmlTemplatesApp
 */
angular.module('orpheusHtmlTemplatesApp')
.controller('mainCtrl', function ($scope) {
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


   // Dashboard content width
   var dashboardArticleLength = $('.dashboard-projects .dashboard--project').length;
   if(dashboardArticleLength < 4){
   	$('.dashboard-projects').css({'width':(256*dashboardArticleLength)});
   	$('.dashboard-projects .dashboard--project').css({'width':'256px'});
   }
   // Dashboard Content Hover
   $('.dashboard-projects .dashboard--project').hover(
   	function(){
   		$('.dashboard-projects .dashboard--project')
   			.addClass('dashboard--projectNotHover');
   		$(this)
   			.removeClass('dashboard--projectNotHover')
   			.addClass('dashboard--projectHover');
   	},
   	function(){
   		$('.dashboard-projects .dashboard--project')
   			.removeClass('dashboard--projectNotHover')
   			.removeClass('dashboard--projectHover');
   	}
   );

});
