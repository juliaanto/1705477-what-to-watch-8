import NotFoundScreen from '../../components/not-found-screen/not-found-screen';
import {Film} from '../../types/film';
import {useParams} from 'react-router';
import {films} from '../../mocks/films';

const allFilms = films;

type WithNotFoundProps = {
  render: (film: Film) => JSX.Element;
}

function WithNotFound(props: WithNotFoundProps): JSX.Element {
  const {render} = props;
  const {id} = useParams<{id: string}>();
  const film: Film | undefined = allFilms.find((element: Film) => element.id === Number(id));

  return (
    film !== undefined ? render(film) : <NotFoundScreen />
  );
}

export default WithNotFound;
