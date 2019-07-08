import React from 'react';
import './App.css';
import Navigation from './components/navigation'

import { Provider } from 'react-redux'
import store from './js/store/store'

function App() {
  return (
    <Provider store={store}>
        <div className="App">
          <Navigation />
        </div>
    </Provider>
  );
}

export default App;
