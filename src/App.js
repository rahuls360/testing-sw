import React, { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import './App.css';
const Home = React.lazy(() => import('./Home'));
const Page1 = React.lazy(() => import('./Page1'));
const Page2 = React.lazy(() => import('./Page2'));

const App = () => {
  const history = useHistory();

  useEffect(() => {
    history.listen((location, action) => {
      // check for sw updates on page change
      navigator.serviceWorker
        .getRegistrations()
        .then((regs) => regs.forEach((reg) => reg.update()));
    });
  }, []);

  const handleUpdateServiceWorker = () => {
    navigator.serviceWorker
      .getRegistrations()
      .then((regs) => regs.forEach((reg) => {
        reg.waiting.postMessage({ type: "SKIP_WAITING" });
      }));
  };

  return (
    <React.Suspense fallback='loading...'>
      <div id='new-updates'>
        There is a new version available.{' '}
        <button onClick={handleUpdateServiceWorker}>Update</button>
      </div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/page1' component={Page1} />
        <Route path='/page2' component={Page2} />
      </Switch>
    </React.Suspense>
  );
};

export default App;
