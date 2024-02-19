// App.js
import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';
import HomePage from './HomePage';


const App = () => {
  return (
    <>
      <NavBar/>
      <Outlet/>
      <HomePage/>
    </>
  );
};

export default App;




