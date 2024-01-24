document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        // You can add your code here to handle form submission, e.g., sending data to a server.
        alert("Form submitted!");
        form.reset();
    });
});



  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
  import { getdatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAQatAjhX-vV5nA0L9D-dSJycrEkv2cm1Q",
    authDomain: "app-592a6.firebaseapp.com",
    projectId: "app-592a6",
    storageBucket: "app-592a6.appspot.com",
    messagingSenderId: "956145209866",
    appId: "1:956145209866:web:46c2a8eb1cef2f1347c5f3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // get ref to database services 
  const db = getDatabase(app);

  document.getElementById("submit").addEventListener('click', function(e){

    set(ref(db, 'user/' + document.getElementById("name").value),
    {

     name: document.getElementById("name").value,
     email: document.getElementById("email").value,
     message: document.getElementById("message").value,

    });
     
     alert("submitted sucessfully  !");


  })
  