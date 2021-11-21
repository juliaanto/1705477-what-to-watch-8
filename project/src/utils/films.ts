import {ALL_GENRES} from '../const';
import {Films} from '../types/film';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

export const getFilmsByGenre = (genre: string, films: Films): Films => {

  if (genre === ALL_GENRES) {
    return films;
  }

  return films.filter((film) => film.genre === genre);
};

export const getFavoriteFilms = (films: Films): Films => films.filter((film) => film.isFavorite === true);

export const getElapsedTime = (currentTimeInSeconds: number, durationInSeconds: number): string => {
  if (durationInSeconds < 60 * 60) {
    return dayjs.duration((Math.floor(durationInSeconds - currentTimeInSeconds)), 'seconds').format('-mm:ss');
  }

  return dayjs.duration((Math.floor(durationInSeconds - currentTimeInSeconds)), 'seconds').format('-HH:mm:ss');
};

export const getPlayerProgress = (currentTimeInSeconds: number, durationInSeconds: number): string => `${((currentTimeInSeconds) / durationInSeconds) * 100}%`;
