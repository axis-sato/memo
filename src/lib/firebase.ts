import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: process.env.FBAPIKey,
  authDomain: process.env.FBAuthDomain,
  projectId: process.env.FBProjectID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const db = firebase.firestore();
