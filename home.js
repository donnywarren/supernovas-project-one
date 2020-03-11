document.addEventListener('DOMContentLoaded', function () {

  openFactPage = () => {
    window.location = "fact-page.html";
  }

  openTrailerPage = () => {
    window.location = "trailer-page.html";
  }



  const factPageButton1 = document.querySelector("#poster1");
  const video = document.querySelector(".trailer-page-button");

  factPageButton1.addEventListener('click', function () {
    video.setAttribute("test", "#trailer-star-wars");

    openFactPage();
  });

  const factPageButton2 = document.querySelector("#poster2");

  factPageButton2.addEventListener('click', function () {

    openFactPage();
  });

  const factPageButton3 = document.querySelector("#poster3");

  factPageButton3.addEventListener('click', function () {

    openFactPage();
  });

  const factPageButton4 = document.querySelector("#poster4");

  factPageButton4.addEventListener('click', function () {

    openFactPage();
  });

  const factPageButton5 = document.querySelector("#poster5");

  factPageButton5.addEventListener('click', function () {

    openFactPage();
  });

  const factPageButton6 = document.querySelector("#poster6");

  factPageButton6.addEventListener('click', function () {

    openFactPage();
  });

  const factPageButton7 = document.querySelector("#poster7");

  factPageButton7.addEventListener('click', function () {

    openFactPage();
  });

  const factPageButton8 = document.querySelector("#poster8");

  factPageButton8.addEventListener('click', function () {

    openFactPage();
  });

  const factPageButton9 = document.querySelector("#poster9");

  factPageButton9.addEventListener('click', function () {

    openFactPage();
  });


  // ==============================  ONLOAD CLOSING BRACKET BELOW  =================================

});