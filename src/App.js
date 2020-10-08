import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Technologies from './pages/technologies/index';
import Experience from './pages/experience/index';
import Projects from './pages/projects/index';

function App() {
  return (
    <>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path='/technologies' component={Technologies} />
      <Route exact path='/Experience' component={Experience} />
      <Route exact path='/projects' component={Projects} />
    </>
  );
}

export default App;
