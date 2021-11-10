import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import AddReviewScreen from '../add-review-screen/add-review-screen';
import FilmScreen from '../film-screen/film-screen';
import MainScreen from '../main-screen/main-screen';
import MyListScreen from '../my-list-screen/my-list-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PlayerScreen from '../player-screen/player-screen';
import PrivateRoute from '../private-route/private-route';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';
import LoadingScreen from '../loading-screen/loading-screen';

const mapStateToProps = (state: State) => ({
  isDataLoaded: state.isDataLoaded,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App(props: PropsFromRedux): JSX.Element {
  const {isDataLoaded} = props;

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (

    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainScreen/>
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <SignInScreen />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyListScreen />}
          authorizationStatus={AuthorizationStatus.Auth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.AddReview}>
          <AddReviewScreen />
        </Route>
        <Route path={AppRoute.Film}>
          <FilmScreen />
        </Route>
        <Route exact path={AppRoute.Player}>
          <PlayerScreen />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export {App};
export default connector(App);
