import {ALL_GENRES} from '../../const';
import {Films} from '../../types/film';
import {connect} from 'react-redux';
import {State} from '../../types/state';

type GenreListProps = {
  genre: string;
  films: Films;
}

const mapStateToProps = (state: State) => ({
  genre: state.genre,
  films: state.films,
});

const connector = connect(mapStateToProps, null);

function GenreList(props: GenreListProps): JSX.Element {
  const {genre, films} = props;

  const genresFromFilms = (allFilms: Films): string[] => [...new Set(allFilms.map((film) => film.genre))];
  const genresList = [ALL_GENRES, ...genresFromFilms(films)];

  return (
    <ul className="catalog__genres-list">
      {genresList.map((item, id) => {
        const keyValue = `${id}`;

        return (
          <li key={keyValue} className={`catalog__genres-item ${genre === item ? 'catalog__genres-item--active' : ''} `}>
            <a href="/" className="catalog__genres-link">{item}</a>
          </li>
        );
      })}
    </ul>
  );
}

export {GenreList};
export default connector(GenreList);
