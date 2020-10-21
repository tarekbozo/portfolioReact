import React from 'react';
import './experience.scss';
import { Link } from 'react-router-dom';

const Experience = () => {
  return (
    <>
      <section className='technologes'>
        <div className='content'>
          <h3 className='content__subtitle'>Freelancer Developer</h3>
          <span className='content__tag'>2018 -present</span>
          <p className='content__text'>
            I freelanced for berlin-based agencies as Full stack Developer.
            Application build with React js in front and node js in the back.
          </p>
          <div className='tags-wrapper'>
            <span className='content__tag'>React.js</span>{' '}
            <span className='content__tag'>Node.js</span>{' '}
            <span className='content__tag'>JavaScript</span>{' '}
            <span className='content__tag'>styled components</span>
          </div>
        </div>

        <div className='gallery-experience'>
          <figure className='gallery__item--1 cybercom'>
            <img
              className='gallery__img'
              src='assets/img/visiteksjo.jpg'
              alt='Javascript'
            />
          </figure>
        </div>
        <div className='content'>
          <h3 className='content__subtitle'>Cybercom</h3>
          <span className='content__tag'>2017 -2018</span>
          <p className='content__text'>
            I worked as a Frontend Developer within an agile sprint team.
            Websites and applications built using Sitevision CMS.
          </p>
          <div className='tags-wrapper'>
            <span className='content__tag'>CSS</span>{' '}
            <span className='content__tag'>HTML</span>{' '}
            <span className='content__tag'>JavaScript</span>{' '}
            <span className='content__tag'>Sass</span>
          </div>
        </div>

        <div className='gallery-experience'>
          <figure className='gallery__item--1 cybercom'>
            <img
              className='gallery__img'
              src='assets/img/visiteksjo.jpg'
              alt='Javascript'
            />
          </figure>
        </div>
        <div className='content'>
          <h3 className='content__subtitle'>Mina Bästa Polare</h3>
          <span className='content__tag'>2015 -2016</span>
          <p className='content__text'>
            I worked as worldPress Wodget design & Development. PHP Development
            .
          </p>
          <div className='tags-wrapper'>
            <span className='content__tag'>PHP</span>{' '}
            <span className='content__tag'>CSS</span>{' '}
            <span className='content__tag'>HTML</span>{' '}
            <span className='content__tag'>JavaScript</span>{' '}
            <span className='content__tag'>Sass</span>
          </div>
        </div>

        <div className='gallery-experience'>
          <figure className='gallery__item--1 cybercom'>
            <img
              className='gallery__img'
              src='assets/img/eksjo.jpg'
              alt='Javascript'
            />
          </figure>
        </div>
        <div className='next-btn'>
          <button className='header__content-btn'>
            <Link className='header__content-btn-link' to='/projects'>
              Projects
            </Link>
          </button>
        </div>
      </section>
    </>
  );
};

export default Experience;
