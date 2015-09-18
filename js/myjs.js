$(function(){
	var validator;
	$(window).scroll(function(){
		var headerH=$('#header').height();
		if($(window).scrollTop()>headerH){
			$('#nav').addClass('navbar-fixed-top');
		}else{
			$('#nav').removeClass('navbar-fixed-top');
		}
		if($(window).scrollTop()>300){
			$('#top').fadeIn();
		}else{
			$('#top').fadeOut();
			$('#top').removeClass('active');
		}
		if($(window).scrollTop()==0){
			$('.navbar-nav>li:first').addClass('active');
		}
	})
	$(window).on('resize',function(){
		if($(window).width()<767){
			$('#nav').addClass('navbar-fixed-top');
		}else{
			$('#nav').removeClass('navbar-fixed-top');
		}
		console.log($(window).width());
	})
	$('#top').on('click',function(){
		$('html,body').animate({
			scrollTop:0
		},1000)
		$(this).addClass('active');
	})
    $('a.page-scroll').on('click', function(event) {
	    var attrHref = $(this);
	    var x=$(window).width()
	    if($('#nav').hasClass('navbar-fixed-top')){
	    	$('html, body').stop().animate({
		        scrollTop: ($(attrHref.attr('href')).offset().top - 51)
		    }, 1250);
	    }else{
	    	if(x<=767){
	    		$('html, body').stop().animate({
			        scrollTop: ($(attrHref.attr('href')).offset().top - 51)
			    }, 1250);
	    	}else{
	    		$('html, body').stop().animate({
			        scrollTop: ($(attrHref.attr('href')).offset().top - 117)
			    }, 1250);
	    	}
	    }
	    console.log($('#nav').hasClass('navbar-fixed-top')+'+'+x);
	    event.preventDefault();
    });
    var nH=$('.navbar').height();
    console.log(nH);
	$('body').scrollspy({
		target: '.navbar',
		offset:51
	})
	$('.about-video-btn').on('click',function(){
		$('.gray').fadeIn();
		$('#video').fadeIn();
	})
	$('.close-icon').on('click',function(){
		var vd=document.getElementsByClassName('video01')[0];
		$('.gray').fadeOut();
		$('#video').fadeOut();
		vd.pause();
	})
	$('.close-icon').on('click',function(){
		var vd=document.getElementsByClassName('video01')[0];
		$('.gray').fadeOut();
		$('#video').fadeOut();
		vd.pause();
	})
	$('.login-close-icon').on('click',function(){
		$('.gray').fadeOut();
		$('#login').fadeOut();
		// validator.resetForm();
	})
	$('.gray').on('click',function(){
		$('.gray').fadeOut();
		$('#login').fadeOut();
		$('#video').fadeOut();
		vd.pause();
		$('.username-box').hide();
	})
	$('.about-login-btn').on('click',function(){
		$('.gray').fadeIn();
		$('#login').fadeIn();
		// validator.resetForm();
	})
	$('.username-box').on('click',function(){
		$('.username-box').hide();
		$('.about-login-btn').show();
	})
})
function checkChangeP(id){
	console.log(id);
	if(id=='password'){
		var pwd=$("#"+id+"");
	}
	if(pwd.val()=='123'){
		$('.pwd-box').addClass('has-success');
		$('.pwd-box').removeClass('has-error');
		$('.pwd-box span').addClass('glyphicon-ok');
		$('.pwd-box span').removeClass('glyphicon-remove');
	}else{
		$('.pwd-box').addClass('has-error');
		$('.pwd-box').removeClass('has-success');
		$('.pwd-box span').addClass('glyphicon-remove');
		$('.pwd-box span').removeClass('glyphicon-ok');
	}
}
function checkChangeU(id){
	if(id=='username'){
		var user=$("#"+id+"");
	}
	if(user.val().length>3){
		$('.user-box').addClass('has-success');
		$('.user-box').removeClass('has-error');
		$('.user-box span').addClass('glyphicon-ok');
		$('.user-box span').removeClass('glyphicon-remove');
	}else{
		$('.user-box').addClass('has-error');
		$('.user-box').removeClass('has-success');
		$('.user-box span').addClass('glyphicon-remove');
		$('.user-box span').removeClass('glyphicon-ok');
	}
}
function CheckPost(){
	var pwd=$("#password");
	var user=$('#username');
	if(user.val().length>3 && pwd.val()=='123'){
		$('.gray').fadeOut();
		$('#login').fadeOut();
		$('.about-login-btn').hide();
		$('.username-box').show();
		console.log(user.val());
		$('.username-box').find('.username-text').text(user.val());
		return false;
	}else if(user.val().length>3){
		$('.user-box').addClass('has-success');
		$('.user-box').removeClass('has-error');
		$('.user-box span').addClass('glyphicon-ok');
		$('.user-box span').removeClass('glyphicon-remove');
		$('#password-error').find('p').text('請確認是否輸入123');
		$('.pwd-box').addClass('has-error');
		$('.pwd-box').removeClass('has-success');
		$('.pwd-box span').addClass('glyphicon-remove');
		$('.pwd-box span').removeClass('glyphicon-ok');
	}else if(pwd.val()=='123'){
		$('.user-box').addClass('has-error');
		$('.user-box').removeClass('has-success');
		$('.user-box span').addClass('glyphicon-remove');
		$('.user-box span').removeClass('glyphicon-ok');
		$('.pwd-box').addClass('has-success');
		$('.pwd-box').removeClass('has-error');
		$('.pwd-box span').addClass('glyphicon-ok');
		$('.pwd-box span').removeClass('glyphicon-remove');
	}else{
		$('#password-error').find('p').text('請確認是否輸入123');
		$('.pwd-box').addClass('has-error');
		$('.pwd-box').removeClass('has-success');
		$('.pwd-box span').addClass('glyphicon-remove');
		$('.pwd-box span').removeClass('glyphicon-ok');
		$('.user-box').addClass('has-error');
		$('.user-box').removeClass('has-success');
		$('.user-box span').addClass('glyphicon-remove');
		$('.user-box span').removeClass('glyphicon-ok');
	}
	return false;
}
function checkFocus(id){
	var user,pwd;
	// $('.form-group').removeClass('has-success has-error has-feedback');
	// $('.form-group').find('span').remove();
	if(id=='username'){
		user=$('#username');
		$('#username-error').find('p').text('請輸入用戶名');
		if(user.val().length>3){
			$('.user-box').addClass('has-success');
			$('.user-box').removeClass('has-error');
			$('.user-box span').addClass('glyphicon-ok');
			$('.user-box span').removeClass('glyphicon-remove');
		}else{
			$('.user-box').addClass('has-error');
			$('.user-box').removeClass('has-success');
			$('.user-box span').addClass('glyphicon-remove');
			$('.user-box span').removeClass('glyphicon-ok');
		}
	}
	if(id=='password'){
		pwd=$("#password");
		$('#password-error').find('p').text('請輸入123');
		if(pwd.val()=='123'){
			$('.pwd-box').addClass('has-success');
			$('.pwd-box').removeClass('has-error');
			$('.pwd-box span').addClass('glyphicon-ok');
			$('.pwd-box span').removeClass('glyphicon-remove');
		}else{
			$('.pwd-box').addClass('has-error');
			$('.pwd-box').removeClass('has-success');
			$('.pwd-box span').addClass('glyphicon-remove');
			$('.pwd-box span').removeClass('glyphicon-ok');
		}
	}
}