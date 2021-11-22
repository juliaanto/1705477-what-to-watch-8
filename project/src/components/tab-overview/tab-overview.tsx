import {Film} from '../../types/film';
import { getRatingText } from '../../utils/films';

type TabOverviewProps = {
  film: Film;
}

function TabOverview(props: TabOverviewProps): JSX.Element {
  const {film} = props;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingText(film.rating)}</span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>


        <p className="film-card__director"><strong>Director: {film.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {(film.starring).join(', ')} and other</strong></p>
      </div>
    </>
  );
}

export default TabOverview;
