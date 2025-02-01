

import './ContactSection.css';


const ContactSection = () => {
    return (
        <div className="contact-container">
            <section className="section contact-section">
                <form name="gform" id="gform" encType="text/plain" target="hidden_iframe" onSubmit="submitted=true;"
                      action="https://docs.google.com/forms/d/e/1FAIpQLSfCCpgHY_NDm-pDQWDRyb_jKIvvYZgJdW2aEadjKkl5YHi59Q/formResponse?">
                    First name:<br/>
                    <input type="text" name="entry.710042333" id="entry.710042333"/><br/>
                    Last name:<br/>
                    <input type="text" name="entry.749304698" id="entry.749304698"/>
                    <input type="submit" value="Submit"/>
                </form>
                <iframe name="hidden_iframe" id="hidden_iframe" style={{display: "none"}} onLoad="if(submitted) {}"/>
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