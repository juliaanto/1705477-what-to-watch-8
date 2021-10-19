import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {Film} from '../../types/film';
import AddReviewOrNotFound from '../add-review-or-not-found/add-review-or-not-found';
import FilmOrNotFound from '../film-or-not-found/film-or-not-found';
import MainScreen from '../main-screen/main-screen';
import MyListScreen from '../my-list-screen/my-list-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PlayerOrNotFound from '../player-or-not-found/player-or-not-found';
import PrivateRoute from '../private-route/private-route';
import SignInScreen from '../sign-in-screen/sign-in-screen';

type AppProps = {
  promo: {
    name: string,
    genre: string,
    released: number,
    previewImage: string,
    posterImage: string,
  },
  films: Film[],
}

function App({promo, films}: AppProps): JSX.Element {

  return (

    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainScreen
            promo={promo}
            films={films}
          />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <SignInScreen />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyListScreen films={films}/>}
          authorizationStatus={AuthorizationStatus.Auth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Film}>
          <FilmOrNotFound films={films}/>
        </Route>
        <Route exact path={AppRoute.AddReview}>
          <AddReviewOrNotFound films={films}/>
        </Route>
        <Route exact path={AppRoute.Player}>
          <PlayerOrNotFound films={films}/>
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
