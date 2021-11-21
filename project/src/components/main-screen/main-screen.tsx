import {ConnectedProps, connect} from 'react-redux';
import {Links, promoId} from '../../const';
import {getFilms, getPromo} from '../../store/film-data/selectors';
import {getFilmsPerPageCount, getGenre} from '../../store/film-search/selectors';

import FilmList from '../film-list/film-list';
import GenreList from '../genre-list/genre-list';
import {Link} from 'react-router-dom';
import LoadingScreen from '../loading-screen/loading-screen';
import Logo from '../logo/logo';
import MyListButton from '../my-list-button/my-list-button';
import ShowMore from '../show-more/show-more';
import {State} from '../../types/state';
import UserBlock from '../user-block/user-block';
import {getFilmsByGenre} from '../../utils/films';

const mapStateToProps = (state: State) => ({
  genre: getGenre(state),
  films: getFilms(state),
  filmsPerPageCount: getFilmsPerPageCount(state),
  promo: getPromo(state),
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function MainScreen(props: PropsFromRedux): JSX.Element {
  const {genre, films, filmsPerPageCount, promo} = props;

  if (!promo) {
    return <LoadingScreen />;
  }

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promo.previewImage} alt={promo.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <Logo />
          </div>

          <UserBlock />

        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promo.posterImage} alt={`${promo.name} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promo.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promo.genre}</span>
                <span className="film-card__year">{promo.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={Links.PlayerById(promoId)} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>

                <MyListButton isFavorite={promo.isFavorite}/>

              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList />

          <FilmList films={getFilmsByGenre(genre, films)} filmsPerPageCount={filmsPerPageCount}/>

          <ShowMore />

        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light" href="/">
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

export {MainScreen};
export default connector(MainScreen);

