document.addEventListener('DOMContentLoaded', function () {

  openFactPage = () => {
    window.location = "fact-page.html";
  }

  openTrailerPage = () => {
    window.location = "trailer-page.html";
  }

  openHomePage = () => {
    window.location = "home-page.html";
  }

  const homeButton = document.querySelector(".home-btn");

  homeButton.addEventListener('click', function (event) {
    // event.preventDefault();
    openHomePage();
  });


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






  // const title = document.querySelector(".display1");
  // const overview = document.querySelector(".display2");
  // const posterUrl = document.querySelector(".display3");
  // const movieId = document.querySelector(".display4");



  // const apiTester = async () => {


  //   // const response = await axios.get("https://api.themoviedb.org/3/movie/550?api_key=8d021868bbab84ae4f9d16fdc0645e0c");

  //   const response = await axios.get("https://api.themoviedb.org/3/search/movie?api_key=8d021868bbab84ae4f9d16fdc0645e0c&query=star+wars");

  //   // console.log(response.data);

  //   const title = document.querySelector(".display1");
  //   const overview = document.querySelector(".display2");
  //   const posterUrl = document.querySelector(".display3");
  //   const movieId = document.querySelector(".display4");
  //   title.innerHTML += response.data.results[5].title;
  //   overview.innerHTML += response.data.results[5].overview;
  //   posterUrl.innerHTML += response.data.results[5].poster_path;
  //   movieId.innerHTML += response.data.results[5].id;


  //   // https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=8d021868bbab84ae4f9d16fdc0645e0c&language=en-US

  //   // https://image.tmdb.org/t/p/w500/mMZRKb3NVo5ZeSPEIaNW9buLWQ0.jpg

  //   const response2 = await axios.get("https://swapi.co/api/starships/");

  //   console.log(response2.data);

  // };

  // apiTester();



  // const trailerHomeButton = document.querySelector("#home-btn");

  // trailerHomeButton.addEventListener('click', function (event) {
  //   event.preventDefault();
  //   let changeAttribute = document.querySelector("#trailer-last-jedi");
  //   changeAttribute.setAttribute("style", "initial");

  // });


  // ==============================  ONLOAD CLOSING BRACKET BELOW  =================================

});