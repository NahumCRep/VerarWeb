import React from 'react';
import Header from '../components/home-components/Header';
import '../css/home.css';
import SocialMedia from '../components/home-components/SocialMedia';

const Home = () => {
    return(
       <div className="home-page">
           <Header />
           <SocialMedia />
           <div className="home-body">home body</div>
           
           <div>Footer</div>
       </div>
    )
}

export default Home;