import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div className='App'>
      <p>Home</p>
      <NavLink to='/page1'>Go to Page 1</NavLink>
      <br />
      <NavLink to='/page2'>Go to Page 2</NavLink>
    </div>
  );
}

export default Home;
