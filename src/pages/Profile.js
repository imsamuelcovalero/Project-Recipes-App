import React from 'react';
import HeaderNoSearch from '../Components/HeaderNoSearch';
import Footer from '../Components/Footer';

function Profile() {
  return (
    <div>
      <HeaderNoSearch title="Profile" shouldRenderMagnifier />
      <Footer />
    </div>
  );
}

export default Profile;
