import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import './index.css';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from 'Redux/Store';
import { PersistGate } from 'redux-persist/es/integration/react';
//ReactDOM.render(<App />, document.querySelector('#root'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-08-phonebook/">
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <App />
        </Provider>
      </PersistGate>
    </BrowserRouter>
  </React.StrictMode>
);
