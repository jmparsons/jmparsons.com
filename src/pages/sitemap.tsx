import React from 'react';
import Helmet from 'react-helmet';
import LayoutsMain from '../components/Layouts/LayoutsMain';
import Routes from '../components/Routes';
import { Link } from '@reach/router';

const Sitemap: React.FC = () => (
  <LayoutsMain>
    <Helmet title="Sitemap" />
    <h1>Sitemap</h1>
    <ul>
      <li>
        <Link to={Routes.home}>Home</Link>
      </li>
      <li>
        <Link to={Routes.services}>Services</Link>
      </li>
      <li>
        <Link to={Routes.clients}>Clients</Link>
      </li>
      <li>
        <Link to={Routes.about}>About</Link>
      </li>
      <li>
        <Link to={Routes.contact}>Contact</Link>
      </li>
      <li>
        <Link to={Routes.tech}>Tech</Link>
      </li>
    </ul>
  </LayoutsMain>
);

export default Sitemap;
