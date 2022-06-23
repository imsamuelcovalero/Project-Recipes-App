import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderNoSearch from '../Components/HeaderNoSearch';
import Footer from '../Components/Footer';

function Profile() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const getUser = () => JSON.parse(localStorage.getItem('user'));
    setEmail(getUser);
  }, []);

  const clearStorage = () => {
    localStorage.clear();
  };

  return (
    <div>
      <HeaderNoSearch title="Profile" shouldRenderMagnifier />
      <section>
        { email && <h3 data-testid="profile-email">{email.email}</h3> }
        <Link to="/done-recipes">
          <button type="button" data-testid="profile-done-btn">Done Recipes</button>
        </Link>
        <Link to="/favorite-recipes">
          <button
            type="button"
            data-testid="profile-favorite-btn"
          >
            Favorite Recipes
          </button>
        </Link>
        <Link to="/">
          <button
            type="button"
            data-testid="profile-logout-btn"
            onClick={ clearStorage }
          >
            Logout

          </button>
        </Link>
      </section>
      <Footer />
    </div>
  );
}

export default Profile;
