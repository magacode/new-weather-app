import React from 'react';
import { Provider } from "react-redux";

import { ErrorBoundary } from './components/error-boundary';
import { App } from './app';
import { store } from './store';

export const Root = () => (
    <ErrorBoundary>
        <Provider store={store}>
            <App />
        </Provider>        
    </ErrorBoundary> 
)
