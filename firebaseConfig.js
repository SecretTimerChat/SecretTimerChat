// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv18vPy6A--AmTWH-x1oATyA86c-885FY",
  authDomain: "my-chat-app-2023-unique.firebaseapp.com",
  databaseURL: "https://my-chat-app-2023-unique-default-rtdb.firebaseio.com",
  projectId: "my-chat-app-2023-unique",
  storageBucket: "my-chat-app-2023-unique.appspot.com",
  messagingSenderId: "605615448354",
  appId: "1:605615448354:web:9f2f8a41fdd955b08cc57b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);

export { app, database };
