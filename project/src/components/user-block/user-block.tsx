import {AppRoute, AuthorizationStatus} from '../../const';
import {ConnectedProps, connect} from 'react-redux';

import {Link} from 'react-router-dom';
import {State} from '../../types/state';

const mapStateToProps = (state: State) => ({
  authorizationStatus: state.authorizationStatus,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function UserBlock(props: PropsFromRedux): JSX.Element {
  const {authorizationStatus} = props;

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <Link to={AppRoute.MyList}>
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </Link>
          </div>
        </li>
        <li className="user-block__item">
          <Link to={AppRoute.SignIn} className="user-block__link">Sign out</Link>
        </li>
      </ul>
    );
  }

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <Link to={AppRoute.SignIn} className="user-block__link">Sign in</Link>
      </li>
    </ul>
  );
}

export {UserBlock};
export default connector(UserBlock);
