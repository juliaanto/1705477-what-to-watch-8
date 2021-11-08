import {ALL_GENRES} from '../const';
import {Film, Films} from '../types/film';

const SIMILAR_FILMS_COUNT = 4;

export const getFilmsByGenre = (genre: string, films: Films): Films => {

  if (genre === ALL_GENRES) {
    return films;
  }

  return films.filter((film) => film.genre === genre);
};


export const getSimilarFilms = (currentFilm: Film, films: Films): Films => films.filter((element) => element.genre === currentFilm.genre && element.id !== currentFilm.id).slice(0, SIMILAR_FILMS_COUNT);

export const getFavoriteFilms = (films: Films): Films => films.filter((film) => film.isFavorite === true);
