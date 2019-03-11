import React from 'react';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Clients from './Pages/Clients';
import Services from './Pages/Services';
import Routes from '../constants/Routes';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path={Routes.home} exact component={Home} />
      <Route path={Routes.services} component={Services} />
      <Route path={Routes.clients} component={Clients} />
      <Route path={Routes.about} component={About} />
      <Route path={Routes.contact} component={Contact} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
