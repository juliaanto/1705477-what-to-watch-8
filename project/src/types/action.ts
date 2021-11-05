import {changeGenre, updateFilmList, showMoreFilms, resetFilmsPerPage, resetFilmList, resetGenre} from '../store/action';

export enum ActionType {
  ChangeGenre = 'films/changeGenre',
  ResetGenre = 'films/resetGenre',
  UpdateFilmList = 'films/updateFilmList',
  ResetFilmList = 'films/resetFilmList',
  ShowMoreFilms = 'films/showMoreFilms',
  ResetFilmsPerPage = 'films/resetFilmsPerPage',
}

export type Actions =
  | ReturnType<typeof changeGenre>
  | ReturnType<typeof resetGenre>
  | ReturnType<typeof updateFilmList>
  | ReturnType<typeof resetFilmList>
  | ReturnType<typeof showMoreFilms>
  | ReturnType<typeof resetFilmsPerPage>;
