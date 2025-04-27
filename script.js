  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAQEzMPX_ik8pbV2UEU8-wzGKMZfA208EA",
    authDomain: "femhack-signup.firebaseapp.com",
    projectId: "femhack-signup",
    storageBucket: "femhack-signup.firebasestorage.app",
    messagingSenderId: "1038751509463",
    appId: "1:1038751509463:web:19d5c31a0363296cb33992"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const submit = document.getElementById("submit");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("login successfully")
    window.location.href = "website.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
    });
