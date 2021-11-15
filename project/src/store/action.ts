import {Film, Films} from '../types/film';

import {ActionType} from '../types/action';
import {AuthorizationStatus} from '../const';

export const changeGenre = (genre: string) => ({
  type: ActionType.ChangeGenre,
  payload: genre,
} as const);

export const resetGenre = () => ({
  type: ActionType.ResetGenre,
} as const);

export const showMoreFilms = () => ({
  type: ActionType.ShowMoreFilms,
} as const);

export const resetFilmsPerPage = () => ({
  type: ActionType.ResetFilmsPerPage,
} as const);

export const loadFilms = (films: Films) => ({
  type: ActionType.LoadFilms,
  payload: {
    films,
  },
} as const);

export const loadFilm = (currentFilm: Film) => ({
  type: ActionType.LoadFilm,
  payload: {
    currentFilm,
  },
} as const);

export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

export const redirectToRoute = (url: string) => ({
  type: ActionType.RedirectToRoute,
  payload: url,
} as const);

export const saveUserAvatar = (userAvatar: string) => ({
  type: ActionType.SaveUserAvatar,
  payload: userAvatar,
} as const);

export const dropUserAvatar = () => ({
  type: ActionType.DropUserAvatar,
} as const);

export const setLoginError = (loginError: string) => ({
  type: ActionType.SetLoginError,
  payload: loginError,
} as const);
