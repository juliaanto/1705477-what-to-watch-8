import {ConnectedProps, connect} from 'react-redux';

import FilmList from '../film-list/film-list';
import Logo from '../logo/logo';
import {State} from '../../types/state';
import UserBlock from '../user-block/user-block';
import {getFavoriteFilms} from '../../utils/films';
import {getFilms} from '../../store/film-data/selectors';

const mapStateToProps = (state: State) => ({
  films: getFilms(state),
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function MyListScreen(props: PropsFromRedux): JSX.Element {
  const {films} = props;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Logo />
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock />

      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmList films={getFavoriteFilms(films)} filmsPerPageCount={films.length}/>

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
  );
}

export {MyListScreen};
export default connector(MyListScreen);
