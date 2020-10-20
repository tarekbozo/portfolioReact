import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer>
        <div className='footer'>
          <p className='footer__copyright-text'>
            Copyright &copy; 2020 All Rights Reserved
          </p>
          <ul className='footer__social'>
            <li>
              <Link className='facebook' to='#'>
                <i className='fa fa-facebook'>
                  <FaFacebookF size='4rem' color='#ffffff' />
                </i>
              </Link>
            </li>
            <li>
              <Link className='twitter' to='#'>
                <i className='fa fa-twitter'>
                  <FaTwitter size='4rem' color='#ffffff' />
                </i>
              </Link>
            </li>
            <li>
              <Link className='github' to='#'>
                <i className='fa fa-dribbble'>
                  <FaGithub size='4rem' color='#ffffff' />
                </i>
              </Link>
            </li>
            <li>
              <Link className='linkedin' to='#'>
                <i className='fa fa-linkedin'>
                  <FaLinkedin size='4rem' color='#ffffff' />
                </i>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
