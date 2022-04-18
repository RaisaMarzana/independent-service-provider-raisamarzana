// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAx63zsLBNy3izdwBs3h93BD49aao3qJr4",
    authDomain: "independent-service-prov-f4646.firebaseapp.com",
    projectId: "independent-service-prov-f4646",
    storageBucket: "independent-service-prov-f4646.appspot.com",
    messagingSenderId: "959067767148",
    appId: "1:959067767148:web:54a2c52795d8a6b0413349"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;