import {useParams} from 'react-router';
import {Film, Films} from '../../types/film';
import FilmScreen from '../film-screen/film-screen';

import NotFoundScreen from '../not-found-screen/not-found-screen';

type FilmOrNotFoundProps = {
  films: Films;
}

function FilmOrNotFound(props: FilmOrNotFoundProps): JSX.Element {
  const {films} = props;
  const {id} = useParams<{id: string}>();
  const film: Film | undefined = films.find((element) => element.id === Number(id));

  return (
    film !== undefined ? <FilmScreen film={film} /> : <NotFoundScreen />
  );
}

export default FilmOrNotFound;
