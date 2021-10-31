import {ChangeGenreAction, ActionType, ChangeFilmsByGenreAction} from '../types/action';
import { Films } from '../types/film';

export const changeGenre = (genre: string): ChangeGenreAction => ({
  type: ActionType.ChangeGenre,
  payload: genre,
});

export const changeFilmsByGenre = (films: Films): ChangeFilmsByGenreAction => ({
  type: ActionType.ChangeFilmsByGenre,
  payload: films,
});
