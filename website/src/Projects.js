import React from 'react';
import './App.css';
import './Projects.css';

function Projects() {
    return (
        <div className='App'>
            <div className='fade-in'>
                <div className='projects-header'>
                    <h1> Projects </h1>
                    <div className='horizontal-line'></div>
                    <p>During my time at Penn, I've had the opportunity to work on Software Engineering and Data Science projects alike. Here's a list of a few of them.</p>
                </div>
                <div className='projects'>
                    <a className='project-box' href= '#'>
                        <h2>PennOS</h2>
                        <p>A Linux-like operating system with a shell, standalone file system, and kernel. PennOS had robust support for system calls with a round-robin scheduler, integrated shell built-ins, and a custom FAT. This project was written in C, and the ucontext library was utilized to create and manage processes.</p>
                    </a>
                    <a className='project-box' href= '#'>
                        <h2>Flight Delays and Cancellations</h2>
                        <p>A three-person project focused on analyzing flight data to predict delays and cancellations. The project used Python libraries like Pandas, Scikit-Learn, and TensorFlow to apply machine learning techniques such as Random Forests, Naive Bayes, Logistic Regression, and Neural Networks, focusing on variables like date, time, and flight routes.</p>
                    </a>

                    <a className='project-box' href='#'>
                        <h2>Embedded Pong</h2>
                        <p>The classic game of Pong, developed using a TFT LCD module and joystick control through bare metal C. It featured a wireless integration using the NodeMCU board and Blynk platform, enabling remote control of player paddles.</p>
                    </a>

                    <a className='project-box' href='https://github.com/hrizwan3/Sudoku-Game-Solver' target='_blank'>
                        <h2>Sudoku Solver</h2>
                        <p>The classic game of Sudoku implemented using a command-line interface in C++. The game featured a sophisticated solver that employs backtracking and arc-consistency algorithms, enabling efficient puzzle-solving.</p>
                    </a>

                    <a className='project-box'>
                        <h2>Senator Tweet Statistics</h2>
                        <p>
                            A SQL project to determine the activity of U.S. Senators on Twitter. The tweets were extracted and stored in an Azure SQL Database using web scraping tools. Statistical analysis was then performed to determine engagement and activity per Senator per party, providing valuable insights into the dynamics of political discourse on social media.
                        </p>
                    </a>

                    <a className='project-box' href='https://github.com/hrizwan3/AI-Safe'>
                        <h2>AI Safe</h2>
                        <p>
                            A sophisticated detection system using a Raspberry Pi camera, integrated with OpenCV and TensorFlow for facial and body recognition. Equipped with PIR sensors, it captures and emails images using smtplib upon detecting a person, providing enhanced security with real-time alerts.
                        </p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Projects;
