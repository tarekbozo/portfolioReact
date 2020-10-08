import React from 'react';
import './experience.scss';

const Experience = () => {
  return (
    <>
      <section className='technologes'>
        <div className='content'>
          <h3 className='content__subtitle'>Javascript</h3>
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
      </section>
    </>
  );
};

export default Experience;
