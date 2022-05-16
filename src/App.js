import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { Home, AboutUs, Product } from './pages';

const App = () => {
    return(
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />  
                <Route path="/products" component={Product} /> 
                <Route path="/aboutus" component={AboutUs} />   
            </Switch> 
            <Footer />  
        </Router>
    )
}

export default App;