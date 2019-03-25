import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  const sheet = new ServerStyleSheet();

  const app = () => (
    <StyleSheetManager sheet={sheet.instance}>
      {bodyComponent}
    </StyleSheetManager>
  );
  replaceBodyHTMLString(renderToString(<app />));
  setHeadComponents([sheet.getStyleElement()]);
};
