$(document).ready(function(){


	   function init(){
	   	if(window.location.hash){
		    	var project = window.location.hash;
		    	// project = project.replace(/^.*#/, '')
		    	console.log(project);
		    	openProject(project);
		   } else {
		   	console.log('ok');
		   	$(".projects").removeClass('open');
		     	$('.dashboard').removeClass('modify');
		     	resetDashboard();
			}
	   }
	   init();

	   if (window.history && window.history.pushState) {
	   	$(window).on('popstate', function() {
	   		init();
	   	});
	   }

	   function openProject(project){
	   	console.log($('#project1').attr('class'));
	   	$('.dashboard').addClass('modify');
	   	$('body').css({'background':'#fff'});
	   	$(project).removeClass('hide');
	   	$(".projects").addClass('open');
	   }

	   function resetDashboard(){
	   	$('.dashboard--project').removeAttr('style');
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




	   function dashboardEvents(){

		   // Dashboard Content Hover
		   var clicked = false;
		   $('.dashboard-projects .dashboard--project').hover(
		   	function(){
		   		if(clicked === false){
			   		$('.dashboard-projects .dashboard--project')
			   			.addClass('dashboard--projectNotHover');
			   		$(this)
			   			.removeClass('dashboard--projectNotHover')
			   			.addClass('dashboard--projectHover');
			   	}
		   	},
		   	function(){
		   		if(clicked === false){
		   			$('.dashboard-projects .dashboard--project')
		   			.removeClass('dashboard--projectNotHover')
		   			.removeClass('dashboard--projectHover');
		   		}
		   	}
		   );


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

});