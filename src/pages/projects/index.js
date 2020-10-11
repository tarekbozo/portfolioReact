import React from 'react';
import './projects.scss';

const Projects = () => {
  return (
    <>
      <section className='projects'>
        <div className='content-projects'>
          <h3 className='content__subtitle'>Social events app</h3>

          <p className='content__text'>
            A social events application, much like Facebook events or Meetup.
            Web app build with React, Redux and Firestore.
          </p>
          <div className='tags-wrapper'>
            <span className='content__tag'>React.js</span>{' '}
            <span className='content__tag'>Firebase</span>{' '}
            <span className='content__tag'>Redux</span>{' '}
            <span className='content__tag'>semantic ui</span>
          </div>
        </div>
        <div className='btn-wrapper'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            className='github-link'
            href='https://github.com/tarekbozo/revents'
          >
            View On GitHub
          </a>
        </div>

        <div className='gallery-Projects'>
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

export default Projects;
