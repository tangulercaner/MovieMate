import MovieListItem from 'components/MovieList/MovieListItem';
import React, { RefObject } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { Movie } from 'types/interfaces/movieResponseTypes';

interface Props<T extends Movie> {
  movies: T[];
  onEndReached?: () => void;
  onMovieItemPressed: (movie: T) => void;
  listEmptyComponent?: JSX.Element;
  flatListRef?: RefObject<FlatList>;
}

const MovieList = <T extends Movie>({
  movies,
  onEndReached,
  onMovieItemPressed,
  listEmptyComponent,
  flatListRef,
}: Props<T>) => {
  const onPressItem = (movie: T) => () => {
    onMovieItemPressed(movie);
  };
  const keyExtractor = (item: T) => item.imdbID;

  const renderItem = ({ item }: { item: T }) => {
    return <MovieListItem item={item} onPress={onPressItem(item)} />;
  };

  const renderItemSeperatorComponent = () => <ItemSeperator />;

  return (
    <FlatList
      ref={flatListRef}
      data={movies}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      onEndReached={onEndReached}
      onEndReachedThreshold={0}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={renderItemSeperatorComponent}
      ListEmptyComponent={listEmptyComponent}
      contentContainerStyle={styles.contentContainerStyle}
    />
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: { flexGrow: 1, paddingVertical: 12 },
});

export default MovieList;

const ItemSeperator = styled.View`
  height: 24px;
`;
