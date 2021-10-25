import {Link} from 'react-router-dom';
import TabDetails from '../tab-details/tab-details';
import {Film} from '../../types/film';
import {useHistory} from 'react-router';
import TabOverview from '../tab-overview/tab-overview';
import TabReviews from '../tab-reviews/tab-reviews';
import { reviews } from '../../mocks/reviews';

type TabsProps = {
  film: Film;
}

function Tabs(props: TabsProps): JSX.Element {
  const {film} = props;

  const filmReviews = reviews.filter((review) => review.id === film.id);

  const currentPath = useHistory().location.pathname;
  const overviewPath = `/films/${film.id}`;
  const detailsPath = `/films/${film.id}/details`;
  const reviewsPath = `/films/${film.id}/reviews`;

  const renderTab = (path: string) => {
    if (path === detailsPath) {
      return <TabDetails film={film}/>;
    } else if (path === reviewsPath) {
      return <TabReviews reviews={filmReviews}/>;
    } else {
      return <TabOverview film={film}/>;
    }
  };

  const setActiveTab = (path: string) => currentPath === path ? 'film-nav__item--active' : '';

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${setActiveTab(overviewPath)}`}>
            <Link to={overviewPath} className="film-nav__link">Overview</Link>
          </li>
          <li className={`film-nav__item ${setActiveTab(detailsPath)}`}>
            <Link to={detailsPath} className="film-nav__link">Details</Link>
          </li>
          <li className={`film-nav__item ${setActiveTab(reviewsPath)}`}>
            <Link to={reviewsPath} className="film-nav__link">Reviews</Link>
          </li>
        </ul>
      </nav>

      {renderTab(currentPath)}

    </div>
  );
}

export default Tabs;
