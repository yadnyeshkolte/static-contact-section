

import './ContactSection.css';

import { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        setSubmitted(true); // Set state to true to trigger fade-out effect

        // Submit form data
        const form = e.target;
        fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            mode: 'no-cors'
        }).then(() => {
            console.log("Form submitted successfully!");
        }).catch(err => console.error(err));
    };
    return (
        <div className="contact-container">
            <section className="section contact-section">
                {!submitted ? (
                    <form
                        name="gform"
                        id="gform"
                        encType="text/plain"
                        target="hidden_iframe"
                        onSubmit={handleSubmit}
                        action="https://docs.google.com/forms/d/e/1FAIpQLScy1iM-erdX2ZaZGqkt5rlksSGK2sFK59LHISRaBxc2Sb0e7g/formResponse?"
                    >
                        <label>Name</label><br/>
                        <input type="text" name="entry.508287588" id="entry.508287588" required/><br/>
                        <label>Email</label><br/>
                        <input type="text" name="entry.1219103022" id="entry.1219103022" required/><br/>
                        <label>Message</label><br/>
                        <input type="text" name="entry.1912912210" id="entry.1912912210" required/><br/>
                        <input type="submit" value="Submit"/>
                    </form>
                ) : (
                    <p className="fade-message">Your submission has been processed...</p>
                )}
                <iframe name="hidden_iframe" id="hidden_iframe" style={{display: "none"}}/>

                <div className="content-wrapper">
                    <h2 className="section-title">Contact</h2>
                    <div className="contact-grid">
                        <div className="contact-card">
                            <h3>Get in Touch</h3>
                            <p>Feel free to reach out for collaborations or just a friendly hello</p>
                            <div className="contact-info">
                                <p>📧 john.doe@example.com</p>
                                <p>📱 +1 (555) 123-4567</p>
                                <p>📍 San Francisco, CA</p>
                            </div>
                        </div>
                        <div className="contact-card">
                            <h3>Social Media</h3>
                            <div className="contact-info">
                                <p>LinkedIn: @johndoe</p>
                                <p>Twitter: @johndoe</p>
                                <p>GitHub: @johndoe</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactSection;
