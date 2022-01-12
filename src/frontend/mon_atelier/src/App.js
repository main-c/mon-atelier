import React from 'react';

import Inscription from './core/Inscription';
import Connexion from './core/Connexion';
import Home from './core/Home';
import ProfilAtelier from './core/ProfilAtelier';
import Categories from './core/Categories';
import ArticlesCategorie from './core/ArticlesCategorie';
import DetailArticle from './core/DetailArticle';
import HomeTest from './core/HomeTest'
import Layout from './dashboard/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="container-fluid p-0">

      
      <BrowserRouter>

        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/signup" element={<Inscription/>} />
          <Route path="/login" element={<Connexion/>} />
          <Route path="/profil" element={<ProfilAtelier/>} />
          <Route path="/categories" element={<Categories/>} />
          <Route path="/articles" element={<ArticlesCategorie/>} />
          <Route path="/detail_article" element={<DetailArticle/>} />
          <Route path="/layout" element={<Layout/>} />
          <Route path="/test" element={<HomeTest/>}  />
        </Routes>

      </BrowserRouter>
      

    </div>
  );
}

export default App;