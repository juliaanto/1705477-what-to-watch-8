import {ALL_GENRES, FILMS_PER_PAGE_COUNT} from '../../const';
import {ActionType, Actions} from '../../types/action';

import {FilmSearch} from '../../types/state';

const initialState: FilmSearch = {
  genre: ALL_GENRES,
  filmsPerPageCount: FILMS_PER_PAGE_COUNT,
};


const filmSearch = (state = initialState, action: Actions): FilmSearch => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return {...state, genre: action.payload};
    case ActionType.ResetGenre:
      return {...state, genre: ALL_GENRES};
    case ActionType.ShowMoreFilms:
      return {...state, filmsPerPageCount: state.filmsPerPageCount + FILMS_PER_PAGE_COUNT};
    case ActionType.ResetFilmsPerPage:
      return {...state, filmsPerPageCount: FILMS_PER_PAGE_COUNT};
    default:
      return state;
  }
};

export {filmSearch};
