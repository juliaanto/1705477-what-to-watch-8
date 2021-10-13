import {useState, MouseEvent} from 'react';
import {Films} from '../../types/film';
import FilmCardScreen from '../film-card-screen/film-card-screen';

type FilmListProps = {
  films: Films;
}

function FilmList(props: FilmListProps): JSX.Element {
  const {films} = props;

  const [, setActiveCard] = useState({});

  return (
    <div className="catalog__films-list">
      {films.map((film, id) => {
        const keyValue = `${id}`;

        return (
          <article key={keyValue} className="small-film-card catalog__films-card"
            onMouseEnter={({target}: MouseEvent<HTMLElement>) => {
              setActiveCard(film);
            }}
            onMouseLeave={({target}: MouseEvent<HTMLElement>) => {
              setActiveCard([{}]);
            }}
          >
            <FilmCardScreen
              film={film}
            />
          </article>
        );
      })};
    </div>
  );
}

export default FilmList;
