import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';
import './Home.css'

const Home = () => {
  const navigation = useNavigation();
 
  return (
    
    <div className='nabber'>
      <Header></Header>
      <div>{navigation.state === 'loading' && 'Loading...'}</div>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;