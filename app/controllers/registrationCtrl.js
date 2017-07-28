"use strict";

notesApp.controller("RegisterCtrl", function($scope, UserFactory) {

	$scope.registerAccount = {
		email: "",
		password: ""
	};

	$scope.registerUser = () => {
		// TODO validate that user doesn't exist
		console.log("you clicked register");
		UserFactory.createUser($scope.registerAccount)
		.then( (userData) => {
			console.log("New User!", userData);
		});
	};


});