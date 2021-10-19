import {useParams} from 'react-router';
import {Film, Films} from '../../types/film';
import AddReviewScreen from '../add-review-screen/add-review-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';

type AddReviewOrNotFoundProps = {
  films: Films;
}

function AddReviewOrNotFound(props: AddReviewOrNotFoundProps): JSX.Element {
  const {films} = props;
  const {id} = useParams<{id: string}>();
  const film: Film | undefined = films.find((element) => element.id === Number(id));

  return (
    film !== undefined ? <AddReviewScreen film={film} /> : <NotFoundScreen />
  );
}

export default AddReviewOrNotFound;
