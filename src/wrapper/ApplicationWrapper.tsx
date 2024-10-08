import React from 'react';
import AsyncStorageService from 'wrapper/StorageService';
import AppNavigator from 'navigation/AppNavigator';

function ApplicationWrapper(): React.JSX.Element {
  return (
    <>
      <AppNavigator />
      <AsyncStorageService />
    </>
  );
}

export default ApplicationWrapper;
