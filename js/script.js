var link = document.querySelector(".contacts-btn");
var linkClose = document.querySelector(".feedback-close");
var popup = document.querySelector(".feedback");
var focusName = popup.querySelector("input[name=name]");
var linkMap = document.querySelector(".modal-map");
var linkMapClose = document.querySelector(".map-popup-close");
var popupMap = document.querySelector(".map-popup");



link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  focusName.focus();
});

linkClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

linkMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-show");
});

linkMapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal-show");
});
