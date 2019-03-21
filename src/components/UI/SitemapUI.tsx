import styled from 'styled-components';
import { ThxProps } from '../Theme';

const SiteNav = styled.nav`
  ul {
    list-style: none;
  }
  li {
    padding: 10px 0;
  }
  a {
    color: ${({ theme }: ThxProps) => theme.main.link};
    &:hover {
      color: ${({ theme }: ThxProps) => theme.main.activeLink};
    }
  }
`;

export { SiteNav };
