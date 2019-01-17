import React from 'react';
import { TopNavCon, TopLink, HomeLink } from './UI/TopBarUI';
import { Routes } from './Routes';

export const TopNav = () => (
  <TopNavCon>
    <HomeLink to={Routes.home}>Home</HomeLink>
    <TopLink to={Routes.services}>Services</TopLink>
    <TopLink to={Routes.clients}>Clients</TopLink>
    <TopLink to={Routes.about}>About</TopLink>
    <TopLink to={Routes.contact}>Contact</TopLink>
  </TopNavCon>
);
