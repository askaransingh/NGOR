// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDaXF0rjCeKu-dO6OjBElbRl4iFDmaWrcI",
//   authDomain: "ngo-r-37c48.firebaseapp.com",
//   projectId: "ngo-r-37c48",
//   storageBucket: "ngo-r-37c48.appspot.com",
//   messagingSenderId: "74389700511",
//   appId: "1:74389700511:web:24d0a4eb628be7bf8447aa"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signOut as firebaseSignOut } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaXF0rjCeKu-dO6OjBElbRl4iFDmaWrcI",
  authDomain: "ngo-r-37c48.firebaseapp.com",
  projectId: "ngo-r-37c48",
  storageBucket: "ngo-r-37c48.appspot.com",
  messagingSenderId: "74389700511",
  appId: "1:74389700511:web:24d0a4eb628be7bf8447aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore database and authentication
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
// Export the Firebase services to use them in other files
export { db, auth, googleProvider, doc, setDoc  };
export const signOut = () => {
    return firebaseSignOut(auth);
  };