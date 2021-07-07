import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Menu from '../components/layout/Menu';
import Content from '../components/layout/Content';

import './App.css';

import DataContext, { data } from '../data/DataContext';

function App() {
  const [state, setState] = useState(data);
  return (
    <DataContext.Provider value={{ state, setState }}>
      <div className="App">
        <Router>
          <Menu />
          <Content />
        </Router>
      </div>
    </DataContext.Provider>
  );
}

export default App;
