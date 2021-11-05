import {changeGenre, updateFilmList, showMoreFilms, resetFilmsPerPage} from '../store/action';

export enum ActionType {
  ChangeGenre = 'films/changeGenre',
  UpdateFilmList = 'films/getFilmsByGenre',
  ShowMoreFilms = 'films/showMoreFilms',
  ResetFilmsPerPage = 'films/resetFilmsPerPage',
}

export type Actions =
  | ReturnType<typeof changeGenre>
  | ReturnType<typeof updateFilmList>
  | ReturnType<typeof showMoreFilms>
  | ReturnType<typeof resetFilmsPerPage>;
