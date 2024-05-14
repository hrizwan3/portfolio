import React, { Component, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Projects from './Projects';
import Contacts from './Contacts';
import Resume from './Resume';
import linkedin from './linkedin-logo.svg';
import github from './github-logo.png';
import mail from './mail.svg';

function App() {
  useEffect(() => {
    document.title = "Hassan Rizwan";
  })
  return (
    <div className="App">
        <div className="App">
        <NavBar/>
          <Routes>
            <Route path = '/' element={ <Home /> } />
            <Route path = '/projects' element={ <Projects /> } />
            <Route path = '/contacts' element = { <Contacts /> } />
            <Route path = '/resume' element = { <Resume /> } />
          </Routes>

        </div>
          <div className='contact'>
            <a href="https://www.linkedin.com/in/hassan-rizwan3/" target="_blank">
              <img  src={linkedin} alt='github'></img>
            </a>
            <a href="https://github.com/hrizwan3" target="_blank">
              <img src={github} alt='github'></img>
            </a>
            <a href="mailto:hrizwan3@seas.upenn.edu" target="_blank">
              <img src={mail} alt='github'></img>
            </a>
          </div>
        <footer>
        </footer>
    </div>
  );
}

export default App;
