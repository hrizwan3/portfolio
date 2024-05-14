import React, {useRef} from 'react';
import './App.css';
import './Home.css';
import pic from './homepage-pic.jpg';

function Home() {
    return (        
        <div className="App">
          <span className='fade-in'>
            <section className='home-container'>
              <h1> Welcome to my webpage!</h1>
                <div className='home-header'>
                  <div className='home-text'>
                    <h2>Hassan Rizwan</h2>
                    <p>Student at the University of Pennsylvania</p> 
                  </div>
                  <img className="home-image" src={pic} alt="me"></img>
                </div>
                {/* <div className='scroll-indicator'>↓</div> */}
            </section>
            <section className='bio'>
              <h1> About Me </h1>
              <div className='horizontal-line'></div>
              <div className='bio-text-container'>
                <p>Hi! My name is Hassan, and I'm a junior studying CS and Math at Penn.
                  I'm interested in software engineering and data science. My previous internship experience has been in data science, 
                  while my projects and coursework have focused more on software engineering. In fact, two of my favorite classes have been AI and Operating Systems. As such, I'm eager to exploring opportunities in either field.
                <br></br>
                <br></br>
                <br></br>
                  As for my hobbies, I enjoy playing 8 ball pool and ping pong (though I can't say I'm very good at either). I also spend copious amounts of time watching YouTube videos and movies. 
                  I enjoy listening to music, and my favorite genres are pop, indie rock, and hip hop.
                </p>
              </div>
            </section>
          </span>
        </div>
  );
}

export default Home;