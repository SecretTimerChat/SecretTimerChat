// firebaseConfig.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCv18vPy6A--AmTWH-x1oATyA86c-885FY",
  authDomain: "my-chat-app-2023-unique.firebaseapp.com",
  databaseURL: "https://my-chat-app-2023-unique-default-rtdb.firebaseio.com",
  projectId: "my-chat-app-2023-unique",
  storageBucket: "my-chat-app-2023-unique.appspot.com",
  messagingSenderId: "605615448354",
  appId: "1:605615448354:web:9f2f8a41fdd955b08cc57b"
};

const app = initializeApp(firebaseConfig);

export { app };
