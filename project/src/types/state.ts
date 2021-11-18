import {Film, Films} from './film';

import {AuthorizationStatus} from '../const';
import {RootState} from '../store/root-reducer';

export type FilmData = {
  films: Films,
  currentFilm?: Film,
  isDataLoaded: boolean,
};

export type FilmSearch = {
  genre: string,
  filmsPerPageCount: number,
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  userAvatar: string,
  loginError?: string,
};

export type State = RootState;
