import {ALL_GENRES, AppRoute} from '../../const';
import {Films} from '../../types/film';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';
import {Link} from 'react-router-dom';
import {Dispatch} from 'redux';
import {Actions} from '../../types/action';
import {changeGenre, updateFilmList} from '../../store/action';
import {getFilmsByGenre} from '../../utils/films';
import {films as initialFilmList} from '../../mocks/films';
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
  onUpdateFilmList(films: Films) {
    dispatch(updateFilmList(films));
  },
  onResetFilmsPerPage() {
    dispatch(resetFilmsPerPage());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & GenreListProps;

function GenreList(props: ConnectedComponentProps): JSX.Element {
  const {genre, onChangeGenre, onUpdateFilmList, onResetFilmsPerPage} = props;

  const genresFromFilms = (allFilms: Films): string[] => [...new Set(allFilms.map((film) => film.genre))];
  const genresList = [ALL_GENRES, ...genresFromFilms(initialFilmList)];

  return (
    <ul className="catalog__genres-list">
      {genresList.map((item, id) => {
        const keyValue = `${id}`;

        return (
          <li key={keyValue} className={`catalog__genres-item ${genre === item ? 'catalog__genres-item--active' : ''} `}
            onClick={() => {
              onChangeGenre(item);
              onUpdateFilmList(getFilmsByGenre(item));
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
