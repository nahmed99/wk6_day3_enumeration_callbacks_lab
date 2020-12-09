const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.getFilmTitles = function() {
  const result = this.films.map((film) => {
    return film.title;    // This returns from the inner, callback function to the parent function
  });

  return result;    // This returns from getFilmTitles()

}



Cinema.prototype.findFilmByTitle = function(filmTitle) {
  const result = this.films.filter((film) => {
    // return the film that has matching title to the passed into this function
    return filmTitle === film.title;  // from inside the callback
  });

  return result;    // This returns from getFilmTitles()

}


module.exports = Cinema;