import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Root from './src/Root';

export default function () {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}
