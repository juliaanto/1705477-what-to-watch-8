import {Films} from './film';

export enum ActionType {
  ChangeGenre = 'films/changeGenre',
  GetFilmsByGenre = 'films/getFilmsByGenre',
}

export type ChangeGenreAction = {
  type: ActionType.ChangeGenre;
  payload: string;
}

export type GetFilmsByGenreAction = {
  type: ActionType.GetFilmsByGenre;
  payload: Films;
}

export type Actions = ChangeGenreAction | GetFilmsByGenreAction;
