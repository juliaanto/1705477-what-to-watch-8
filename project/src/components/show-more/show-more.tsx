import { ConnectedProps, connect } from 'react-redux';

import { Actions } from '../../types/action';
import { Dispatch } from 'redux';
import { Films } from '../../types/film';
import { State } from '../../types/state';
import { getFilmsByGenre } from '../../utils/films';
import { showMoreFilms } from '../../store/action';

type ShowMoreProps = {
  films: Films;
  filmsPerPageCount: number;
}

const mapStateToProps = ({DATA, FILMS}: State) => ({
  films: DATA.films,
  filmsPerPageCount: FILMS.filmsPerPageCount,
  genre: FILMS.genre,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onShowMoreFilms() {
    dispatch(showMoreFilms());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & ShowMoreProps;

function ShowMore(props: ConnectedComponentProps): JSX.Element {
  const { films, filmsPerPageCount, genre, onShowMoreFilms } = props;

  if (getFilmsByGenre(genre, films).length > filmsPerPageCount) {
    return (
      <div className="catalog__more">
        <button className="catalog__button" type="button"
          onClick={() => {
            onShowMoreFilms();
          }}
        >
          Show more
        </button>
      </div>
    );
  } else {
    return (
      <div className="catalog__more">
      </div>
    );
  }
}

export { ShowMore };
export default connector(ShowMore);
