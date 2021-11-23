import {RATING_VALUES} from '../../const';

function RatingList(): JSX.Element {

  return (
    <div className="rating__stars">
      {RATING_VALUES.map((ratingValue: number) =>
        (
          <>
            <input className="rating__input" id={`star-${ratingValue}`} type="radio" name="rating" value={ratingValue}/>
            <label className="rating__label" htmlFor={`star-${ratingValue}`}>Rating {ratingValue}</label>
          </>
        ))}
    </div>
  );
}

export default RatingList;
