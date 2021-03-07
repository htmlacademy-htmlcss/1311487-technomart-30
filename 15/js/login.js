const contactsBtn = document.querySelector(".contacts-btn");
const massagePopup = document.querySelector(".modal-massage");
const massageClose = massagePopup.querySelector(".modal-close");
const massageForm = massagePopup.querySelector(".massage-form");
const massageEmail = massagePopup.querySelector(".email-user");
const massageName = massagePopup.querySelector(".massage-name");

let isStorageSupport = true;
let storage = "";

try {
    storage = localStorage.getItem("email");
  } catch (err) {
    isStorageSupport = false;
  }

contactsBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  massagePopup.classList.add("modal-show");
  massageEmail.focus();

if (storage) {
    massageEmail.value = storage;
    massageName.focus();
  } else {
  massageEmail.focus();
  }
});

massageClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  massagePopup.classList.remove("modal-show");
  massagePopup.classList.remove("modal-error");
});
  
massageForm.addEventListener("submit", function (evt) {
  if (!massageEmail.value || !massageName.value) {
    evt.preventDefault();
    massagenPopup.classList.remove("modal-error");
    massagePopup.offsetWidth = loginPopup.offsetWidth;
    massagePopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("email", massageEmail.value);
    }
  }
});
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (massagePopup.classList.contains("modal-show")) {
        evt.preventDefault();
        massagePopup.classList.remove("modal-show");
      }
    }
});
  