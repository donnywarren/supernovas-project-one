document.addEventListener('DOMContentLoaded', function () {

  openFactPage = () => {
    window.location = "fact-page.html";
  }

  openHomePage = () => {
    window.location = "home-page.html";
  }

  const homeButton = document.querySelector(".home-btn");

  homeButton.addEventListener('click', function () {
    openHomePage();
  });


  const currentVideo = document.querySelector(`#${sessionStorage.movieId}`)

  function playVideo() {
    currentVideo.setAttribute("style", "display: inherit;")
  }

  playVideo();







  //   <iframe id="myFrame" src="/default.asp"></iframe>

  //     <p id="demo"></p>

  //     <script>
  //       document.getElementById("myFrame").onload = function() {myFunction()};

  // function myFunction() {
  //         document.getElementById("demo").innerHTML = "Iframe is loaded.";
  // }
  // </script>






  // ==============================  ONLOAD CLOSING BRACKET BELOW  =================================

});