"use strict";

notesApp.factory("UserFactory", function($q, $http, FirebaseUrl, FBCreds) {

	var config = {
		apiKey: FBCreds.key,
		authDomain: FBCreds.authDomain
	};

	firebase.initializeApp(config);

	let currentUser = null;

	firebase.auth().onAuthStateChanged( (user) => {
		if(user) {
			currentUser = user.uid;
		} else {
			currentUser = null;
		}
	});

	let getUser = () => {
		return currentUser;
	};

	let createUser = (userObj) => {
		return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password);
	};

	let loginUser = (userObj) => {
		return firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password)
		.catch( (err) => {
			console.log("error login message", err.message);
		});
	};

	let logoutUser = () => {
		return firebase.auth().signOut()
		.catch( (err) => {
			console.log("error logout message", err.message);
		});
	};

	console.log("firebase", firebase);
	return {getUser, createUser, loginUser, logoutUser};

});