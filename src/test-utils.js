import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import photosReducer from './features/photos/photos.slice';
import suggestionReducer from './features/suggestion/suggestion.slice';
import searchReducer from './features/search/search.slice';

function render(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        photos: photosReducer,
        suggestion: suggestionReducer,
        search: searchReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
