import React from 'react';
import { Helmet } from 'react-helmet';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

// eslint-disable-next-line react/prop-types,react/display-name
export const wrapRootElement = ({ element, pathname }) => {
  const sheet = new ServerStyleSheet();
  return <StyleSheetManager sheet={sheet.instance}>{element}</StyleSheetManager>;
};

export const onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
  setBodyAttributes,
  pathname,
}) => {
  const sheet = new ServerStyleSheet();
  if (sheet) {
    setHeadComponents([sheet.getStyleElement()]);
  }
  const helmet = Helmet.renderStatic();
  if (setHtmlAttributes) {
    setHtmlAttributes(helmet.htmlAttributes.toComponent());
  }
  if (setBodyAttributes) {
    setBodyAttributes(helmet.bodyAttributes.toComponent());
  }
  setHeadComponents([
    helmet.title.toComponent(),
    helmet.link.toComponent(),
    helmet.meta.toComponent(),
    helmet.noscript.toComponent(),
    helmet.script.toComponent(),
    helmet.style.toComponent(),
  ]);
};
