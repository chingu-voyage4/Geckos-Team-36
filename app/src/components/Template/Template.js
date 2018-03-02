import React, { Component } from 'react';
import './Template.css';

import Header from './Header/Header';
import Hero from './Hero/Hero';
import CTA from './CTA/CTA';
import Grid from './Grid/Grid';
import Divider from './Divider/Divider';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

class Template extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <CTA />
        <Grid />
        <Divider />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Template;