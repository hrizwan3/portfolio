import React from 'react';
import './App.css';
import './Resume.css';
import res from './Hassan Rizwan Resume.pdf';

function Resume() {
    return (
        <div className='App'>
            <div className='fade-in'>
                <h1> Resume </h1>
                <div className='horizontal-line'></div>
                <iframe src={res} height='800px' width='80%'></iframe>
            </div>
        </div>
    );
}

export default Resume;