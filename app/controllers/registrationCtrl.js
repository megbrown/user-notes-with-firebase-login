"use strict";

notesApp.controller("RegisterCtrl", function($scope, $window, UserFactory) {

	$scope.registerAccount = {
		email: "",
		password: ""
	};

	$scope.registerUser = () => {
		UserFactory.createUser($scope.registerAccount)
		.then( (userData) => {
			$window.location.href = "#!/notes";
		});
	};


});