import React from 'react';
import Helmet from 'react-helmet';
import ReactMarkdown from 'react-markdown';
import LayoutsMain from '../components/Layouts/Main';

const md = `
# Technology - JMParsons v6
## Web stack
[JMParsons Github Repo]
### Framework:
React - built with [create-react-app] using [typescript]
#### Plugins:
- [react-router-dom]: dom based router
- [styled-components]: css styled tagged template literals
- [axios]: http promise request client
- [react-helmet]: document head manager
- [formik]: form building and validation
- [react-markdown]: markdown formatting

[JMParsons Github Repo]: https://github.com/jmparsons/jmpweb
[create-react-app]: https://github.com/facebookincubator/create-react-app
[typescript]: https://github.com/Microsoft/TypeScript
[react-router-dom]: https://github.com/ReactTraining/react-router
[styled-components]: https://github.com/styled-components/styled-components
[axios]: https://github.com/axios/axios
[react-helmet]: https://github.com/nfl/react-helmet
[formik]: https://github.com/jaredpalmer/formik
[react-markdown]: https://github.com/rexxars/react-markdown
`;

interface ExtLinkProps {
  title: string;
  href: string;
  children: React.ReactNode;
}

const ExtLink: React.FC<ExtLinkProps> = ({ href, title, children }) => (
  <a href={href} title={title} target="_blank">
    {children}
  </a>
);

const Tech: React.FC = () => (
  <LayoutsMain>
    <Helmet title="Tech" />
    <ReactMarkdown source={md} renderers={{ link: ExtLink, linkReference: ExtLink }} />
  </LayoutsMain>
);

export default Tech;
