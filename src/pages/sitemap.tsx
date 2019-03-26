import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import Content from '../components/Content';
import Routes from '../components/Routes';
import { Link } from 'gatsby';

const Sitemap: React.FC = () => (
  <Layout>
    <Helmet title="Sitemap" />
    <Content>
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
    </Content>
  </Layout>
);

export default Sitemap;
