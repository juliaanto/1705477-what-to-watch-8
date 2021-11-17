import FilmCardScreen from '../film-card-screen/film-card-screen';
import {Films} from '../../types/film';
import {useState} from 'react';

type FilmListProps = {
  films: Films;
  filmsPerPageCount: number;
}

function FilmList(props: FilmListProps): JSX.Element {
  const {films, filmsPerPageCount} = props;

  const [activeCard, setActiveCard] = useState({});

  return (
    <div className="catalog__films-list">
      {films.slice(0, filmsPerPageCount).map((film, id) => {
        const keyValue = `${id}`;

        return (

          <article key={keyValue} className="small-film-card catalog__films-card"
            onMouseEnter={() => {
              setActiveCard(film);
            }}
            onMouseLeave={() => {
              setActiveCard([{}]);
            }}
          >
            <FilmCardScreen
              film={film} isActive={film === activeCard}
            />

          </article>

        );
      })}
    </div>
  );
}

export default FilmList;
