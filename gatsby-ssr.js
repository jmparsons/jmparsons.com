import React from 'react';
import { css } from 'styled-components';

export const onRenderBody = ({ setHeadComponents }) => {
  const styles = css`
    @font-face {
      font-family: 'Denmark';
      font-style: normal;
      font-weight: 100;
      src: local('Denmark Regular'), local('Denmark'),
        url('/fonts/jmp-denmark.woff2') format('woff2'),
        url('/fonts/jmp-denmark.woff') format('woff');
      font-display: swap;
    }
  `;
  setHeadComponents([
    <link
      key={`jmp-denmark-font`}
      rel="preload"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      href="/fonts/jmp-denmark.woff2"
    />,
    <style key="jmp-denmark-style" type="text/css" dangerouslySetInnerHTML={{ __html: styles }} />,
  ]);
};
