import {ConnectedProps, connect} from 'react-redux';

import {ThunkAppDispatch} from '../../types/action';
import {changeFavoriteStatusAction} from '../../store/api-actions';
import {useParams} from 'react-router';
import {useState} from 'react';

type MyListButtonProps = {
  isFavorite: boolean;
}

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onFavoriteButtonClick(filmId: number, favoriteStatus: number) {
    dispatch(changeFavoriteStatusAction(filmId, favoriteStatus));
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & MyListButtonProps;

function MyListButton(props: ConnectedComponentProps): JSX.Element {
  const {onFavoriteButtonClick, isFavorite} = props;

  const {id} = useParams<{id: string}>();

  const [favoriteStatus, setFavoriteStatus] = useState(isFavorite);

  const handleClick = () => {
    onFavoriteButtonClick(Number(id), Number(!favoriteStatus));
    setFavoriteStatus(!favoriteStatus);
  };

  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={handleClick}
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={favoriteStatus ? '#in-list' : '#add'}></use>
      </svg>
      <span>My list</span>
    </button>
  );
}

export {MyListButton};
export default connector(MyListButton);
