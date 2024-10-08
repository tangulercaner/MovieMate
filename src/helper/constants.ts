import { MovieType } from 'types/enums/enums';
import { DropdownMenuItem } from 'types/interfaces/componentTypes';

export const NO_IMAGE = 'N/A';

export const IMDB_BASE_LINK = 'https://www.imdb.com/title/';

export const MovieTypeDropdownData: DropdownMenuItem[] = [
  { label: 'All Types', value: 'all' },
  { label: 'Movie', value: MovieType.MOVIE },
  { label: 'Series', value: MovieType.SERIES },
  { label: 'Episode', value: MovieType.EPISODE },
];
