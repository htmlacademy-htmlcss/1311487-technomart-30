const contactsBtn = document.querySelector(".contacts-btn");
const messagePopup = document.querySelector(".modal-message");
const messageClose = messagePopup.querySelector(".modal-close");
const messageForm = messagePopup.querySelector(".message-form");
const messageEmail = messagePopup.querySelector(".email-user");
const messageName = messagePopup.querySelector(".message-name");

let isStorageSupport = true;
let storage = "";

try {
    storage = localStorage.getItem("email");
  } catch (err) {
    isStorageSupport = false;
  }

contactsBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  messagePopup.classList.add("modal-show");
  messageEmail.focus();

if (storage) {
    messageEmail.value = storage;
    messageName.focus();
  } else {
    messageEmail.focus();
  }
});

messageClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  messagePopup.classList.remove("modal-show");
  messagePopup.classList.remove("modal-error");
});
  
messageForm.addEventListener("submit", function (evt) {
  if (!messageEmail.value || !messageName.value) {
    evt.preventDefault();
    messagePopup.classList.remove("modal-error");
    messagePopup.offsetWidth = loginPopup.offsetWidth;
    messagePopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("email", messageEmail.value);
    }
  }
});
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (messagePopup.classList.contains("modal-show")) {
        evt.preventDefault();
        messagePopup.classList.remove("modal-show");
      }
    }
});
  