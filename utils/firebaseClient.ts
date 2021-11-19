import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const clientCredentials = {
	apiKey: "AIzaSyCsyDXHVxnkh6dA7kDLEHIoumHu2F9kyu0",
	authDomain: "social-media-web-7c15b.firebaseapp.com",
	projectId: "social-media-web-7c15b",
	storageBucket: "social-media-web-7c15b.appspot.com",
	messagingSenderId: "1081184969764",
	appId: "1:1081184969764:web:2595e4d21edecd09d864b1",
};

if (!firebase.apps.length) {
	firebase.initializeApp(clientCredentials);
}

export default firebase;
