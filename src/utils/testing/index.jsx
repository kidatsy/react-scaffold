/* eslint-disable import/no-extraneous-dependencies */
// Adapted from https://redux.js.org/usage/writing-tests#components
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from './userSlice';

const render = (
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        users: userReducer,
      },
      preloadedState,
      middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
          ignoredActionPaths: ['request'],
        },
      }),
    }),
    ...renderOptions
  } = {},
) => {
  // eslint-disable-next-line react/prop-types
  const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from '@testing-library/react';
export { render };
