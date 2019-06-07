import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import Content from '../components/Content';
import { SvcStyles, SvcGrid, SvcBlock, SvcCol } from '../components/UI/ServicesUI';

const Services: React.FC = () => (
  <Layout>
    <Helmet title="Services" />
    <Content>
      <h1>Services</h1>
      <h2>Development</h2>
      <SvcStyles>
        <SvcGrid>
          <SvcBlock>
            <h3>Web Frameworks</h3>
            <ul>
              <li>Scala / Java - Playframework, Akka</li>
              <li>Node - Koa, Express, Meteor, Sails</li>
              <li>Go - Chai, Echo</li>
              <li>Python - Django, Pyramid</li>
              <li>Ruby - Rails, Sinatra</li>
              <li>PHP - Laravel, CodeIgniter, Symfony</li>
            </ul>
          </SvcBlock>
          <SvcBlock>
            <h3>Javascript Frameworks</h3>
            <ul>
              <li>React - CRA, Nextjs, Gatsby</li>
              <li>Angular</li>
              <li>Vuejs</li>
              <li>Ember</li>
              <li>Backbone</li>
              <li>jQuery, Sizzle</li>
            </ul>
          </SvcBlock>
          <SvcBlock>
            <h3>Visual Dev</h3>
            <ul>
              <li>PixiJS</li>
              <li>BabylonJS</li>
              <li>Three.js</li>
              <li>RaphaelJS, D3</li>
              <li>Victory, Recharts</li>
              <li>GSAP</li>
            </ul>
          </SvcBlock>
          <SvcBlock>
            <h3>Server Setup</h3>
            <ul>
              <li>Ubuntu, CentOS, Debian</li>
              <li>Docker, Kubernetes</li>
              <li>Apache, Nginx, Lighttpd</li>
              <li>API - Rest, GraphQL</li>
              <li>Serverless Lambdas</li>
              <li>Salt, Puppet, Chef</li>
            </ul>
          </SvcBlock>
          <SvcBlock>
            <h3>Search Engine Optimization</h3>
            <ul>
              <li>Webmasters Tools</li>
              <li>Mobile Optimization</li>
              <li>RDFa / JSON-LD Microdata</li>
              <li>Meta Tags</li>
              <li>Canonical Links</li>
              <li>Server Redirects</li>
            </ul>
          </SvcBlock>
          <SvcBlock>
            <h3>Web Performance Optimization</h3>
            <ul>
              <li>Progressive Web Apps</li>
              <li>Lighthouse Auditing</li>
              <li>PageSpeed Insights</li>
              <li>Lazy / Critical Render Path</li>
              <li>Minification / Sprite sheets</li>
              <li>Service Worker caching</li>
            </ul>
          </SvcBlock>
        </SvcGrid>
        <SvcGrid>
          <SvcBlock>
            <h3>React / React Native</h3>
            <ul>
              <li>Hooks, Context, Redux, Mobx</li>
              <li>Axios, Immutable, i18n, Jest</li>
              <li>Reach Router, React Navigation</li>
              <li>Apollo GraphQL</li>
              <li>Styled Components</li>
              <li>Optimistic Response</li>
            </ul>
          </SvcBlock>
          <SvcBlock>
            <h3>Coding</h3>
            <ul>
              <li>VSCode</li>
              <li>Prettier, ESLint</li>
            </ul>
          </SvcBlock>
          <SvcBlock>
            <h3>Dapps / Blockchain</h3>
            <ul>
              <li>Web3.js</li>
              <li>Ethereum - Solidity</li>
              <li>Truffle</li>
              <li>Ganache</li>
              <li>Smart Contracts</li>
              <li>Geth</li>
            </ul>
          </SvcBlock>
        </SvcGrid>
        <h2>Specialized Services</h2>
        <SvcGrid col={4}>
          <SvcBlock>
            <h3>Game Dev</h3>
            <ul>
              <li>Unreal Engine</li>
              <li>Unity</li>
              <li>Godot</li>
              <li>Cocos 2dx</li>
              <li>Cocos Creator</li>
              <li>Amazon Lumberyard</li>
            </ul>
          </SvcBlock>
          <SvcBlock>
            <h3>Databases</h3>
            <ul>
              <li>PostgreSQL</li>
              <li>MySQL / MariaDB</li>
              <li>Aurora Serverless</li>
              <li>DynamoDB</li>
              <li>MongoDB</li>
              <li>Elasticache / Redis</li>
            </ul>
          </SvcBlock>
          <SvcBlock>
            <h3>User Management</h3>
            <ul>
              <li>OAuth, JWT, Token Auth</li>
              <li>RBAC Access Controls</li>
              <li>Analytics, Tracking</li>
              <li>Social Auth, SSO</li>
              <li>Federated Identities</li>
              <li>Multi Factor Auth</li>
            </ul>
          </SvcBlock>
          <SvcBlock>
            <h3>Devops</h3>
            <ul>
              <li>Continuous Integration</li>
              <li>Continuous Delivery</li>
              <li>Infrastructure as Code</li>
              <li>Microservices Architecture</li>
              <li>Deployment Automation</li>
              <li>Network Monitoring</li>
            </ul>
          </SvcBlock>
        </SvcGrid>
        <h2>Technologies</h2>
        <SvcGrid col={4}>
          <SvcBlock>
            <h3>AWS Services</h3>
            <ul>
              <li>Amplify JS / AWS SDK</li>
              <li>API Gateway</li>
              <li>Lambda / Serverless</li>
              <li>Cognito</li>
              <li>ECS Containers</li>
              <li>EKS Kubernetes</li>
              <li>Elastic Beanstalk</li>
              <li>Route 53</li>
              <li>S3 / Cloudfront</li>
              <li>Appsync</li>
              <li>CodePipeline</li>
              <li>Elasticsearch</li>
            </ul>
          </SvcBlock>
          <SvcBlock>
            <h3>Preprocessors</h3>
            <ul>
              <li>Typescript</li>
              <li>Babel, ES(x)+</li>
              <li>Haml, Pug, Slim</li>
              <li>Less, Sass, Scss</li>
              <li>Coffeescript</li>
              <li>PostCSS, Stylus</li>
              <li>Dust JS</li>
              <li>Mustache</li>
              <li>Handlebars</li>
              <li>Twirl</li>
              <li>Markdown</li>
              <li>Gulp, Grunt, Webpack</li>
            </ul>
          </SvcBlock>
          <SvcBlock>
            <h3>Languages</h3>
            <ul>
              <li>(x)HTML 4, HTML 5</li>
              <li>CSS 1-3 - Grid, Flexbox</li>
              <li>Javascript</li>
              <li>Scala, Java, Kotlin</li>
              <li>Haskell</li>
              <li>Objective C, Swift</li>
              <li>C++, C#, Rust</li>
              <li>Dart, Go</li>
              <li>OCaml, Reason</li>
              <li>Ruby</li>
              <li>Python</li>
              <li>Lua</li>
            </ul>
          </SvcBlock>
          <SvcBlock>
            <h3>Third Party Dev</h3>
            <ul>
              <li>Netlify</li>
              <li>Heroku</li>
              <li>Prismic.io</li>
              <li>Squarespace</li>
              <li>Shopify</li>
              <li>Wordpress</li>
              <li>Drupal</li>
              <li>Cargo Collective</li>
              <li>Magento</li>
              <li>Tumblr</li>
              <li>Refinery</li>
              <li>Big Cartel</li>
            </ul>
          </SvcBlock>
        </SvcGrid>
      </SvcStyles>
    </Content>
  </Layout>
);

export default Services;
