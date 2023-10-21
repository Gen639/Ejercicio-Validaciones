// TODO LIST
// 1. check the audio in js and html
// 2. introduce the variables and functions
// 3. *(write structure validation logic) introduce validation logic

//buttons
const goToRegisterPage = document.getElementById("mainRegister");
const goToAllRegistered = document.getElementById("allRegistered");
const submitButton = document.getElementById("submitBtn");
// message window
const validationMessage = document.getElementById("msg");
// input fields
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const fPassword = document.getElementById("firstPassword");
const sPassword = document.getElementById("secondPassword");
// const audios
const audio = document.getElementById("bruhAudio");
// const various
const userCollection = [];

const emailValidationErrorMessage =
  "<div><ul>" +
  "<li>The email address cannot start or end with a dot.</li>" +
  "<li>The email address should not contain spaces.</li>" +
  "<li>The email address should not contain special characters (e.g., :, *, etc).</li>" +
  "<li>The email address can have dots in the middle of the address before the @ symbol.</li>" +
  "<li>The email address can contain a double domain (e.g., '.de.org' or similar).</li>" +
  "<li><em>Please ensure your email address is formatted correctly.</em></li>" +
  "</ul></div>";
// declaring functions

function dataStorage() {
  const newUser = {
    userName: userName.value,
    userEmail: userEmail.value,
    userPasswordConfirmed: fPassword.value,
  };

  userCollection.push(newUser);
  localStorage.setItem("fromUser", JSON.stringify(newUser));
  localStorage.setItem("userCollection", JSON.stringify(userCollection));
}

function onClickSubmit(e) {
  e.preventDefault();
  if (
    userName.value === "" ||
    userEmail.value === "" ||
    fPassword.value === "" ||
    sPassword.value === ""
  ) {
    msg.innerHTML = allCampsValidationErrorMessage;
    setTimeout(function () {
      msg.innerHTML = "";
    }, 3000);
  } else if (
    !/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm.test(
      userEmail.value
    )
  ) {
    msg.innerHTML =
      "<p>Yoo, all camps are obligatory, Better fill'em all Bruh!</p>";
    setTimeout(function () {
      msg.innerHTML = "";
    }, 3000);
  } else if (
    !/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(fPassword.value)
  ) {
  } else if (fPassword.value !== sPassword.value) {
    console.log("passwords are not the same, check it");
    msg.innerHTML = "<p>Passwords are not the same, check it</p>";
    setTimeout(function () {
      msg.innerHTML = "";
    }, 3000);
  } else {
    msg.innerHTML = "<p>Succesfully registered, successfully bruh</p>";
    dataStorage();
    audio.play();
  }
}

// pending to complete after validation, function showUserCollection() {}

// calling functions
submitButton.addEventListener("click", onClickSubmit);

// 1. check if all field are writen - save data
// 2. email validation
// 3. firts password validation
// 4. checking if passowrd are the same

// (!/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;)/.test(userEmail.value)) {
//   console.log("The email couldn't start or finish with a dot, The email shouldn't
//contain spaces into the string, The email shouldn't contain special chars (<:, *,ecc),
//The email could contain dots in the middle of mail address before the @,
//The email could contain a double doman ( '.de.org' or similar rarity)");
// }

//contain spaces into the string, ontain special chars (<:, *,ecc), the email could contain dots in the middle of mail address before the @, the email could contain a double doman ( '.de.org' or similar rarity).

// email form test --- test@test.com

// password check is foollowing > Checks that a password has a minimum of 6 characters,
//at least 1 uppercase letter, 1 lowercase letter, and 1 number with no spaces.

// password for test --- Test123
// "<p>You are good person, you have to know that the email couldn't start or finish with a dot, contain spaces into the string, ontain special chars (<:, *,ecc), the email could contain dots in the middle of mail address before the @, the email could contain a double doman ( '.de.org' or similar rarity).</p>";
