document.addEventListener('DOMContentLoaded', function () {

  openFactPage = () => {
    window.location = "fact-page.html";
  }

  openTrailerPage = () => {
    window.location = "trailer-page.html";
  }





  let movieName;


  const factPageButton1 = document.querySelector("#poster1");

  factPageButton1.addEventListener('click', function () {
    movieName = document.querySelector("#poster1").getAttribute("movieId");
    sessionStorage.movieId = movieName;
    console.log(movieName);

    openFactPage();
  });

  const factPageButton2 = document.querySelector("#poster2");

  factPageButton2.addEventListener('click', function () {
    movieName = document.querySelector("#poster2").getAttribute("movieId");
    sessionStorage.movieId = movieName;
    console.log(movieName);

    openFactPage();
  });

  const factPageButton3 = document.querySelector("#poster3");

  factPageButton3.addEventListener('click', function () {
    movieName = document.querySelector("#poster3").getAttribute("movieId");
    sessionStorage.movieId = movieName;
    console.log(movieName);

    openFactPage();
  });

  const factPageButton4 = document.querySelector("#poster4");

  factPageButton4.addEventListener('click', function () {
    movieName = document.querySelector("#poster4").getAttribute("movieId");
    sessionStorage.movieId = movieName;
    console.log(movieName);

    openFactPage();
  });

  const factPageButton5 = document.querySelector("#poster5");

  factPageButton5.addEventListener('click', function () {
    movieName = document.querySelector("#poster5").getAttribute("movieId");
    sessionStorage.movieId = movieName;
    console.log(movieName);

    openFactPage();
  });

  const factPageButton6 = document.querySelector("#poster6");

  factPageButton6.addEventListener('click', function () {
    movieName = document.querySelector("#poster6").getAttribute("movieId");
    sessionStorage.movieId = movieName;
    console.log(movieName);

    openFactPage();
  });

  const factPageButton7 = document.querySelector("#poster7");

  factPageButton7.addEventListener('click', function () {
    movieName = document.querySelector("#poster7").getAttribute("movieId");
    sessionStorage.movieId = movieName;
    console.log(movieName);

    openFactPage();
  });

  const factPageButton8 = document.querySelector("#poster8");

  factPageButton8.addEventListener('click', function () {
    movieName = document.querySelector("#poster8").getAttribute("movieId");
    sessionStorage.movieId = movieName;
    console.log(movieName);

    openFactPage();
  });

  const factPageButton9 = document.querySelector("#poster9");

  factPageButton9.addEventListener('click', function () {
    movieName = document.querySelector("#poster9").getAttribute("movieId");
    sessionStorage.movieId = movieName;
    console.log(movieName);

    openFactPage();
  });


  // ==============================  ONLOAD CLOSING BRACKET BELOW  =================================

});


// Example explained:

// Create a localStorage name / value pair with name = "lastname" and value = "Smith"
// Retrieve the value of "lastname" and insert it into the element with id = "result"

// The example above could also be written like this:
// // Store
// localStorage.lastname = "Smith";
// // Retrieve
// document.getElementById("result").innerHTML = localStorage.lastname;

// The syntax for removing the "lastname" localStorage item is as follows:
// localStorage.removeItem("lastname");

// Note: Name / value pairs are always stored as strings.Remember to convert them to another format when needed!

// The following example counts the number of times a user has clicked a button.In this code the value string is converted to a number to be able to increase the counter: