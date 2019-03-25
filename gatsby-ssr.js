import React from 'react';
import { Helmet } from 'react-helmet';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

const sheetByPathname = new Map();

// eslint-disable-next-line react/prop-types,react/display-name
export const wrapRootElement = ({ element, pathname }) => {
  const sheet = new ServerStyleSheet();
  sheetByPathname.set(pathname, sheet);
  return <StyleSheetManager sheet={sheet.instance}>{element}</StyleSheetManager>;
};

export const onRenderBody = ({ setHeadComponents, pathname }) => {
  const sheet = sheetByPathname.get(pathname);
  if (sheet) {
    setHeadComponents([sheet.getStyleElement()]);
    sheetByPathname.delete(pathname);
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
