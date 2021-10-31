import {ALL_GENRES} from '../const';
import {films} from '../mocks/films';
import {Film, Films} from '../types/film';

const SIMILAR_FILMS_COUNT = 4;

export const getFilmsByGenre = (genre: string): Films => {

  if (genre === ALL_GENRES) {
    return films;
  }

  return films.filter((film) => film.genre === genre);
};


export const getSimilarFilms = (currentFilm: Film): Films => films.filter((element) => element.genre === currentFilm.genre && element.id !== currentFilm.id).slice(0, SIMILAR_FILMS_COUNT);
