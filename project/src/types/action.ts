import {changeGenre, updateFilmList} from '../store/action';

export enum ActionType {
  ChangeGenre = 'films/changeGenre',
  UpdateFilmList = 'films/getFilmsByGenre',
}

export type Actions =
  | ReturnType<typeof changeGenre>
  | ReturnType<typeof updateFilmList>;
