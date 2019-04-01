$(document).ready(function() {


		$("#sigform").validate({
			rules: {
				name: "required",
				usr: {
					required: true,
					minlength: 5
				},
				pwd: {
					required: true,
					minlength: 5
				},
				email: {
					required: true,
					email: true
				},
				co:{
					required:true,
					minlength: 10,
					maxlength:10
				}
			},
			messages: {
				name: "Please enter your Name",
				usr: {
					required: "Please enter a username",
					minlength: "Your username must consist of at least 5 characters"
				},
				pwd: {
					required: "Please provide a password",
					minlength: "Your password must be at least 5 characters long"
				},/*
				// confirm_password: {
				// 	required: "Please provide a password",
				// 	minlength: "Your password must be at least 5 characters long",
				// 	equalTo: "Please enter the same password as above"
				// },*/
				email: "Please enter a valid email address",
			
				co: {
					required: "please provide your contact no",
					minlength:"at least 10 digit",
					maxlength:"10 digit only"
				}
			},
			submitHandler: function(form){
				form.submit();
			}
		});



		
		 $("#login_form").validate({
		 	rules:{
		 		user_login:'required',
		 		pwd1:'required'
		 	},
		 	messages:{
		 		user_login:'UserName Required!!',
		 		pwd1:'Please enter your password'
		 	},
		 	submitHandler: function(form){
		 		form.submit();
		 	}
		 });

	});