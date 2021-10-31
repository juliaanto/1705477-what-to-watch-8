import {Films} from './film';

export enum ActionType {
  ChangeGenre = 'films/changeGenre',
  ChangeFilmsByGenre = 'films/getFilmsByGenre',
}

export type ChangeGenreAction = {
  type: ActionType.ChangeGenre;
  payload: string;
}

export type ChangeFilmsByGenreAction = {
  type: ActionType.ChangeFilmsByGenre;
  payload: Films;
}

export type Actions = ChangeGenreAction | ChangeFilmsByGenreAction;
