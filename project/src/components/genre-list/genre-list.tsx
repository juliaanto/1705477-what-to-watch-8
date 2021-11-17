import {ALL_GENRES, AppRoute} from '../../const';
import {ConnectedProps, connect} from 'react-redux';

import {Actions} from '../../types/action';
import {Dispatch} from 'redux';
import {Films} from '../../types/film';
import {Link} from 'react-router-dom';
import {State} from '../../types/state';
import {changeGenre} from '../../store/action';
import {resetFilmsPerPage} from '../../store/action';

type GenreListProps = {
  genre: string;
}

const mapStateToProps = (state: State) => ({
  genre: state.genre,
  films: state.films,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onChangeGenre(genre: string) {
    dispatch(changeGenre(genre));
  },
  onResetFilmsPerPage() {
    dispatch(resetFilmsPerPage());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & GenreListProps;

function GenreList(props: ConnectedComponentProps): JSX.Element {
  const {genre, films, onChangeGenre, onResetFilmsPerPage} = props;

  const genresFromFilms = (allFilms: Films): string[] => [...new Set(allFilms.map((film) => film.genre))];
  const genresList = [ALL_GENRES, ...genresFromFilms(films)];

  return (
    <ul className="catalog__genres-list">
      {genresList.map((item, id) => {
        const keyValue = `${id}`;

        return (
          <li key={keyValue} className={`catalog__genres-item ${genre === item ? 'catalog__genres-item--active' : ''} `}
            onClick={() => {
              onChangeGenre(item);
              onResetFilmsPerPage();
            }}
          >
            <Link to={AppRoute.Main} className="catalog__genres-link">{item}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export {GenreList};
export default connector(GenreList);
