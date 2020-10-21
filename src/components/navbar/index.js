import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';
import { FaLinkedin, FaGithub, FaTwitter, FaFacebookF } from 'react-icons/fa';
import { useEffect } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className='navigation'>
        <div className='navigation__logo'>
          <Link to='/' className='navigation__logo-link'>
            TAREK
          </Link>
        </div>
        <div
          open={open}
          onClick={() => setOpen(!open)}
          className={
            open
              ? 'navigation__menu-toggle is-active'
              : 'navigation__menu-toggle'
          }
        >
          <span className='navigation__menu-toggle-bar'></span>
          <span className='navigation__menu-toggle-bar'></span>
          <span className='navigation__menu-toggle-bar'></span>
        </div>
        <ul className={open ? 'navigation__list active' : 'navigation__list'}>
          <li onClick={() => setOpen(false)} className='navigation__list-item'>
            <Link to='/' className='navigation__list-link'>
              Home
            </Link>
          </li>
          <li onClick={() => setOpen(!open)} className='navigation__list-item'>
            <Link to='/technologies' className='navigation__list-link'>
              Technologies
            </Link>
          </li>

          <li onClick={() => setOpen(!open)} className='navigation__list-item'>
            <Link to='/experience' className='navigation__list-link'>
              Experience
            </Link>
          </li>
          <li onClick={() => setOpen(!open)} className='navigation__list-item'>
            <Link to='projects' className='navigation__list-link'>
              Projects
            </Link>
          </li>
          <div className='social-warpper'>
            <li className='navigation__list-item social '>
              <a
                target='_blank'
                rel='noopener noreferrer'
                className='facebook'
                href='https://www.facebook.com/TarekBouzo'
              >
                <i>
                  <FaFacebookF size='2rem' color='#ffffff' />
                </i>
              </a>
            </li>
            <li className='navigation__list-item social '>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://twitter.com/Tarek_Bouzo'
              >
                <i>
                  <FaTwitter size='2rem' color='#ffffff' />
                </i>
              </a>
            </li>
            <li className='navigation__list-item social'>
              <a
                className='github'
                href='https://github.com/tarekbozo'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fa fa-dribbble'>
                  <FaGithub size='2rem' color='#ffffff' />
                </i>
              </a>
            </li>
            <li className='navigation__list-item social'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.linkedin.com/in/tarek-bouzo/'
              >
                <i className='fa fa-linkedin'>
                  <FaLinkedin size='2rem' color='#ffffff' />
                </i>
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
