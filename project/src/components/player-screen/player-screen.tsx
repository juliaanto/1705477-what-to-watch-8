import {ConnectedProps, connect} from 'react-redux';

import {Link} from 'react-router-dom';
import {Links} from '../../const';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {State} from '../../types/state';
import {ThunkAppDispatch} from '../../types/action';
import {fetchCurrentFilmAction} from '../../store/api-actions';
import { useEffect } from 'react';
import {useParams} from 'react-router';

const mapStateToProps = (state: State) => ({
  film: state.currentFilm,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  fetchCurrentFilm(id: number) {
    dispatch(fetchCurrentFilmAction(id));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function PlayerScreen(props: PropsFromRedux): JSX.Element {
  const {film, fetchCurrentFilm} = props;
  const {id} = useParams<{id: string}>();

  useEffect(() => {
    fetchCurrentFilm(Number(id));
  }, [fetchCurrentFilm, id]);

  const playerStyle = {
    left: '30%',
  };

  if (!film) {
    return <NotFoundScreen />;
  }

  return (
    <div className="player">
      <video src={film.videoLink} className="player__video" poster={film.posterImage}></video>

      <Link to={Links.OverviewFilmById(film.id)} type="button" className="player__exit">Exit</Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={playerStyle}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{film.name}</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );

}

export {PlayerScreen};
export default connector(PlayerScreen);
