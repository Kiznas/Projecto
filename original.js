'use strict';
let numberOfFilms; 

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
};

function start() {
    numberOfFilms = +prompt("сколько фильмов вы посмотрели ?");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("сколько фильмов вы посмотрели ?");
    }
}

start();

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Last films ?'),
              a2 = prompt('How it was ?');
       if (a != null && a2 != null && a != '' && a2 != '' && a.length < 50){
           personalMovieDB.movies[a] = a2;
           console.log ("done");
       }else {
           console.log ("Error 404");
           i--;
       }
   }
}

rememberMyFilms();

function detectPersonalLevel(){
    if ( numberOfFilms < 10 ){
        alert('Small number of films');
    } else {
        if ( numberOfFilms > 10 && numberOfFilms < 30) {
            alert("normal number of films");
        } else {
            if ( numberOfFilms > 30 ) {
                alert("very FUCKING good");
            } else {
                alert('error 404');
            }
        }
    }
}

detectPersonalLevel();

function showMyDB (hidden) {
    if ( personalMovieDB.privat == false ){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGeners(){
    for (let i = 1; i < 4; i++) {
        const gener = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = gener;
    }
}

writeYourGeners();

console.log(personalMovieDB);