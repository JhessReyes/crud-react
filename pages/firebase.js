  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAc3zGBmvnPM8_9_9WBAlLlytOb1cIJdUY",
    authDomain: "crud-react-1aa1e.firebaseapp.com",
    projectId: "crud-react-1aa1e",
    storageBucket: "crud-react-1aa1e.appspot.com",
    messagingSenderId: "405106295705",
    appId: "1:405106295705:web:49beba479b5dc3e3530908",
    measurementId: "G-Z5H3BP381M"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);