type FilmCardScreenProps = {
  film: {
    name: string,
    previewImage: string
  }
}

function FilmCardScreen(props: FilmCardScreenProps): JSX.Element {
  const {film} = props;
  const {name, previewImage} = film;

  return (
    <>
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{name}</a>
      </h3>
    </>
  );
}

export default FilmCardScreen;
