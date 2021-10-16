import {Link} from 'react-router-dom';
import {Film} from '../../types/film';

type FilmCardScreenProps = {
  film: Film;
}

function FilmCardScreen(props: FilmCardScreenProps): JSX.Element {
  const {film} = props;
  const {name, previewImage} = film;

  return (
    <>
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${film.id}`} className="small-film-card__link">{name}</Link>
      </h3>
    </>
  );
}

export default FilmCardScreen;
