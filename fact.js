document.addEventListener('DOMContentLoaded', function () {


  openTrailerPage = () => {
    window.location = "trailer-page.html";
  }

  openHomePage = () => {
    window.location = "home-page.html";
  }

  const homeButton = document.querySelector(".home-btn");

  homeButton.addEventListener('click', function () {
    openHomePage();
  });

  const trailerButton = document.querySelector(".trailer-page-button");

  trailerButton.addEventListener('click', function () {
    openTrailerPage();
  })


  // ============ poster ========


  // https://image.tmdb.org/t/p/w500/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg


  // ============================


  // ============  moviedb resources  ===========

  // people by id https://api.themoviedb.org/3/person/3?api_key=8d021868bbab84ae4f9d16fdc0645e0c&language=en-US

  // people by name  https://api.themoviedb.org/3/search/person?api_key=8d021868bbab84ae4f9d16fdc0645e0c&language=en-US&query=carrie%20fisher&page=1&include_adult=false

  // movie by ID  https://api.themoviedb.org/3/movie/11?api_key=8d021868bbab84ae4f9d16fdc0645e0c&language=en-US

  // ============================================



  // let title = document.querySelector(".display1");
  // let overview = document.querySelector(".display2");
  // let posterUrl = document.querySelector(".display3");
  // let movieId = document.querySelector(".display4");



  const apiTester = async () => {


    //   // const response = await axios.get("https://api.themoviedb.org/3/movie/550?api_key=8d021868bbab84ae4f9d16fdc0645e0c");

    const response = await axios.get("https://api.themoviedb.org/3/search/movie?api_key=8d021868bbab84ae4f9d16fdc0645e0c&query=star+wars");

    console.log(response.data);

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

    const response2 = await axios.get("https://swapi.co/api/starships/");

    console.log(response2.data);

  };

  apiTester();


  // ==============================  ONLOAD CLOSING BRACKET BELOW  =================================

});