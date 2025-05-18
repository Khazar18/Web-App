import React from 'react';
import Hero from '../../pages/bookmark/components/heroSection/hero';
import './bookmark.css';
import Layout from '../../components/layout/layout';
import SocietyPosts from '../../components/posts/post';

export default function BookmarksPage() {
  return (
    <Layout>
      <Hero />
      <SocietyPosts />
    </Layout>
  );
}
