import React from 'react';
import Banner from '../Banner/Banner';
import './HomePage.css'
import Navbar from '../Navbar/Navbar';
import FilmRows from '../FilmRows/FilmRows';
import Footer from '../Footer/Footer';

const HomePage = () => {
  return (
    <div className='homePage'>
    <Navbar/>
    <Banner/>
    <FilmRows/>
    <Footer/>
    </div>
    
  );
};

export default HomePage;