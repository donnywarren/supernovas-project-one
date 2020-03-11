document.addEventListener('DOMContentLoaded', function () {

  openFactPage = () => {
    window.location = "fact-page.html";
  }

  openHomePage = () => {
    window.location = "home-page.html";
  }

  const homeButton = document.querySelector(".home-btn");

  homeButton.addEventListener('click', function (event) {
    // event.preventDefault();
    openHomePage();
  });




  // ==============================  ONLOAD CLOSING BRACKET BELOW  =================================

});