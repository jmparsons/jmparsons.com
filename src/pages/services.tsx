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
          <SvcBlock col={2}>
            <h3>Web Frameworks</h3>
            <ul>
              <li>Scala / Java - Playframework</li>
              <li>Python - Django / Pylons</li>
              <li>Node</li>
              <li>Sinatra</li>
              <li>Ruby on Rails</li>
              <li>Django</li>
              <li>Pylons - Pyramid</li>
              <li>Laravel</li>
              <li>Yii</li>
              <li>Zend</li>
              <li>Symfony</li>
              <li>Code Igniter</li>
            </ul>
          </SvcBlock>
          <SvcBlock>
            <h3>Javascript Frameworks</h3>
            <ul>
              <li>React / Nextjs / Gatsby</li>
              <li>Angular 1 & 2</li>
              <li>Vuejs</li>
              <li>Backbone</li>
              <li>Meteor</li>
              <li>Ember</li>
            </ul>
          </SvcBlock>
          <SvcBlock>
            <h3>Visual Dev</h3>
            <ul>
              <li>RaphaelJS</li>
              <li>Tweenmax</li>
              <li>PixiJS</li>
              <li>BabylonJS</li>
              <li>Three.js</li>
              <li>Victory</li>
            </ul>
          </SvcBlock>
          <SvcBlock>
            <h3>Search Engine Optimization</h3>
            <ul>
              <li>Webmasters Tools</li>
              <li>Meta tags setup</li>
              <li>Webmasters</li>
              <li>Canonical Links</li>
              <li>W3C API specs</li>
              <li>Server Redirects</li>
            </ul>
          </SvcBlock>
          <SvcBlock>
            <h3>Web Performance Optimization</h3>
            <ul>
              <li>Page speed</li>
              <li>HTML filter</li>
              <li>Minification</li>
              <li>Sprite sheets</li>
              <li>Request reduction</li>
              <li>Lighthouse testing</li>
            </ul>
          </SvcBlock>
        </SvcGrid>
        <h2>General Services</h2>
        <SvcGrid col={4}>
          <SvcBlock>
            <h3>Game Dev</h3>
            <ul>
              <li>Unity3D</li>
              <li>Unreal Engine</li>
              <li>Cocos - 2dx / Creator</li>
              <li>Unity 3D</li>
              <li>Starling</li>
              <li>Flash</li>
              <li>Impact JS</li>
            </ul>
          </SvcBlock>
          <SvcBlock>
            <h3>Blockchain</h3>
            <ul>
              <li>Ethereum</li>
              <li>Truffle</li>
              <li>Ganache</li>
            </ul>
          </SvcBlock>
          <SvcBlock>
            <h3>Databases</h3>
            <ul>
              <li>MySQL / MariaDB / Aurora (Serverless)</li>
              <li>PostgreSQL</li>
              <li>GraphQL</li>
            </ul>
          </SvcBlock>
          <SvcBlock>
            <h3>Devops</h3>
            <ul>
              <li>Serverless</li>
              <li>Lambda - AWS, GC, Azure</li>
              <li>S3 Buckets / Cloudfront</li>
              <li>Docker - Kubernetes / ECS containers</li>
            </ul>
          </SvcBlock>
          <SvcBlock>
            <h3>Social</h3>
            <ul>
              <li>Authorization Login</li>
              <li>Custom share scripts</li>
              <li>Rest API mapping</li>
              <li>App integration</li>
            </ul>
          </SvcBlock>
          <SvcBlock>
            <h3>Mobile Development</h3>
            <ul>
              <li>React Native</li>
              <li>iOS - Swift 4</li>
              <li>Android - Java / Kotlin</li>
            </ul>
          </SvcBlock>
        </SvcGrid>
        <h2>Technologies</h2>
        <SvcGrid>
          <SvcBlock>
            <h3>Preprocessors</h3>
            <ul>
              <li>Haml / Jade</li>
              <li>Less / Sass / Scss</li>
              <li>Coffeescript</li>
              <li>Stylus</li>
              <li>Jade</li>
              <li>Dust JS</li>
              <li>Mustache</li>
              <li>Handelbars</li>
              <li>Twirl</li>
              <li>Markdown</li>
            </ul>
          </SvcBlock>
          <SvcBlock>
            <h3>Languages</h3>
            <ul>
              <li>(x)HTML 4, HTML 5</li>
              <li>CSS 1-3 - Grid / Flexbox</li>
              <li>Javascript / Typescript</li>
              <li>Actionscript 1-3</li>
              <li>Scala, Java</li>
              <li>Haskell</li>
              <li>Objective C / Swift</li>
              <li>C++, C#, Rust</li>
              <li>Dart</li>
              <li>Go</li>
              <li>Ruby</li>
              <li>Python</li>
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
        <SvcBlock>
          <h3>Wordpress</h3>
          <SvcCol>
            <ul>
              <li>Wordpress Skeleton structure</li>
              <li>Custom Themes, Post Types, and Taxonomy</li>
              <li>Custom written plugins</li>
              <li>Custom API using json-api</li>
              <li>Custom ACF field plugins</li>
              <li>W3 Total Cache and Server optimization</li>
            </ul>
          </SvcCol>
        </SvcBlock>

        {/* <h2>Websites</h2>
        <h2>Optimization</h2>
        <h2>Mobile Apps</h2>
        <h2>Gaming</h2>
        <h2>Dapps</h2> */}
      </SvcStyles>
    </Content>
  </Layout>
);

export default Services;
