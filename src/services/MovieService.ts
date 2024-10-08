import { Movie, MovieDetail } from 'types/interfaces/movieResponseTypes';
import { networkService } from './NetworkService';
import {
  FetchMovieDetailRequest,
  FetchMoviesRequest,
} from 'types/interfaces/movieRequestTypes';
import { ApiResponse } from 'types/interfaces/networkTypes';

class MovieService {
  public async getMovies(
    requestData: FetchMoviesRequest,
  ): Promise<ApiResponse<Movie>> {
    const data = await networkService.get<ApiResponse<Movie>>('/', requestData);
    return data;
  }

  public async getMovieDetail(
    requestData: FetchMovieDetailRequest,
  ): Promise<MovieDetail> {
    const data = await networkService.get<MovieDetail>('/', requestData);
    return data;
  }
}

export const movieService = new MovieService();
