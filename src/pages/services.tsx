import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import Content from '../components/Content';
import { SvcStyles, SvcGrid, SvcBlock, SvcCol } from '../components/UI/ServicesUI';

const Services: React.FC = () => (
  <Layout>
    <Helmet title="Services" />
    <Content>
      <SvcStyles>
        <h2>Technologies</h2>
        <SvcGrid>
          <SvcBlock>
            <h3>Web Frameworks</h3>
            <p>Scala / Java - Playframework</p>
            <p>Python - Django / Pylons</p>
            <p>Node</p>
          </SvcBlock>
          <SvcBlock>
            <h3>Javascript Frameworks</h3>
            <p>React / Nextjs / Gatsby</p>
            <p>Angular 1 & 2</p>
            <p>Vuejs</p>
          </SvcBlock>
        </SvcGrid>
        <h2>General Services</h2>
        <SvcGrid col={4}>
          <SvcBlock>
            <h2>Game Dev</h2>
            <ul>
              <li>Unity3D</li>
              <li>Unreal Engine</li>
              <li>Cocos - 2dx / Creator</li>
            </ul>
          </SvcBlock>
          <SvcBlock>
            <h2>Dapps / Blockchain / Dag</h2>
            <ul>
              <li>Ethereum</li>
              <li>Truffle</li>
              <li>Ganache</li>
            </ul>
          </SvcBlock>
          <SvcBlock>
            <h2>Databases</h2>
            <ul>
              <li>MySQL / MariaDB / Aurora (Serverless)</li>
              <li>PostgreSQL</li>
              <li>GraphQL</li>
            </ul>
          </SvcBlock>
          <SvcBlock>
            <h2>Devops</h2>
            <p>Serverless</p>
            <p>Lambda - AWS, GC, Azure</p>
            <p>S3 Buckets / Cloudfront</p>
            <p>Docker - Kubernetes / ECS containers</p>
          </SvcBlock>
          <SvcBlock>
            <h3>Visual Dev</h3>
            <ul>
              <li>RaphaelJS</li>
              <li>Tweenmax</li>
              <li>PixiJS</li>
              <li>HTML5 Canvas Rendering</li>
            </ul>
          </SvcBlock>
          <SvcBlock>
            <h3>Socail</h3>
            <ul>
              <li>Authorization Login</li>
              <li>Custom share scripts</li>
              <li>Rest API mapping</li>
              <li>App integration</li>
            </ul>
          </SvcBlock>
          <SvcBlock>
            <h3>Single Page Application</h3>
            <ul>
              <li>AngularJS</li>
              <li>Backbone</li>
              <li>Meteor</li>
              <li>Ember</li>
            </ul>
          </SvcBlock>
          <SvcBlock>
            <h2>Mobile Development</h2>
            <ul>
              <li>React Native</li>
              <li>iOS - Swift 4</li>
              <li>Android - Java / Kotlin</li>
            </ul>
          </SvcBlock>
        </SvcGrid>
        <h2>Breakdown</h2>
        <SvcGrid>
          <SvcBlock>
            <h3>Preprocessors</h3>
            <ul>
              <li>Haml</li>
              <li>Less</li>
              <li>Sass</li>
              <li>Scss</li>
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
              <li>CSS 1-3</li>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>Rust</li>
              <li>Actionscript 1-3</li>
              <li>Scala, Java</li>
              <li>Haskell</li>
              <li>Swift</li>
              <li>C++, C#, Ojective C</li>
              <li>Dart</li>
              <li>Go</li>
              <li>Ruby</li>
              <li>Python</li>
            </ul>
          </SvcBlock>
          <SvcBlock>
            <h3>Frameworks</h3>
            <ul>
              <li>Play Framework</li>
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
        </SvcGrid>
        <SvcBlock>
          <h3>Third Party Dev</h3>
          <SvcCol>
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
          </SvcCol>
        </SvcBlock>
        <h3>Wordpress</h3>
        <ul>
          <li>Wordpress Skeleton structure</li>
          <li>Custom Themes, Post Types, and Taxonomy</li>
          <li>Custom written plugins</li>
          <li>Custom API using json-api</li>
          <li>Custom ACF field plugins</li>
          <li>W3 Total Cache and Server optimization</li>
        </ul>
        <h3>Drupal</h3>
        <ul>
          <li>??</li>
        </ul>
        <h3>Gamedev</h3>
        <ul>
          <li>Unity 3D</li>
          <li>Unreal Engine 4</li>
          <li>Cocos2d</li>
          <li>Cocos2d-swift</li>
          <li>Cocos2d-x</li>
          <li>Starling</li>
          <li>Flash</li>
          <li>Impact JS</li>
        </ul>

        <h3>Search Engine Optimization</h3>
        <ul>
          <li>Webmasters Tools</li>
          <li>Meta tags setup</li>
          <li>Webmasters</li>
          <li>Canonical Links</li>
          <li>W3C API specs</li>
        </ul>
        <h3>Web Performance Optimization</h3>
        <ul>
          <li>Page speed</li>
          <li>HTML filter</li>
          <li>Minification</li>
          <li>Sprite sheets</li>
          <li>Request reduction</li>
        </ul>
        <h1>Services</h1>
        <h2>Websites</h2>
        <h2>Optimization</h2>
        <h2>Mobile Apps</h2>
        <h2>Gaming</h2>
        <h2>Dapps</h2>
      </SvcStyles>
    </Content>
  </Layout>
);

export default Services;
