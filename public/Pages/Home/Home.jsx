import React from 'react';
import './Home.css';
import Image from '../../components/Image';
import Side from '../../components/Side';

const Home = () => {
  return (
    <div className='imgContainer flex items-center justify-evenly flex-wrap'> 
    <div className='image-container'>
        <Image />
      </div>
      <div className='side-container'>
        <Side />
      </div>
      
    </div>
  );
};

export default Home;
