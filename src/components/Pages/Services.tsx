import React from 'react';
import LayoutsMain from '../Layouts/Main';
import Helmet from 'react-helmet';

const Services: React.FC = () => (
  <LayoutsMain>
    <Helmet title="Services · JMParsons" />
    <h1>Services</h1>
    <h2>Languages</h2>
    <p>Javascript / Typescript</p>
    <p>C++ / Rustlang</p>
    <h2>Devops</h2>
    <p>Lambda - AWS, GC, Azure</p>
    <p>S3 Buckets / Cloudfront</p>
    <p>Docker - Kubernetes / ECS containers</p>
    <h2>Web</h2>
    <p>React / Nextjs / Gatsby</p>
    <p>Angular 1 & 2</p>
    <p>Vuejs</p>
    <h2>Mobile</h2>
    <p>React Native</p>
    <p>iOS - Swift 4</p>
    <p>Android - Java / Kotlin</p>
    <h2>Game Dev</h2>
    <p>Unity3D</p>
    <p>Unreal Engine</p>
    <p>Cocos - 2dx / Creator</p>
    <h2>Blockchain</h2>
    <h3>Ethereum</h3>
    <p>Truffle</p>
    <p>Ganache</p>
    <h2>Databases</h2>
    <p>MySQL / MariaDB / Aurora (Serverless)</p>
    <p>PostgreSQL</p>
    <p>GraphQL</p>
  </LayoutsMain>
);

export default Services;
