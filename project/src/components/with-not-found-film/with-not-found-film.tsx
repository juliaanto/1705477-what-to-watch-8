import NotFoundScreen from '../not-found-screen/not-found-screen';
import {Film} from '../../types/film';
import {useParams} from 'react-router';
import {ComponentType} from 'react';
import {films} from '../../mocks/films';

type HOCProps = {
  film: Film;
};

function withNotFoundFilm<T>(Component: ComponentType<T>)
  : ComponentType<Omit<T, keyof HOCProps>> {

  type ComponentProps = Omit<T, keyof HOCProps>;

  function WithNotFoundFilm(props: ComponentProps): JSX.Element {
    const {id} = useParams<{id: string}>();
    const film: Film | undefined = films.find((element: Film) => element.id === Number(id));

    return (
      film !== undefined ? <Component {...props as T} film={film} /> : <NotFoundScreen />
    );
  }

  return WithNotFoundFilm;
}

export default withNotFoundFilm;
