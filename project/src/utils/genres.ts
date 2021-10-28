import {Films} from '../types/film';

export const getAllGenres = (films: Films): string[] => [...new Set(films.map((film) => film.genre))];
