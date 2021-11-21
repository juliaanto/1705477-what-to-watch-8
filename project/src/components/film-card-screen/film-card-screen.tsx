import {Film} from '../../types/film';
import {Link} from 'react-router-dom';
import {Links} from '../../const';
import VideoPlayer from '../video-player/video-player';

type FilmCardScreenProps = {
  film: Film;
  isActive: boolean;
}

function FilmCardScreen(props: FilmCardScreenProps): JSX.Element {
  const {film, isActive} = props;
  const {name, previewImage, previewVideoLink} = film;

  return (
    <>
      <Link to={Links.OverviewFilmById(film.id)}>
        <div className="small-film-card__image">
          <VideoPlayer src={previewVideoLink} previewImage={previewImage} muted isActive={isActive}/>
        </div>
      </Link>
      <h3 className="small-film-card__title">
        <Link to={Links.OverviewFilmById(film.id)} className="small-film-card__link">{name}</Link>
      </h3>
    </>
  );
}

export default FilmCardScreen;
