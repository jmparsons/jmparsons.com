import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './Pages/Main';
import NotFound from './Pages/NotFound';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Clients from './Pages/Clients';
import Services from './Pages/Services';
import Routes from '../constants/Routes';

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path={Routes.main} exact component={Main} />
      <Route path={Routes.services} component={Services} />
      <Route path={Routes.clients} component={Clients} />
      <Route path={Routes.about} component={About} />
      <Route path={Routes.contact} component={Contact} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
