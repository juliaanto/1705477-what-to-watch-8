import {useState, MouseEvent} from 'react';
import {Films} from '../../types/film';
import FilmCardScreen from '../film-card-screen/film-card-screen';
import {State} from '../../types/state';
import {connect} from 'react-redux';

type FilmListProps = {
  films: Films;
  filmsPerPageCount: number;
}

const mapStateToProps = (state: State) => ({
  films: state.films,
  filmsPerPageCount: state.filmsPerPageCount,
});

const connector = connect(mapStateToProps, null);

function FilmList(props: FilmListProps): JSX.Element {
  const {films, filmsPerPageCount} = props;

  const [activeCard, setActiveCard] = useState({});

  return (
    <div className="catalog__films-list">
      {films.slice(0, filmsPerPageCount).map((film, id) => {
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
              film={film} isActive={film === activeCard}
            />

          </article>

        );
      })}
    </div>
  );
}

export {FilmList};
export default connector(FilmList);
