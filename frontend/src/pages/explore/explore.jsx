import React from 'react';
import { useAuthStore } from '../../store/store.jsx';
import Layout from '../../components/layout/layout';
import MainContent from './components/mainContent/mainContent';
import ForceLogin from '../../components/forceLogin/forcelogin.jsx'; // Import the new ForceLogin component

function Explore() {
  // const { user } = useAuthStore(); // Check if user is logged in

  // if (!user) {
  //   return <ForceLogin />; // Show login prompt if not authenticated
  // }

  return (
    <Layout>
      <MainContent />
    </Layout>
  );
}

export default Explore;
