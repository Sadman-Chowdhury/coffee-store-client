// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwH5Qb043E1FKnuGE73B76IfqAZk55YEA",
  authDomain: "coffee-store-3467a.firebaseapp.com",
  projectId: "coffee-store-3467a",
  storageBucket: "coffee-store-3467a.appspot.com",
  messagingSenderId: "550205044631",
  appId: "1:550205044631:web:beecc3d4d1d3603a2036d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app