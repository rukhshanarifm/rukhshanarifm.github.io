import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact YDB at hello@yourdatabuddies.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2>
            <Link to="/contact">Contact</Link>
          </h2>
        </div>
      </header>
      <h3>Need Our Expertise? Or Just Want to Chat About What We Do?</h3>
        <p>We'd love to hear from you! Whether you're looking for our services or simply want to explore how we can collaborate, feel free to reach out. We're always excited to connect and discuss how we can make data work for you!</p>
      <h3>Schedule a Meeting</h3>
      <iframe src="https://calendly.com/hello-yourdatabuddies/" width="100%" height="400" frameborder="0"></iframe>
      <div className="email-at">
        <h3>Email Us</h3>
        <p></p>
        <EmailLink />
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
