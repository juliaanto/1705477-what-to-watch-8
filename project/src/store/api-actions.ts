import {APIRoute, APIRouteById} from '../const';
import {FilmFromServer, FilmsFromServer} from '../types/film';
import {adaptFilmToClient, adaptFilmsToClient} from '../utils/adapter/film';
import {loadFilm, loadFilms} from './action';

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
