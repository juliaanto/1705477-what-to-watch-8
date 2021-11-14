import {APIRoute, APIRouteById, AppRoute, AuthorizationStatus} from '../const';
import {FilmFromServer, FilmsFromServer} from '../types/film';
import {adaptFilmToClient, adaptFilmsToClient} from '../utils/adapter/film';
import {dropToken, saveToken} from '../services/token';
import {dropUserAvatar, loadFilm, loadFilms, redirectToRoute, requireAuthorization, requireLogout, saveUserAvatar} from './action';

import {AuthData} from '../types/auth-data';
import {AuthInfoFromServer} from '../types/auth-info';
import {ThunkActionResult} from '../types/action';
import {adaptAuthInfoToClient} from '../utils/adapter/auth-info';

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
    const dataFromServer = await api.post<AuthInfoFromServer>(APIRoute.Login, {email, password});
    const adaptedAuthInfo = adaptAuthInfoToClient(dataFromServer.data);
    saveToken(adaptedAuthInfo.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
    dispatch(saveUserAvatar(adaptedAuthInfo.avatarUrl));
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
    dispatch(dropUserAvatar());
  };
