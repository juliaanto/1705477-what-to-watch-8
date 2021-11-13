import {Film, Films} from './film';

import {AuthorizationStatus} from '../const';

export type State = {
  genre: string,
  films: Films,
  filmsPerPageCount: number,
  currentFilm?: Film,
  isDataLoaded: boolean,
  authorizationStatus: AuthorizationStatus,
};
