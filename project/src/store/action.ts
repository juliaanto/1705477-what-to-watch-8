import {ChangeGenreAction, ActionType, UpdateFilmListAction} from '../types/action';
import { Films } from '../types/film';

export const changeGenre = (genre: string): ChangeGenreAction => ({
  type: ActionType.ChangeGenre,
  payload: genre,
});

export const updateFilmList = (films: Films): UpdateFilmListAction => ({
  type: ActionType.UpdateFilmList,
  payload: films,
});
