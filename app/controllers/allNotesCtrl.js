"use strict";

notesApp.controller("AllNotesCtrl", function($scope, $window, UserFactory, AllNotesFactory) {

	let currentUser = null;

	UserFactory.isAuthenticated()
	.then( (user) => {
		console.log("user status from AllNotesCtrl", user);
		currentUser = UserFactory.getUser();
		getNotes();
	});

	function getNotes() {
		let notesArr = [];
		console.log("Asked for notes!", currentUser);
		AllNotesFactory.getAllNotes(currentUser)
		.then( (notesList) => {
			console.log("note Data", notesList);
			let noteData = notesList.data;
			Object.keys(noteData).forEach( (key) => {
				noteData[key].id = key;
				notesArr.push(noteData[key]);
			});
			$scope.notes = notesArr;
		})
		.catch( (err) => {
			console.log("error!!!", err);
		});
	}

});