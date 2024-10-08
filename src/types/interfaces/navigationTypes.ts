import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MovieDetail } from 'types/interfaces/movieResponseTypes';

export type RootStackParamList = {
  TABS: undefined;
  MOVIE_LIST_SCREEN: undefined;
  FAVORITES_SCREEN: undefined;
  MOVIE_DETAILS_SCREEN: { movieDetail: MovieDetail };
};

export type CustomNavigationProp<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;

export type CustomRouteProp<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;
