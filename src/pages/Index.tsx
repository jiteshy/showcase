
import React from 'react';
import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { Resume } from '@/components/Resume';
import { Social } from '@/components/Social';
import { Projects } from '@/components/Projects';
import { Contributions } from '@/components/Contributions';

const Index: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Resume />
      <Projects />
      <Contributions />
      <Social />
    </Layout>
  );
};

export default Index;
