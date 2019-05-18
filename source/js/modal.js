var order = document.querySelector(".main-product__button");
var modal = document.querySelector(".modal");
var buy = document.querySelector(".modal__button");
var page = document.querySelector(".main-product");
var body = document.querySelector("body");

order.addEventListener("click" , function () {
  modal.classList.remove("modal-hidden");
  body.classList.add("opacity");
});

buy.addEventListener("click" , function () {
  modal.classList.add("modal-hidden");
  body.classList.remove("opacity");
});
//
// body.addEventListener("click" , function () {
//   modal.classList.add("modal-hidden");
//   // page.classList.remove("opacity");
// });
