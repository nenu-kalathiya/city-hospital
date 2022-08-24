// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeyoo05cbMomphVdujwc825uJc1gyQ0JE",
  authDomain: "cityhospital-6edb0.firebaseapp.com",
  projectId: "cityhospital-6edb0",
  storageBucket: "cityhospital-6edb0.appspot.com",
  messagingSenderId: "250999552473",
  appId: "1:250999552473:web:ac9e80988283c071d101c8",
  measurementId: "G-MW74GXC8KC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)