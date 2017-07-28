"use strict";

notesApp.controller("NewNoteCtrl", function($scope, $window, UserFactory, NewNoteFactory) {

	$scope.newNote = {
		contents: "",
		uid: UserFactory.getUser()
	};

	$scope.saveNewNote = () => {
		NewNoteFactory.postNewNote($scope.newNote)
		.then( (data) => {
			console.log("new note data", data);
			$window.location.href ="#!/notes";
		});
	};

});