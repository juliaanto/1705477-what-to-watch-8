import dayjs from 'dayjs';
import {Reviews} from '../../types/review';

type TabReviewsProps = {
  reviews: Reviews;
}

function TabReviews(props: TabReviewsProps): JSX.Element {
  const {reviews} = props;
  const reviewsForFirstColumn = reviews.filter((_, index) => index % 2 === 0);
  const reviewsForSecondColumn = reviews.filter((_, index) => index % 2 !== 0);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">

        {reviewsForFirstColumn.map((review) => (

          <div key={review.id} className="review">
            <blockquote className="review__quote">
              <p className="review__text">{review.comment}</p>

              <footer className="review__details">
                <cite className="review__author">{review.user.name}</cite>
                <time className="review__date" dateTime={dayjs(review.date).format('YYYY-MM-DD')}>{dayjs(review.date).format('MMMM DD, YYYY')}</time>
              </footer>
            </blockquote>

            <div className="review__rating">{review.rating.toLocaleString()}</div>
          </div>
        ))}

      </div>
      <div className="film-card__reviews-col">

        {reviewsForSecondColumn.map((review) => (

          <div key={review.id} className="review">
            <blockquote className="review__quote">
              <p className="review__text">{review.comment}</p>

              <footer className="review__details">
                <cite className="review__author">{review.user.name}</cite>
                <time className="review__date" dateTime={dayjs(review.date).format('YYYY-MM-DD')}>{dayjs(review.date).format('MMMM DD, YYYY')}</time>
              </footer>
            </blockquote>

            <div className="review__rating">{review.rating.toLocaleString()}</div>
          </div>
        ))}

      </div>
    </div>

  );
}

export default TabReviews;
