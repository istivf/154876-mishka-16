var order = document.querySelector(".main-product__button");
var modal = document.querySelector(".modal-layout");
var buy = document.querySelector(".modal__button");

order.addEventListener("click" , function () {
  modal.classList.remove("modal-layout--hidden");
});

buy.addEventListener("click" , function () {
  modal.classList.add("modal-layout--hidden");
});
