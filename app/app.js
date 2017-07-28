"use strict";

let notesApp = angular.module("NotesApp", ["ngRoute"])
.constant("FirebaseUrl", "https://notes-3f823.firebaseio.com/");

notesApp.config( ($routeProvider) => {
	$routeProvider
	.when("/register", {
		templateUrl: "partials/registration.html",
		controller: "RegisterCtrl"
	})
	.when("/login", {
		templateUrl: "partials/login.html",
		controller: "LoginCtrl"
	})
	.when("/notes", {
		templateUrl: "partials/note-list.html",
		controller: "AllNotesCtrl"
	})
	.when("/new", {
		templateUrl: "partials/new-note.html",
		controller: "NewNoteCtrl"
	})
	.otherwise("/");
});

