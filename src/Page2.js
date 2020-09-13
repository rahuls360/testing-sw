import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';

function Page2() {
  return (
    <div className='App'>
      <p>Page 2</p>
      <NavLink to='/'>Go Home</NavLink>
      <br />
      <NavLink to='/page1'>Go to Page 1</NavLink>
    </div>
  );
}

export default Page2;
