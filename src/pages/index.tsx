import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import {
  IndexSplash,
  IndexInfo,
  IndexIntro,
  IndexBgCon,
  IndexBgFixed,
  IndexBg,
} from '../components/UI/IndexUI';
import { QueryProps } from '../interfaces';
import { graphql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';

const Home: React.FC<QueryProps> = ({ data }) => (
  <Layout>
    <Helmet>
      <meta
        name="description"
        content="Professional Scala, Play, Node, React, iOS, and Android Developer."
      />
    </Helmet>
    <IndexSplash>
      {/* <IndexBgCon>
        <IndexBgFixed>
          <IndexBg>
            <Img fluid={data.file!.childImageSharp!.fluid as FluidObject} critical fadeIn={false} />
          </IndexBg>
        </IndexBgFixed>
      </IndexBgCon> */}
      <IndexInfo>
        <IndexIntro>
          <h2>My name is Jon.</h2>
          <h3>Full Stack Developer</h3>
          <p>New York based professional Scala, Play, Node, React, iOS, and Android Developer.</p>
        </IndexIntro>
      </IndexInfo>
    </IndexSplash>
  </Layout>
);

// export const query = graphql`
//   query {
//     file(relativePath: { eq: "index-splash.png" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid_withWebp_noBase64
//         }
//       }
//     }
//   }
// `;

export default Home;
