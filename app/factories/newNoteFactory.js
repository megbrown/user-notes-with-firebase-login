"use strict";

notesApp.factory("NewNoteFactory", function($q, $http, FirebaseUrl) {

	let postNewNote = (newNote) => {
		return $q( (resolve, reject) => {
			$http.post(`${FirebaseUrl}notes.json`,
				angular.toJson(newNote))
			.then( (newItemData) => {
				resolve(newItemData);
			})
			.catch( (err) => {
				reject(err);
			});
		});
	};

	return { postNewNote };

});