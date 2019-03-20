import React from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemerProvider, DepsProvider } from '../utils/providers';
import { Main } from './UI/MainUI';
import Pages from './Pages';
import Routes from './Routes';
import TopBar from './Site/TopBar';
import BotBar from './Site/BotBar';
import GlobalStyle from './GlobalStyle';
import 'intersection-observer';
import '../index.css';

const App: React.FC = () => (
  <ThemerProvider>
    <GlobalStyle />
    <BrowserRouter>
      <Main>
        <Helmet titleTemplate="%s · JMParsons" defaultTitle="JMParsons" />
        <TopBar />
        <DepsProvider>
          <Switch>
            <Route path={Routes.home} exact component={Pages.Home} />
            <Route path={Routes.services} component={Pages.Services} />
            <Route path={Routes.clients} component={Pages.Clients} />
            <Route path={Routes.about} component={Pages.About} />
            <Route path={Routes.contact} component={Pages.Contact} />
            <Route path={Routes.tech} component={Pages.Tech} />
            <Route path={Routes.sitemap} component={Pages.Sitemap} />
            <Route component={Pages.NotFound} />
          </Switch>
        </DepsProvider>
        <BotBar />
      </Main>
    </BrowserRouter>
  </ThemerProvider>
);

export default App;
