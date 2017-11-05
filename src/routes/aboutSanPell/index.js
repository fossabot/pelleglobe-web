import React from 'react';
import Layout from '../../components/Layout';
import Page from '../../components/Page';
import aboutSanPell from './about-sanpell.md';

function action() {
  return {
    chunks: ['about-sanpell'],
    title: aboutSanPell.title,
    component: (
      <Layout>
        <Page {...aboutSanPell} />
      </Layout>
    ),
  };
}

export default action;
