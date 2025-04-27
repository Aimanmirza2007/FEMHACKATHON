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
