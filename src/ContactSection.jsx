import { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const form = e.target;
            await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                mode: 'no-cors'
            });
            setSubmitted(true);
        } catch (err) {
            setError('Something went wrong. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <div className="contact-container success-container">
                <div className="success-content">
                    <svg className="success-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 4L12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <h2>Thank you for reaching out!</h2>
                    <p>We'll get back to you as soon as possible.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="contact-container">
            <div className="form-wrapper">
                <div className="form-content">
                    <div className="form-header">
                        <h2>Get in Touch</h2>
                        <p>We'd love to hear from you. Send us a message!</p>
                    </div>

                    {error && (
                        <div className="error-alert">
                            <svg className="alert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10"/>
                                <line x1="12" y1="8" x2="12" y2="12"/>
                                <line x1="12" y1="16" x2="12.01" y2="16"/>
                            </svg>
                            <p>{error}</p>
                        </div>
                    )}

                    <form
                        name="gform"
                        id="gform"
                        className="contact-form"
                        encType="text/plain"
                        target="hidden_iframe"
                        onSubmit={handleSubmit}
                        action="https://docs.google.com/forms/d/e/1FAIpQLScy1iM-erdX2ZaZGqkt5rlksSGK2sFK59LHISRaBxc2Sb0e7g/formResponse?"
                    >
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                name="entry.508287588"
                                id="entry.508287588"
                                required
                                placeholder="John Doe"
                            />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="entry.1219103022"
                                id="entry.1219103022"
                                required
                                placeholder="john@example.com"
                            />
                        </div>

                        <div className="form-group">
                            <label>Message</label>
                            <textarea
                                name="entry.1912912210"
                                id="entry.1912912210"
                                required
                                rows="4"
                                placeholder="Your message here..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`submit-button ${loading ? 'loading' : ''}`}
                        >
                            <svg className="send-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 2L11 13"/>
                                <path d="M22 2L15 22L11 13L2 9L22 2z"/>
                            </svg>
                            <span>{loading ? 'Sending...' : 'Send Message'}</span>
                        </button>
                    </form>
                </div>
            </div>
            <iframe name="hidden_iframe" id="hidden_iframe" className="hidden-iframe"/>
        </div>
    );
};

export default ContactSection;