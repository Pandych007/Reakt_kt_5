import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Cart from './Cart';

const App = () => {
  return (
    <Provider store={store}>
      <Cart />
    </Provider>
  );
};

export default App;

