import {APIRouteById, AuthorizationStatus, Links} from '../../const';
import {ConnectedProps, connect} from 'react-redux';
import { Films, FilmsFromServer } from '../../types/film';
import {useEffect, useState} from 'react';

import FilmList from '../film-list/film-list';
import {Link} from 'react-router-dom';
import Logo from '../logo/logo';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {State} from '../../types/state';
import Tabs from '../tabs/tabs';
import {ThunkAppDispatch} from '../../types/action';
import UserBlock from '../user-block/user-block';
import { adaptFilmsToClient } from '../../utils/adapter/film';
import api from '../../services/api';
import {fetchCurrentFilmAction} from '../../store/api-actions';
import {useParams} from 'react-router';

const SIMILAR_FILMS_COUNT = 4;

const mapStateToProps = ({DATA, FILMS, USER}: State) => ({
  filmsPerPageCount: FILMS.filmsPerPageCount,
  film: DATA.currentFilm,
  authorizationStatus: USER.authorizationStatus,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  fetchCurrentFilm(id: number) {
    dispatch(fetchCurrentFilmAction(id));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function FilmScreen(props: PropsFromRedux): JSX.Element {
  const {film, filmsPerPageCount, fetchCurrentFilm, authorizationStatus} = props;
  const {id} = useParams<{id: string}>();

  const [appState, setAppState] = useState<Films>([]);

  useEffect(() => {
    api.get<FilmsFromServer>(APIRouteById.SimilarFilmsById(Number(id))).then((response) => setAppState(adaptFilmsToClient(response.data)));
    fetchCurrentFilm(Number(id));
  }, [fetchCurrentFilm, id, setAppState]);

  const similarFilms = appState.slice(0, SIMILAR_FILMS_COUNT);

  if (!film) {
    return <NotFoundScreen />;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <div className="logo">
              <Logo />
            </div>

            <UserBlock />

          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={Links.PlayerById(film.id)} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                {authorizationStatus === AuthorizationStatus.Auth ?
                  <Link to={Links.AddReviewByFilmId(film.id)} className="btn film-card__button">Add review</Link>
                  : ''}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
            </div>

            <Tabs film={film}/>

          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmList films={similarFilms} filmsPerPageCount={filmsPerPageCount}/>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );

}

export {FilmScreen};
export default connector(FilmScreen);
