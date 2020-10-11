import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='navigation'>
        <nav className='navigation__nav'>
          <div className='navigation__logo'>
            <Link to='/'>TAREK</Link>
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
            <li onClick={() => setOpen(false)} className='navigation__item'>
              <Link to='/' className='navigation__link'>
                Home
              </Link>
            </li>
            <li onClick={() => setOpen(!open)} className='navigation__item'>
              <Link to='/technologies' className='navigation__link'>
                Technologies
              </Link>
            </li>

            <li onClick={() => setOpen(!open)} className='navigation__item'>
              <Link to='/experience' className='navigation__link'>
                Experience
              </Link>
            </li>
            <li onClick={() => setOpen(!open)} className='navigation__item'>
              <Link to='projects' className='navigation__link-btn'>
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
