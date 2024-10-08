import React from 'react';
import './src/locales/i18n';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import ApplicationWrapper from 'wrapper/ApplicationWrapper';

const App = (): React.JSX.Element => {
  return (
    <Provider store={store}>
      <ApplicationWrapper />
    </Provider>
  );
};

export default App;
