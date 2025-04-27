document.getElementById("addButton").addEventListener("click", function () {
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  let category = document.getElementById("category").value;

  if (title && description && category) {
    let card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
          <h4>${title}</h4>
          <p><strong>Description:</strong> ${description}</p>
          <div class="category"><strong>Category:</strong> ${category}</div>
          <button class="move-btn">Move to In Progress</button>
      `;

    document.getElementById("todoCards").appendChild(card);

    let button = card.querySelector(".move-btn");
    button.addEventListener("click", moveCard);

    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("category").value = "";
  } else {
    alert("Please fill all fields");
  }
});

function moveCard(event) {
  const card = event.target.closest(".card");
  const button = event.target;

  if (card.parentElement.id === "todoCards") {
    document.getElementById("inprogressCards").appendChild(card);
    button.innerText = "Move to Done";
  } else if (card.parentElement.id === "inprogressCards") {
    document.getElementById("doneCards").appendChild(card);
    button.innerText = "Completed";
  }
}


  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
  import { getDatabase,set,ref } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDuYyAH9SKPIdONIWpoAvjXpoPCZYGqKeM",
    authDomain: "femhack-database.firebaseapp.com",
    projectId: "femhack-database",
    storageBucket: "femhack-database.firebasestorage.app",
    messagingSenderId: "119187500485",
    appId: "1:119187500485:web:a992a6ea6cb9e06b03efac",
    measurementId: "G-8B0LCX5EQX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
 const dp = getDatabase(app)
 document.getElementById("addButton").addEventListener('click',function(event){
  event.preventDefault()
  set(ref(db,"userdata/"+ document.getElementById("title").value),
{
  title: document.getElementById("title").value,
  discription: document.getElementById("description").value,
  category: document.getElementById("category").value,
})
alert("data save successfully")
 })

