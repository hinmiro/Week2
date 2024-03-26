'use strict';

const numberOfMovies = parseInt(prompt('How many movies you want to rate'));

const movies = [];

for (let i = 0; i < numberOfMovies; i++) {
  const movie = {
    title: '',
    rating: 0,
  };
  movie.title = prompt(`Title of ${i + 1}. movie`);
  movie.rating = parseInt(prompt(`Rating of ${i + 1}. movie`));
  movies.push(movie);
}

console.log(movies.sort((a, b) => b.rating - a.rating));
console.log(movies[0].title);

const container = document.querySelector('.container');
const p2 = document.createElement('p');

for (let i = 0; i < movies.length; i++) {
  const p = document.createElement('p');
  p.textContent = movies[i].title;
  container.appendChild(p);
}

p2.textContent = `Best rated movie: ${movies[0].title}`;
container.appendChild(p2);
