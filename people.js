
openHomePage = () => {
  window.location = "home-page.html";
}

const homeButton = document.querySelector(".home-btn");

homeButton.addEventListener('click', function () {
  openHomePage();
});



backOnePage = () => {
  window.history.back();
}

const backButton = document.querySelector(".back-btn");

backButton.addEventListener('click', function () {
  backOnePage();
});