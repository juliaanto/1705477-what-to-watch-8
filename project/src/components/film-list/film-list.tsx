import {Films} from '../../types/film';
import FilmCardScreen from '../film-card-screen/film-card-screen';

type FilmListProps = {
  films: Films;
}

function FilmList(props: FilmListProps): JSX.Element {
  const {films} = props;

  return (
    <div className="catalog__films-list">
      {films.map((film, id) => {
        const keyValue = `${id}`;

        return (
          <FilmCardScreen key={keyValue} film={film} />
        );
      })};
    </div>
  );
}

export default FilmList;
