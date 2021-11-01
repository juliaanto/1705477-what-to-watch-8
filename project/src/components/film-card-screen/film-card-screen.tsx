import {Link} from 'react-router-dom';
import {Film} from '../../types/film';
import VideoPlayer from '../video-player/video-player';
import {Dispatch} from 'redux';
import {Actions} from '../../types/action';
import {updateFilmList} from '../../store/action';
import {Films} from '../../types/film';
import {connect, ConnectedProps} from 'react-redux';
import {getSimilarFilms} from '../../utils/films';
import {Links} from '../../const';

type FilmCardScreenProps = {
  film: Film;
  isActive: boolean;
}

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onUpdateFilmList(films: Films) {
    dispatch(updateFilmList(films));
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & FilmCardScreenProps;

function FilmCardScreen(props: ConnectedComponentProps): JSX.Element {
  const {film, isActive, onUpdateFilmList} = props;
  const {name, previewImage, previewVideoLink} = film;

  return (
    <>
      <Link to={Links.OverviewFilmById(film.id)}
        onClick={() => {
          onUpdateFilmList(getSimilarFilms(film));
        }}
      >
        <div className="small-film-card__image">
          <VideoPlayer src={previewVideoLink} previewImage={previewImage} autoPlay={false} muted isActive={isActive}/>
        </div>
      </Link>
      <h3 className="small-film-card__title">
        <Link to={Links.OverviewFilmById(film.id)} className="small-film-card__link">{name}</Link>
      </h3>
    </>
  );
}

export {FilmCardScreen};
export default connector(FilmCardScreen);
