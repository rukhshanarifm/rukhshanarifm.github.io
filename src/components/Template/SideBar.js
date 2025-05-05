import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="Profile" />
      </Link>
        <p>
        At Your Data Buddies (YDB), we help organizations make meaningful decisions with their data. Whether it’s crafting a data roadmap, creating dashboards, setting up data systems, or moving to the cloud, we make data simpler and more useful. If you’re looking for support in building data capacity, whether through strategy, dashboards, or infrastructure, let’s connect! .  </p>
      {/* <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul> */}
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Code sourced from <Link to="/">https://github.com/mldangelo/personal-site</Link>
      </p>
    </section>
  </section>
);

export default SideBar;
