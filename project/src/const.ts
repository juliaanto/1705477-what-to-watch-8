export enum AppRoute {
  Main = '/1705477-what-to-watch-8',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '/notfound'
}

export enum APIRoute {
  Films = '/films',
  Promo = '/promo',
  Login = '/login',
  Logout = '/logout',
  Favorite = '/favorite',
}

export const APIRouteById = {
  FilmById: ((id: number): string => `/films/${id}`),
  CommentsByFilmId: ((filmId: number): string => `/comments/${filmId}`),
  SimilarFilmsById: ((filmId: number): string => `/films/${filmId}/similar`),
  CommentPostByFilmId: ((filmId: number): string => `/comments/${filmId}`),
  ChangeFavoriteStatusByFilmId: ((filmId: number, status: number): string => `/favorite/${filmId}/${status}`),
};

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const Links = {
  OverviewFilmById: ((id: number): string => `/films/${id}`),
  DetailsFilmById: ((id: number): string => `/films/${id}/details`),
  ReviewsFilmById: ((id: number): string => `/films/${id}/reviews`),
  AddReviewByFilmId: ((id: number): string => `/films/${id}/review`),
  PlayerById: ((id: number | string): string => `/player/${id}`),
};

export const ALL_GENRES = 'All genres';

export const FILMS_PER_PAGE_COUNT = 8;

export const PROMO_ID = 'promo';

export const GENRES_COUNT = 9;

export enum RatingText {
  Bad = 'Bad',
  Normal = 'Normal',
  Good = 'Good',
  VeryGood = 'Very good',
  Awesome = 'Awesome',
}

export enum RatingBoundaryValue {
  Bad = 3,
  Normal = 5,
  Good = 8,
  VeryGood = 10,
}

export const RATING_VALUES = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

export enum ReviewTextLength {
  Min = 50,
  Max = 400,
}
