import {APIRoute} from '../const';
import {ThunkActionResult} from '../types/action';
import {FilmsFromServer} from '../types/film';
import { adaptFilmsToClient } from '../utils/adapter';
import {loadFilms} from './action';

export const fetchFilmsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<FilmsFromServer>(APIRoute.Films);
    dispatch(loadFilms(adaptFilmsToClient(data)));
  };
