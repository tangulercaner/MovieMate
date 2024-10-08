import React, { useCallback } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MovieDetailsScreen from 'screens/MovieDetailScreen';
import MovieListScreen from 'screens/MovieListScreen';
import { RootStackParamList } from 'types/interfaces/navigationTypes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoriteMoviesScreen from 'screens/FavoriteMoviesScreen';
import { t } from 'i18next';
import Icons from 'assets/Icons';
import colors from 'styles/colors';

const Tab = createBottomTabNavigator<RootStackParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

const BottomTabNavigator = () => {
  const renderMoviesIcon = useCallback(({ color }: { color: string }) => {
    return <Icons name="movie" fill={color} />;
  }, []);

  const renderFavoritesIcon = useCallback(({ color }: { color: string }) => {
    return <Icons name="heart" fill={color} />;
  }, []);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="MOVIE_LIST_SCREEN"
        component={MovieListScreen}
        options={{
          title: t('movies'),
          tabBarActiveTintColor: colors.coralFlame,
          tabBarInactiveTintColor: colors.dustyGray,
          tabBarIcon: renderMoviesIcon,
        }}
      />
      <Tab.Screen
        name="FAVORITES_SCREEN"
        component={FavoriteMoviesScreen}
        options={{
          title: t('favorite_movies'),
          tabBarActiveTintColor: colors.coralFlame,
          tabBarInactiveTintColor: colors.dustyGray,
          tabBarIcon: renderFavoritesIcon,
        }}
      />
    </Tab.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="TABS">
      <Stack.Screen
        name="TABS"
        component={BottomTabNavigator}
        options={{ headerShown: false, headerBackTitleVisible: false }}
      />
      <Stack.Screen
        name="MOVIE_DETAILS_SCREEN"
        component={MovieDetailsScreen}
        options={{ title: t('movie_detail'), headerBackTitleVisible: false }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
