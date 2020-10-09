import React from 'react';
import './experience.scss';

const Experience = () => {
  return (
    <>
      <section className='technologes'>
        <div className='content'>
          <h3 className='content__subtitle'>
            Cybercom
          </h3>
          <span className='content__tag'>2016 -2017</span>
          <p className='content__text'>
            I worked as a Frontend Developer within an agile sprint team. 
            Websites and applications built using Sitevision CMS. 
          </p>
          <div className="tags-wrapper">
            <span className='content__tag'>CSS</span> <span className='content__tag'>HTML</span> <span className='content__tag'>JavaScript</span> <span className='content__tag'>Sass</span>
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
      </section>
    </>
  );
};

export default Experience;
