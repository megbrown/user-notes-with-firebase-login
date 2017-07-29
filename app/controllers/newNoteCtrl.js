"use strict";

notesApp.controller("NewNoteCtrl", function($scope, $window, UserFactory, NewNoteFactory) {

	$scope.newNote = {
		contents: "",
		uid: UserFactory.getUser()
	};

	$scope.saveNewNote = () => {
		NewNoteFactory.postNewNote($scope.newNote)
		.then( (data) => {
			$window.location.href ="#!/notes";
		});
	};

});