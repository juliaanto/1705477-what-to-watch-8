import {Link} from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
  return (
    <section>
      <h1>404 Not Found</h1>
      <Link to="/">Вернуться на главную</Link>
    </section>
  );
}

export default NotFoundScreen;
