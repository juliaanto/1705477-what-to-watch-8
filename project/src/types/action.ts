import {
  ThunkAction,
  ThunkDispatch
} from 'redux-thunk';
import {
  changeGenre,
  dropUserAvatar,
  loadFilm,
  loadFilms,
  redirectToRoute,
  requireAuthorization,
  requireLogout,
  resetFilmsPerPage,
  resetGenre,
  saveUserAvatar,
  showMoreFilms
} from '../store/action';

import {
  AxiosInstance
} from 'axios';
import {State} from '../types/state';

export enum ActionType {
  ChangeGenre = 'films/changeGenre',
  ResetGenre = 'films/resetGenre',
  UpdateFilmList = 'films/updateFilmList',
  ResetFilmList = 'films/resetFilmList',
  ShowMoreFilms = 'films/showMoreFilms',
  ResetFilmsPerPage = 'films/resetFilmsPerPage',
  LoadFilms = 'data/loadFilms',
  LoadFilm = 'data/loadFilm',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  RedirectToRoute = 'films/redirectToRoute',
  SaveUserAvatar = 'data/saveUserAvatar',
  DropUserAvatar = 'data/dropUserAvatar',
}

export type Actions =
  | ReturnType<typeof changeGenre>
  | ReturnType<typeof resetGenre>
  | ReturnType<typeof showMoreFilms>
  | ReturnType<typeof resetFilmsPerPage>
  | ReturnType<typeof loadFilms>
  | ReturnType<typeof loadFilm>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof redirectToRoute>
  | ReturnType<typeof saveUserAvatar>
  | ReturnType<typeof dropUserAvatar>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
