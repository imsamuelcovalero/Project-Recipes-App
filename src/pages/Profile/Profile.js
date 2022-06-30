import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderNoSearch from '../../Components/Header/HeaderNoSearch';
import FoodLogo from '../../images/FoodLogo.png';
import Footer from '../../Components/Footer/Footer';
import { DivGlobal, Div } from './Style';
// comentário para subir a branch
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
    <DivGlobal>
      <Div>
        <HeaderNoSearch id="header" title="Profile" shouldRenderMagnifier />
        <div id="logoProfile">
          <img src={ FoodLogo } alt="profile" />
        </div>
        { email && <h2 id="email" data-testid="profile-email">{email.email}</h2> }
        <div id="buttons">
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
        </div>
      </Div>
      <Footer />
    </DivGlobal>
  );
}

export default Profile;
