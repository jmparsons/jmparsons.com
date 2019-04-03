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
      <h2>Web Development</h2>
      <SvcStyles>
        <SvcGrid>
          <SvcBlock>
            <h3>Web Frameworks</h3>
            <ul>
              <li>Scala / Java - Playframework</li>
              <li>Node - Koa / Express / Sails</li>
              <li>Python - Django / Pyramid</li>
              <li>Ruby - Rails / Sinatra</li>
              <li>Python - Django / Pyramid</li>
              <li>PHP - Laravel / CodeIgniter / Symfony</li>
            </ul>
          </SvcBlock>
          <SvcBlock>
            <h3>Javascript Frameworks</h3>
            <ul>
              <li>React / Nextjs / Gatsby</li>
              <li>Angular</li>
              <li>Vuejs</li>
              <li>Ember</li>
              <li>Meteor</li>
              <li>jQuery / Backbone / Sizzle</li>
            </ul>
          </SvcBlock>
          <SvcBlock>
            <h3>Visual Dev</h3>
            <ul>
              <li>PixiJS</li>
              <li>BabylonJS</li>
              <li>Three.js</li>
              <li>RaphaelJS / D3</li>
              <li>Victory / Recharts</li>
              <li>GSAP</li>
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
        <h2>Mobile Development</h2>
        <SvcGrid>
          <SvcBlock>
            <h3>Mobile Development</h3>
            <ul>
              <li>React Native</li>
              <li>iOS - Swift 4</li>
              <li>Android - Java / Kotlin</li>
            </ul>
          </SvcBlock>
        </SvcGrid>
        <h2>Dapps / Blockchain</h2>
        <SvcGrid>
          <SvcBlock>
            <h3>Blockchain</h3>
            <ul>
              <li>Ethereum</li>
              <li>Truffle</li>
              <li>Ganache</li>
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
            <h3>Data Management</h3>
            <ul>
              <li>TypeORM</li>
              <li>Slick</li>
              <li>ODBC / JDBC</li>
              <li>GraphQL</li>
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
              <li>API Gateway</li>
              <li>Lambda / Serverless</li>
              <li>Cognito</li>
              <li>ECS Containers</li>
              <li>EKS Kubernetes</li>
              <li>Elastic Beanstalk</li>
              <li>Route 53</li>
              <li>S3 / Cloudfront</li>
              <li>Appsync</li>
              <li>Amplify JS</li>
              <li>CodePipeline</li>
              <li>Elasticsearch</li>
            </ul>
          </SvcBlock>
          <SvcBlock>
            <h3>Preprocessors</h3>
            <ul>
              <li>Haml / Jade</li>
              <li>Less / Sass / Scss</li>
              <li>Typescript / ES7+</li>
              <li>Coffeescript</li>
              <li>PostCSS / Stylus</li>
              <li>Jade</li>
              <li>Dust JS</li>
              <li>Mustache</li>
              <li>Handlebars</li>
              <li>Twirl</li>
              <li>Markdown</li>
            </ul>
          </SvcBlock>
          <SvcBlock>
            <h3>Languages</h3>
            <ul>
              <li>(x)HTML 4, HTML 5</li>
              <li>CSS 1-3 - Grid / Flexbox</li>
              <li>Javascript</li>
              <li>Scala, Java</li>
              <li>Haskell</li>
              <li>Objective C / Swift</li>
              <li>C++, C#, Rust</li>
              <li>Dart</li>
              <li>Go</li>
              <li>Ruby</li>
              <li>Python</li>
              <li>Lua</li>
            </ul>
          </SvcBlock>
          <SvcBlock>
            <h3>Third Party Dev</h3>
            <ul>
              <li>Squarespace</li>
              <li>Shopify</li>
              <li>Prismic.io</li>
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
