// Exercise N1

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


// Exercise N2

personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


// Exercise N3

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('Насколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('Насколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);