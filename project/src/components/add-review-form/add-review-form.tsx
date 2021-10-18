import {useState, ChangeEvent} from 'react';

const RATING_VALUES = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

type RatingListProps = {
  ratingValues: number[];
}

function RatingList(props: RatingListProps): JSX.Element {
  const {ratingValues} = props;
  const ratingElements = ratingValues.map((ratingValue: number) =>
    (
      <>
        <input className="rating__input" id={`star-${ratingValue}`} type="radio" name="rating" value={ratingValue}/>
        <label className="rating__label" htmlFor={`star-${ratingValue}`}>Rating {ratingValue}</label>
      </>
    ));

  return (
    <div className="rating__stars">
      {ratingElements}
    </div>
  );
}

function AddReviewForm(): JSX.Element {
  const [, setReviewText] = useState('');
  const [, setRatingValue] = useState(0);

  return (
    <form action="#" className="add-review__form">
      <div className="rating"
        onChange={({target}: ChangeEvent<HTMLInputElement>) => {
          setRatingValue(Number(target.value));
        }}
      >
        <RatingList ratingValues={RATING_VALUES}/>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
          onChange={({target}: ChangeEvent<HTMLTextAreaElement>) => {
            setReviewText(target.value);
          }}
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
}

export default AddReviewForm;
