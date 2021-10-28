import {films} from '../mocks/films';
import {ChangeGenreAction, ActionType, GetFilmsByGenreAction} from '../types/action';

export const changeGenre = (genre: string): ChangeGenreAction => ({
  type: ActionType.ChangeGenre,
  payload: genre,
});

export const getFilmsByGenre = (genre: string): GetFilmsByGenreAction => ({
  type: ActionType.GetFilmsByGenre,
  payload: films,
});
