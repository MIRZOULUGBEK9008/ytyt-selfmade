const loader = document.querySelector(".js-loader");

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function (){
    loader.classList.add("loader-wrapper--none")
  }, 1000);
});