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

  const trailerButton = document.querySelector(".trailer");

  trailerButton.addEventListener('click', function () {
    openTrailerPage();
  })

  // =============  instal poster  ================

  const posterSource = sessionStorage.posterUrl;
  const currentPoster = document.querySelector("#current-poster");

  function instalPoster() {
    currentPoster.setAttribute("src", `${posterSource}`)
  }

  instalPoster();


  // ============  moviedb resources  ===========

  // people by id https://api.themoviedb.org/3/person/3?api_key=8d021868bbab84ae4f9d16fdc0645e0c&language=en-US

  // people by name  https://api.themoviedb.org/3/search/person?api_key=8d021868bbab84ae4f9d16fdc0645e0c&language=en-US&query=carrie%20fisher&page=1&include_adult=false

  // movie by ID  https://api.themoviedb.org/3/movie/11?api_key=8d021868bbab84ae4f9d16fdc0645e0c&language=en-US

  // ============================================

  // ============  load fact data ===================

  let movieNumber = sessionStorage.index;
  let title = document.querySelector(".fact-page-title");
  let release = document.querySelector(".fact-page-year");
  let overview = document.querySelector(".fact-page-overview");
  let homePageUrl = document.querySelector("#home-page-url");
  let axiosEndPoint = `https://api.themoviedb.org/3/movie/${movieNumber}?api_key=8d021868bbab84ae4f9d16fdc0645e0c&language=en-US`


  console.log(axiosEndPoint);




  const apiFetcher1 = async () => {


    //   // const response = await axios.get("https://api.themoviedb.org/3/movie/550?api_key=8d021868bbab84ae4f9d16fdc0645e0c");

    const response = await axios.get(axiosEndPoint);

    // console.log(response.data);

    title.innerHTML = response.data.title;
    release.innerHTML = `Release Date: ${response.data.release_date}`;
    overview.innerHTML = response.data.overview;

    console.log(response.data.homepage);

    if (response.data.homepage === "") {
      homePageUrl.innerHTML = "https://www.starwars.com/films/star-wars-episode-ii-attack-of-the-clones";
      homePageUrl.setAttribute("href", "https://www.starwars.com/films/star-wars-episode-ii-attack-of-the-clones")
    } else {
      homePageUrl.innerHTML = response.data.homepage;
      homePageUrl.setAttribute("href", `${response.data.homepage}`)
    };


    //   // https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=8d021868bbab84ae4f9d16fdc0645e0c&language=en-US

    //   // https://image.tmdb.org/t/p/w500/mMZRKb3NVo5ZeSPEIaNW9buLWQ0.jpg

    const response2 = await axios.get("https://swapi.co/api/starships/");

    console.log(response2.data);

  };

  apiFetcher1();


  // ==============================  ONLOAD CLOSING BRACKET BELOW  =================================

});