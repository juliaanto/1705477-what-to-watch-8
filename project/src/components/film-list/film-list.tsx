import {useState} from 'react';
import {Films} from '../../types/film';
import FilmCardScreen from '../film-card-screen/film-card-screen';
import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';
import {getSimilarFilms} from '../../utils/films';
import {Dispatch} from 'redux';
import {Actions} from '../../types/action';
import {updateFilmList} from '../../store/action';

type FilmListProps = {
  films: Films;
  filmsPerPageCount: number;
}

const mapStateToProps = (state: State) => ({
  films: state.films,
  filmsPerPageCount: state.filmsPerPageCount,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onUpdateFilmList(films: Films) {
    dispatch(updateFilmList(films));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & FilmListProps;

function FilmList(props: ConnectedComponentProps): JSX.Element {
  const {films, filmsPerPageCount, onUpdateFilmList} = props;

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
            onClick={() => {
              onUpdateFilmList(getSimilarFilms(film));
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
