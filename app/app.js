"use strict";

const notesApp = angular.module("NotesApp", ["ngRoute"]);

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

