import React from 'react';
import Layout from '../../components/Layout';
import Page from '../../components/Page';
import aboutPelleGlobe from './about-pelleglobe.md';

function action() {
  return {
    chunks: ['about-pelleglobe'],
    title: aboutPelleGlobe.title,
    component: (
      <Layout>
        <Page {...aboutPelleGlobe} />
      </Layout>
    ),
  };
}

export default action;
