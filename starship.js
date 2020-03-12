
openHomePage = () => {
  window.location = "home-page.html";
}


const homeButton = document.querySelector(".home-btn");

homeButton.addEventListener('click', function () {
  openHomePage();
});