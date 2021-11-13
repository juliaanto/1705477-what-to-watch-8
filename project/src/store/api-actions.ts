import {APIRoute, APIRouteById, AuthorizationStatus} from '../const';
import {FilmFromServer, FilmsFromServer} from '../types/film';
import {Token, dropToken, saveToken} from '../services/token';
import {adaptFilmToClient, adaptFilmsToClient} from '../utils/adapter/film';
import {loadFilm, loadFilms, requireAuthorization, requireLogout} from './action';

import {AuthData} from '../types/auth-data';
import {ThunkActionResult} from '../types/action';

export const fetchFilmsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<FilmsFromServer>(APIRoute.Films);
    dispatch(loadFilms(adaptFilmsToClient(data)));
  };

export const fetchCurrentFilmAction = (filmId: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<FilmFromServer>(APIRouteById.FilmById(filmId));
    dispatch(loadFilm(adaptFilmToClient(data)));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  };

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };
