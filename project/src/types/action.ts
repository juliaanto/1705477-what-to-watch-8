import {
  ThunkAction,
  ThunkDispatch
} from 'redux-thunk';
import {
  AxiosInstance
} from 'axios';
import {State} from '../types/state';

import {changeGenre, showMoreFilms, resetFilmsPerPage, resetGenre, loadFilms} from '../store/action';

export enum ActionType {
  ChangeGenre = 'films/changeGenre',
  ResetGenre = 'films/resetGenre',
  UpdateFilmList = 'films/updateFilmList',
  ResetFilmList = 'films/resetFilmList',
  ShowMoreFilms = 'films/showMoreFilms',
  ResetFilmsPerPage = 'films/resetFilmsPerPage',
  LoadFilms = 'data/loadFilms',
}

export type Actions =
  | ReturnType<typeof changeGenre>
  | ReturnType<typeof resetGenre>
  | ReturnType<typeof showMoreFilms>
  | ReturnType<typeof resetFilmsPerPage>
  | ReturnType<typeof loadFilms>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
