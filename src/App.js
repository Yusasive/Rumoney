 import React from 'react';
import Navbar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {Home, Community, Who, Students, HireTalents, Courses, Contact, About, Blog } from './containers';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Students' component={Students} />
        <Route path='/hiretalents' component={HireTalents} />
        <Route path='/courses' component={Courses} />
        <Route path='/about' component={About} />
        <Route path='/blog' component={Blog} />
        <Route path='/community' component={Community} />
        <Route path='/contact' component={Contact} />
        <Route path='/who' component={Who} />
        
      </Switch>
     <Footer />
    </BrowserRouter>
  );
}

export default App;