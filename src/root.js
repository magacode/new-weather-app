import React from 'react';

import ErrorBoundary from './components/error-boundary';
import store from './store/store';
import { Provider } from "react-redux";
import App from './app';

const Root = () => {      
  
    return (
      <ErrorBoundary>
        <Provider store={store}>
          <App />
        </Provider>        
      </ErrorBoundary>      
    );      
  
}

export default Root;