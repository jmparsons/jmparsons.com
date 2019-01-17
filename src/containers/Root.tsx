import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Main';
import NotFound from '../components/NotFound';
import Contact from './Contact';
import About from './About';
import Clients from './Clients';
import Services from './Services';

const Root = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/services" component={Services} />
      <Route path="/clients" component={Clients} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Root;
