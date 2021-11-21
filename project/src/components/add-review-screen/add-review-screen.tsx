import {ConnectedProps, connect} from 'react-redux';

import AddReviewForm from '../add-review-form/add-review-form';
import {Link} from 'react-router-dom';
import {Links} from '../../const';
import Logo from '../logo/logo';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {State} from '../../types/state';
import {ThunkAppDispatch} from '../../types/action';
import UserBlock from '../user-block/user-block';
import {fetchCurrentFilmAction} from '../../store/api-actions';
import { getCurrentFilm } from '../../store/film-data/selectors';
import {useEffect} from 'react';
import {useParams} from 'react-router';

const mapStateToProps = (state: State) => ({
  film: getCurrentFilm(state),
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  fetchCurrentFilm(id: number) {
    dispatch(fetchCurrentFilmAction(id));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function AddReviewScreen(props: PropsFromRedux): JSX.Element {
  const {film, fetchCurrentFilm} = props;
  const {id} = useParams<{id: string}>();

  useEffect(() => {
    fetchCurrentFilm(Number(id));
  }, [fetchCurrentFilm, id]);

  if (!film) {
    return <NotFoundScreen />;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Logo />
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={Links.OverviewFilmById(film.id)} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link" href="/">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock />

        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm />
      </div>

    </section>
  );

}

export {AddReviewScreen};
export default connector(AddReviewScreen);
