// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from '../components/MutualComp/Navbar';
import Update from '../components/announceComp/Update';
import './General.css';


export default function Announce() {
  return (
    <>
    <div className='home'>
      <Navbar/>
      <Update/>
    </div>
    </>
  )
}
