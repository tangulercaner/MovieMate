import { useNavigation } from '@react-navigation/native';
import { t } from 'i18next';
import { CustomNavigationProp } from 'types/interfaces/navigationTypes';
import { useState } from 'react';
import { Alert } from 'react-native';
import { movieService } from 'services/MovieService';
import { RequestSuccess } from 'types/enums/enums';
import { Movie } from 'types/interfaces/movieResponseTypes';

type MovieListScreenNavigationProp = CustomNavigationProp<'MOVIE_LIST_SCREEN'>;

interface IReturnType {
  navigateToMovieDetails: (movie: Movie) => Promise<void>;
  movieDetailIsLoading: boolean;
}

const useGetMovieDetails = (): IReturnType => {
  const navigation = useNavigation<MovieListScreenNavigationProp>();

  const [movieDetailIsLoading, setMovieDetailIsLoading] =
    useState<boolean>(false);

  const navigateToMovieDetails = async (movie: Movie) => {
    const { imdbID } = movie;
    setMovieDetailIsLoading(true);
    try {
      const response = await movieService.getMovieDetail({ i: imdbID });
      if (response.Response === RequestSuccess.TRUE) {
        navigation.navigate('MOVIE_DETAILS_SCREEN', { movieDetail: response });
      } else {
        throw new Error();
      }
    } catch (error) {
      Alert.alert(t('something_went_wrong'));
    } finally {
      setMovieDetailIsLoading(false);
    }
  };

  return {
    navigateToMovieDetails,
    movieDetailIsLoading,
  };
};

export default useGetMovieDetails;
