"use strict";

notesApp.controller("LoginCtrl", function($scope, $window, UserFactory) {

	$scope.registerAccount = {
		email: "",
		password: ""
	};

	$scope.login = () => {
		UserFactory.loginUser($scope.registerAccount)
		.then( (userData) => {
			console.log("userData on login", userData);
			$window.location.href = "#!/notes";
		});
	};

});