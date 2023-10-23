//buttons
const goToRegisterPageBtn = document.getElementById("mainRegister");
const goToAllRegisteredBtn = document.getElementById("allRegistered");
const submitButton = document.getElementById("submitBtn");
// message window
const validationMessage = document.getElementById("msg");
// input fields
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const fPassword = document.getElementById("firstPassword");
const sPassword = document.getElementById("secondPassword");
// const audios
const bruhAudio = document.getElementById("bruhAudio");
// let userCollection check.

let userCollection = [];
if (localStorage.getItem("userCollection")) {
  userCollection = JSON.parse(localStorage.getItem("userCollection"));
} else {
  userCollection = [];
}

//Validation messages
const emailValidationErrMsg =
  "<div class='text-danger' >" +
  "<ul> Email address requirements:" +
  "<li>The email address cannot start or end with a dot.</li>" +
  "<li>The email address should not contain spaces.</li>" +
  "<li>The email address should not contain special characters (e.g., :, *, etc).</li>" +
  "<li>The email address can have dots in the middle of the address before the @ symbol.</li>" +
  "<li>The email address can contain a double domain (e.g., '.de.org' or similar).</li>" +
  "<li><em>Please ensure your email address is formatted correctly.</em></li>" +
  "</ul>" +
  "</div>";

const allCampsErrMsg =
  "<p class='text-danger' >Yoo, all camps are obligatory, Better fill'em all Bruh!</p>";
const passwordValidationErrMsg =
  "<div class='text-danger'>" +
  "<ul> Password requirements:" +
  "<li> Contains min 6 characters</li>" +
  "<li> At least 1 uppercase letter</li>" +
  "<li> At least 1 lowercase letter</li>" +
  "<li> At least 1 number with no spaces</li>" +
  "</div>";
const passwordErrMsgNotSame =
  "<p class='text-danger'>Passwords are not the same, check it.</p>";
const successMsg =
  "<p class='text-success fw-bolder'>Successfully registered bruh!</p>";

// declaring functions

function dataStorage() {
  const newUser = {
    userName: userName.value,
    userEmail: userEmail.value,
    userPasswordConfirmed: fPassword.value,
  };
  userCollection.push(newUser);

  localStorage.setItem("formUser", JSON.stringify(newUser));
  localStorage.setItem("userCollection", JSON.stringify(userCollection));
}

function msgTimeout() {
  setTimeout(function () {
    msg.innerHTML = "";
  }, 3000);
}

function onClickSubmit(e) {
  e.preventDefault();
  if (
    userName.value === "" ||
    userEmail.value === "" ||
    fPassword.value === "" ||
    sPassword.value === ""
  ) {
    msg.innerHTML = allCampsErrMsg;
    msgTimeout();
  } else if (
    !/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm.test(
      userEmail.value
    )
  ) {
    console.log("email error");
    msg.innerHTML = emailValidationErrMsg;
    msgTimeout();
  } else if (fPassword.value !== sPassword.value) {
    msg.innerHTML = passwordErrMsgNotSame;
    msgTimeout();
  } else if (
    !/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(fPassword.value)
  ) {
    msg.innerHTML = passwordValidationErrMsg;
    msgTimeout();
  } else {
    msg.innerHTML = successMsg;
    dataStorage();
    bruhAudio.play();
  }
}

// calling functions
submitButton.addEventListener("click", onClickSubmit);

goToAllRegisteredBtn.addEventListener("click", function () {
  window.location.href = "usarios.html";
});

goToRegisterPageBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});

// email form test --- test@test.com

// password for test --- Test123
