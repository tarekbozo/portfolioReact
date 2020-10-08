import React from 'react';
import './home.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <header className='header'>
        <div className='header__content'>
          <h1 className='header__content-name'>Hey, I'm Tarek Bouzo</h1>
          <h2 className='header__content-title'>Full stack developer</h2>
          <p className='header__content-desc'>
            Developer of more than just code. Develop ideas. Develop
            relationships.Develop solutions to human problems.
          </p>
          <button className='header__content-btn'>
            <Link className='header__content-btn-link' to='/technologies'>
              Technologies
            </Link>
          </button>
        </div>
        <div className='header__img'>
          <img src='/assets/img/hero.svg' alt='hero' />
        </div>
      </header>
    </>
  );
};

export default Home;
