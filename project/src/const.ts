export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
}

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
  PlayerById: ((id: number): string => `/player/${id}`),
};

export const ALL_GENRES = 'All genres';
