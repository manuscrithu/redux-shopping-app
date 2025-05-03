import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './assets/core/store';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Use createRoot directly instead of an undefined ReactDOM
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
