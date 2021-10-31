import { ALL_GENRES } from '../const';
import {films} from '../mocks/films';
import {Films} from '../types/film';

export const getFilmsByGenre = (genre: string): Films => {

  if (genre === ALL_GENRES) {
    return films;
  }

  return films.filter((film) => film.genre === genre);
};
