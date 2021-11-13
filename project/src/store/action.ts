import {Film, Films} from '../types/film';

import {ActionType} from '../types/action';

export const changeGenre = (genre: string) => ({
  type: ActionType.ChangeGenre,
  payload: genre,
} as const);

export const resetGenre = () => ({
  type: ActionType.ResetGenre,
} as const);

export const showMoreFilms = () => ({
  type: ActionType.ShowMoreFilms,
} as const);

export const resetFilmsPerPage = () => ({
  type: ActionType.ResetFilmsPerPage,
} as const);

export const loadFilms = (films: Films) => ({
  type: ActionType.LoadFilms,
  payload: {
    films,
  },
} as const);

export const loadFilm = (currentFilm: Film) => ({
  type: ActionType.LoadFilm,
  payload: {
    currentFilm,
  },
} as const);
