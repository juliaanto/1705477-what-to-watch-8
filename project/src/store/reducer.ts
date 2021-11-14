import {ALL_GENRES, AuthorizationStatus, FILMS_PER_PAGE_COUNT} from '../const';
import {ActionType, Actions} from '../types/action';

import {State} from '../types/state';

const initialState = {
  genre: ALL_GENRES,
  films: [],
  filmsPerPageCount: FILMS_PER_PAGE_COUNT,
  film: {},
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  userAvatar: '',
  loginError: undefined,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return {...state, genre: action.payload};
    case ActionType.ResetGenre:
      return {...state, genre: ALL_GENRES};
    case ActionType.ShowMoreFilms:
      return {...state, filmsPerPageCount: state.filmsPerPageCount + FILMS_PER_PAGE_COUNT};
    case ActionType.ResetFilmsPerPage:
      return {...state, filmsPerPageCount: FILMS_PER_PAGE_COUNT};
    case ActionType.LoadFilms: {
      const {films} = action.payload;
      return {...state, films, isDataLoaded: true};
    }
    case ActionType.LoadFilm: {
      const {currentFilm} = action.payload;
      return {...state, currentFilm};
    }
    case ActionType.RequireAuthorization:
      return {...state, authorizationStatus: action.payload};
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};
    case ActionType.SaveUserAvatar:
      return {...state, userAvatar: action.payload};
    case ActionType.DropUserAvatar:
      return {...state, userAvatar: ''};
    case ActionType.SetLoginError:
      return {...state, loginError: action.payload};
    default:
      return state;
  }
};

export {reducer};
