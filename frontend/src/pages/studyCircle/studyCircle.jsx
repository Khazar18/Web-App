import React from 'react';
import Layout from '../../components/layout/layout';
import JoinedSocieties from './components/join-studyCircles/join-studyCircles';
import Recommended from './components/recommended/recommended';
import SocietyPosts from '../../components/posts/post';

export default function StudyCircle() {
  return (
    <Layout>
      <JoinedSocieties />
      <Recommended />
      <SocietyPosts />
    </Layout>
  );
}
