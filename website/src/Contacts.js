import React from 'react';
import './App.css';
import './Contacts.css';

function Contacts() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, subject, message } = e.target.elements;

        let mailto = `mailto:hassanwebsite6@gmail.com?subject=${encodeURIComponent(subject.value)}`;
        mailto += `&body=${encodeURIComponent(`Name: ${name.value}\nEmail: ${email.value}\nMessage: ${message.value}`)}`;

        window.open(mailto, '_blank');
    };

    return (
        <div className='App'>
            <div className='fade-in'>
                <h1> Contact </h1>
                <div className='horizontal-line'></div>
                <div className='contacts-text'>
                    <p>
                        My contact information is listed at the middle-right of every page. Feel free to reach out to me via email or LinkedIn – or the form below. You can also check out my GitHub to see what I've been working on.
                    </p>
                </div>
                <div className='contacts-container'>
                    <form className='contacts-form' action="mailto:hassanwebsite6@gmail.com" method="GET">
                        <label htmlFor='name'>Name</label>
                        <input type='text' id='name' name='name' placeholder='Your name...'></input>

                        <label htmlFor='email'>Email</label>
                        <input type='text' id='email' name='_replyto' placeholder='Your email...'></input>

                        <label htmlFor='subject'>Subject</label>
                        <input type='text' id='subject' name='subject' placeholder='Subject...'></input>

                        <label htmlFor='message'>Message</label>
                        <textarea id='message' name='body' placeholder='Your message...'></textarea>

                        <input type='submit' value='Submit'></input>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
