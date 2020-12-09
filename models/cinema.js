const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.getFilmTitles = function() {
  const result = this.films.map((film) => {
    return film.title;    // This returns from the inner, callback function to the parent function
  });

  return result;    // This returns from getFilmTitles()

}


module.exports = Cinema;