var link = document.querySelector(".contacts-btn");
var linkClose = document.querySelector(".feedback-close");
var popup = document.querySelector(".feedback");
var focusName = popup.querySelector("input[name=name]");
var linkMap = document.querySelector(".modal-map");
var linkMapClose = document.querySelector(".map-popup-close");
var popupMap = document.querySelector(".map-popup");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=email]");
var massage = popup.querySelector("textarea");



link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  focusName.focus();
});

linkClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

linkMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-show");
});

linkMapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {

  if (!focusName.value || !email.value || !massage.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");

    if (!email.value) {
      email.classList.add("feedback-input-error");
    } else {
      email.classList.remove("feedback-input-error");
    }

    if (!focusName.value) {
      focusName.classList.add("feedback-input-error");
    } else {
      focusName.classList.remove("feedback-input-error");
    }

    if (!massage.value) {
      massage.classList.add("feedback-textarea-error");
    } else {
      massage.classList.remove("feedback-textarea-error");
    }
  } else {
    evt.preventDefault();
    email.classList.remove("feedback-input-error");
    focusName.classList.remove("feedback-input-error");
    massage.classList.remove("feedback-textarea-error");
  }

});
