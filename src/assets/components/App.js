import React from 'react';
import '../css/app.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Footer from '../components/footer/Footer';
import { Home, AboutUs, Products } from '../pages/component-pages';

const App = () => {
    return(
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />  
                <Route path="/products" component={Products} /> 
                <Route path="/aboutus" component={AboutUs} />   
            </Switch> 
            <Footer />  
        </Router>
    )
}

export default App;