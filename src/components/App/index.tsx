import React, { useEffect, useState } from 'react';
import './App.css';
import { PCNav } from '../../partials';
import Router from '../../utils/Router';
import { setupStore } from '../../utils/IDB';

function App() {
  const [isDbSetup, setDbSetup] = useState(false);

  useEffect(() => {
    async function setupIDB() {
      await setupStore();
      setDbSetup(true);
    }

    setupIDB();
  }, [])

  return (
    <div>
      {isDbSetup ?
        <div>
          <PCNav />
          <div className="app-body row">
            <div className="app-content col-12 col-md-9">
              <Router ></Router>
            </div>
          </div>
        </div> :
        <div> Loading...</div >
      }
    </div>

  );
}

export default App;
