"use strict";

notesApp.controller("AllNotesCtrl", function($scope, $window, UserFactory, AllNotesFactory) {

	let currentUser = null;

	UserFactory.isAuthenticated()
	.then( (user) => {
		currentUser = UserFactory.getUser();
		getNotes();
	});

	function getNotes() {
		let notesArr = [];
		AllNotesFactory.getAllNotes(currentUser)
		.then( (notesList) => {
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