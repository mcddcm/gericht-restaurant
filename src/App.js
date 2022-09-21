import React from 'react';
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Awards, Menu } from './container';
import { NavBar } from './components';
import './App.css';

const App = () => (
  <>
    <NavBar />
    <Header />
    <AboutUs />
    <Menu />
    <Chef />
    <Intro />
    <Awards />
    <Gallery />
    <FindUs />
    <Footer />
  </>
)

export default App
