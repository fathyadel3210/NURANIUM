import React from 'react';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import ShopList from './ShopList';
import Trending from './Trending';
import Merch from './Merch';
import About from './About';
import Latest from './Latest';
import Footer from './Footer';


const App = () => {
    return(
        <React.Fragment>
            <Navbar/>
            <LandingPage/>
            <ShopList/>
            <Trending/>
            <Merch/>
            <About/>
            <Latest/>
            <Footer/>
        </React.Fragment>
    )
}


export default App;