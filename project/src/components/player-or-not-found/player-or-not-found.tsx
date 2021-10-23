import {useParams} from 'react-router';
import {Film, Films} from '../../types/film';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PlayerScreen from '../player-screen/player-screen';

type PlayerOrNotFoundProps = {
  films: Films;
}

function PlayerOrNotFound(props: PlayerOrNotFoundProps): JSX.Element {
  const {films} = props;
  const {id} = useParams<{id: string}>();
  const film: Film | undefined = films.find((element) => element.id === Number(id));

  return (
    film !== undefined ? <PlayerScreen film={film} /> : <NotFoundScreen />
  );
}

export default PlayerOrNotFound;
