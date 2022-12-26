import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import SinglePlayer from './pages/SinglePlayer';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/singleplayer" element={<SinglePlayer />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
        </Router>
    );
};

export default App;
