// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from '../components/MutualComp/Navbar';
import Contact from '../components/AboutComp/Contact';
import AboutComp from '../components/AboutComp/AboutComp';

export default function About() {
  return (
    <div className='about'>
      <div><AboutComp/></div>
      <div id='contact'><Contact/></div>
      <Navbar/>
      </div>
  )
}
