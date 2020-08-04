import React, { useEffect } from 'react';
import './App.css';
import { Home } from '../index';
import { PCNav } from '../../partials';
import Router from '../../utils/Router';
import { setupStore } from '../../utils/Storage/IDB';

function App() {

  useEffect(() => {
    setupStore();
  }, [])

  return (
    <div>
      <PCNav />
      <div className="app-body row">
        <div className="app-content col-12 col-md-9">
          <Router></Router>
        </div>
      </div>
    </div>
  );
}

export default App;
