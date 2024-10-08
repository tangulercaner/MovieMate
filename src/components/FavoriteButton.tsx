import CustomButton from 'components/CustomButton';
import { t } from 'i18next';
import React, { useState } from 'react';

interface Props {
  isFavoriteInitially: boolean;
  onFavoritePressed: () => void;
  onUnfavoritePressed: () => void;
}

const FavoriteButton = ({
  isFavoriteInitially,
  onFavoritePressed,
  onUnfavoritePressed,
}: Props) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(isFavoriteInitially);
  const onPressFavorite = () => {
    if (isFavorite) {
      onUnfavoritePressed();
    } else {
      onFavoritePressed();
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <CustomButton
      onPress={onPressFavorite}
      title={isFavorite ? t('remove_from_favorites') : t('add_to_favorites')}
    />
  );
};

export default FavoriteButton;
