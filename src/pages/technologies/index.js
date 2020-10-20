import React from 'react';
import './technologies.scss';
import { Link } from 'react-router-dom';

const Technologies = () => {
  return (
    <>
      <section className='technologes'>
        <div className='content'>
          <h3 className='content__subtitle'>Javascript .</h3>
          <p className='content__text'>
            I have a good amount of experience with JavaScript, building
            websites, apps . I have worked with ECMA Script 2016 and have
            professional experience with modern tooling such as Node, Webpack,
            Babel and the package managers npm and yarn. I have worked in TDD
            environments and have used the testing framework Jest.
          </p>
        </div>

        <div className='gallery'>
          <figure className='gallery__item--1'>
            <img
              className='gallery__img'
              src='assets/img/javascript.svg'
              alt='Javascript'
            />
          </figure>
          <figure className='gallery__item--2'>
            <img
              className='gallery__img'
              src='assets/img/nodejs.svg'
              alt='nodejs'
            />
          </figure>
          <figure className='gallery__item--3'>
            <img className='gallery__img' src='assets/img/npm.svg' alt='npm' />
          </figure>
          <figure className='gallery__item--4'>
            <img
              className='gallery__img'
              src='assets/img/WebPack.svg'
              alt='WebPack'
            />
          </figure>
          <figure className='gallery__item--5'>
            <img
              className='gallery__img'
              src='assets/img/Babel.svg'
              alt='Babel'
            />
          </figure>
          <figure className='gallery__item--6'>
            <img
              className='gallery__img'
              src='assets/img/Jest.svg'
              alt='Jest'
            />
          </figure>
        </div>
        <div className='content'>
          <h3 className='content__subtitle'>React .</h3>
          <p className='content__text'>
            I have 4 years experience with React, building websites,
            applications, and component libraries. I have used both Redux and
            Apollo for client side state management. I also have professional
            experience with other packages that aid React development including:
            React Router, Styled Components, Storybook, Enzyme and React Testing
            Library.
          </p>
        </div>

        <div className='gallery'>
          <figure className='gallery__item--1'>
            <img
              className='gallery__img'
              src='assets/img/react.svg'
              alt='React'
            />
          </figure>
          <figure className='gallery__item--2'>
            <img
              className='gallery__img'
              src='assets/img/redux.svg'
              alt='Redux'
            />
          </figure>
          <figure className='gallery__item--3'>
            <img
              className='gallery__img'
              src='assets/img/apollo.svg'
              alt='apollo'
            />
          </figure>
          <figure className='gallery__item--4'>
            <img
              className='gallery__img'
              src='assets/img/Typescript.svg'
              alt='Typescript'
            />
          </figure>
          <figure className='gallery__item--5'>
            <img
              className='gallery__img'
              src='assets/img/airbnb.svg'
              alt='airbnb'
            />
          </figure>
          <figure className='gallery__item--6'>
            <img
              className='gallery__img'
              src='assets/img/graphql.svg'
              alt='graphql'
            />
          </figure>
        </div>
        <div className='next-btn'>
          <button className='header__content-btn'>
            <Link className='header__content-btn-link' to='/experience'>
              Experience
            </Link>
          </button>
        </div>
      </section>
    </>
  );
};

export default Technologies;
