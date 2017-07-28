"use strict";

notesApp.factory("AllNotesFactory", function($q, $http, FirebaseUrl) {

	let getAllNotes = (userId) => {
		console.log("userId", userId);
		return $q( (resolve, reject) => {
			$http.get(`${FirebaseUrl}notes.json?orderBy="uid"&equalTo="${userId}"`)
			.then( (noteData) => {
				resolve(noteData);
			})
			.catch( (err) => {
				console.log("oops", err);
				reject(err);
			});
		});
	};

	return { getAllNotes };

});