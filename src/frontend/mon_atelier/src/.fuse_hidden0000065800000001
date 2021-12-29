import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Inscription from './core/Inscription';
import Connexion from './core/Connexion';
import Home from './core/Home';
import ProfilAtelier from './core/ProfilAtelier';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="container-fluid">

      <Navigation />
      <BrowserRouter>

        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/signup" element={<Inscription/>} />
          <Route path="/login" element={<Connexion/>} />
          <Route path="/profil" element={<ProfilAtelier/>} />
        </Routes>

      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
