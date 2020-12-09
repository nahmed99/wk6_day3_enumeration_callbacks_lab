const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.getFilmTitles = function() {
  const result = this.films.map((film) => {
    return film.title;    // This returns from the inner, callback function to the parent function
  });

  // Array of film titles to be returned
  return result;    // This returns from getFilmTitles()

}


//
// The following function has been replaced with one that uses .find instead
// of .filter...
//
// Cinema.prototype.findFilmByTitle = function(filmTitle) {
//   const result = this.films.filter((film) => {
//     // return the film that has matching title to the passed into this function
//     return filmTitle === film.title;  // from inside the callback
//   });
//
//  An array of (one) film will be returned.
//   return result;    // This returns from findFilmByTitle

// }


Cinema.prototype.findFilmByTitle = function(filmTitle) {
  const result = this.films.find(film => filmTitle === film.title);

  // A film object will be returned
  return result;    // This returns from findFilmByTitle

}



Cinema.prototype.filterFilmsByGenre = function(genre) {
  // ... = array_name(item in array) => ...
  const result = this.films.filter((film) => {
    // return the films for matching genre
    return genre === film.genre;  // from inside the callback
  });


  // Array of film objects will be returned
  return result;    // This returns from filterFilmsByGenre

}


Cinema.prototype.areThereFilmsForYear = function(year) {
  const result = this.films.some((film) => {
    // return the films for matching genre
    return year === film.year;  // from inside the callback
  });

  // boolean of whether any films for a certain year exist in film array
  return result;    
}

// this is essentially the same function as above, but returns 'true' if *** NO *** film exists for the specified year.
Cinema.prototype.areThereNoFilmsForYear = function(year) {
  const result = this.films.some((film) => {
    // return the films for matching genre
    return year === film.year;  // from inside the callback
  });

  // boolean of whether no films for a certain year exist in film array
  return !result;    
}



Cinema.prototype.areAllFilmsLongerLength = function(length) {
  const result = this.films.every((film) => {
    // return the films for matching genre
    return film.length > length;  // from inside the callback
  });

  // boolean of whether no films for a certain year exist in film array
  return result;    
}



Cinema.prototype.totalLengthOfAllFilms = function() {
  const result = this.films.reduce((runningTotal, film) => {
    // return the films for matching genre
    return runningTotal + film.length;  // from inside the callback
  }, 0);

  // boolean of whether no films for a certain year exist in film array
  return result;    
}


module.exports = Cinema;