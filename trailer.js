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


  // sessionStorage.movieId = test;
  console.log(sessionStorage.movieId)



  const currentVideo = document.querySelector(`#${sessionStorage.movieId}`)


  console.log(currentVideo);


  // document.onload = function () { myFunction() };

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