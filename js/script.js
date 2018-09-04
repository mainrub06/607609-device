var link = document.querySelector(".contacts-btn");
var linkClose = document.querySelector(".feedback-close");
var popup = document.querySelector(".feedback");
var focusName = popup.querySelector("input[name=name]");
var rangeOff = document.querySelector(".range-js");



link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    focusName.focus();
});

linkClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});

rangeOff.addEventListener("click", function (evt) {
  evt.preventDefault();
});
