import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from 'navigation/MainNavigator';

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
