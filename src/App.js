import React from 'react';
import { Element } from 'react-scroll';
import Home from './components/Home';
import Showcase from './components/Showcase';
import Archive from './components/Archive';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
    return (
        <div>
            <Navbar />
            <Element name="home"><Home /></Element>
            <Element name="showcase"><Showcase /></Element>
            <Element name="archive"><Archive /></Element>
            <Element name="contact"><Contact /></Element>
        </div>
    );
}

export default App;
