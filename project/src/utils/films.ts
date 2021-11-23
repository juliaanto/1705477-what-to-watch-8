import {ALL_GENRES, RatingBoundaryValue, RatingText} from '../const';

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

export const getElapsedTime = (currentTimeInSeconds: number, durationInSeconds: number): string => {
  if (durationInSeconds < 60 * 60) {
    return dayjs.duration((Math.floor(durationInSeconds - currentTimeInSeconds)), 'seconds').format('-mm:ss');
  }

  return dayjs.duration((Math.floor(durationInSeconds - currentTimeInSeconds)), 'seconds').format('-HH:mm:ss');
};

export const getPlayerProgress = (currentTimeInSeconds: number, durationInSeconds: number): string => `${((currentTimeInSeconds) / durationInSeconds) * 100}%`;

export const getRatingText = (rating: number): string => {
  if (rating < RatingBoundaryValue.Bad) {
    return RatingText.Bad;
  } else if (rating < RatingBoundaryValue.Normal) {
    return RatingText.Normal;
  } else if (rating < RatingBoundaryValue.Good) {
    return RatingText.Good;
  } else if (rating < RatingBoundaryValue.VeryGood) {
    return RatingText.VeryGood;
  } else if (rating === RatingBoundaryValue.VeryGood) {
    return RatingText.Awesome;
  } else {
    return '';
  }
};
