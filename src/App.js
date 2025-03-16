import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Element } from 'react-scroll';
import Home from './components/Home';
import Showcase from './components/Showcase';
import ShowcaseDetail from './components/ShowcaseDetail';
import Archive from './components/Archive';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import './index.css';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/showcase" element={<Showcase />} />
                <Route path="/showcase/:id" element={<ShowcaseDetail />} />
                <Route path="/archive" element={<Archive />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;


