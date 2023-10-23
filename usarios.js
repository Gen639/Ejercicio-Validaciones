const goToRegisterPageBtn = document.getElementById("mainRegister");
const goToAllRegisteredBtn = document.getElementById("allRegistered");

const userCollection = JSON.parse(localStorage.getItem("userCollection"));
const allUserContainer = document.getElementById("allUsers");
const allUserRowContainer = document.getElementById("allUsersRow");

for (i = 0; i < userCollection.length; i++) {
  //declaring variables
  const user = userCollection[i];
  const card = document.createElement("div");
  const cardBody = document.createElement("div");
  const cardTitle = document.createElement("h5");
  const cardText = document.createElement("h6");
  const divCol = document.createElement("div");

  //Structure of the content
  allUserRowContainer.append(divCol);

  divCol.append(card);
  card.append(cardBody);
  cardBody.append(cardTitle);
  cardBody.append(cardText);

  // card.style.width = "min-width: 30rem;";

  // Adding classes to elements from the structure
  divCol.className += "col";
  card.className += "card h-100 ";
  cardBody.className += "card-body";
  cardTitle.className += "card-title";
  cardText.className += "card-text text-body-secondary";

  // card content
  cardTitle.innerHTML = "username: " + "<Em>" + user.userName + "</em>";
  cardText.innerHTML = "email address: " + user.userEmail;
}

goToAllRegisteredBtn.addEventListener("click", function () {
  window.location.href = "usarios.html";
});

goToRegisterPageBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});

{
  /* <div class="card text-bg-dark mb-3 border-light" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Dark card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */
}

//document.getElementById("MyElement").className += " MyClass";
