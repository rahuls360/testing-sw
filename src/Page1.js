import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';

function Page1() {
  return (
    <div className='App'>
      <p>Page 1</p>
      <NavLink to='/'>Go Home</NavLink>
      <br />
      <NavLink to='/page2'>Go to Page 2</NavLink>
    </div>
  );
}

export default Page1;
