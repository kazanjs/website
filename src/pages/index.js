import React from 'react';

import Layout from '../components/layout/layout';
import { WelcomeBlock } from '../components/welcomeBlock/welcomeBlock';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="KazanJS" />
    <WelcomeBlock />
  </Layout>
);

export default IndexPage;
