import {ALL_GENRES} from '../const';
import {Films} from '../types/film';

export const getFilmsByGenre = (genre: string, films: Films): Films => {

  if (genre === ALL_GENRES) {
    return films;
  }

  return films.filter((film) => film.genre === genre);
};

export const getFavoriteFilms = (films: Films): Films => films.filter((film) => film.isFavorite === true);
