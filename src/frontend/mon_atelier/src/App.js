import React, {Suspense} from 'react';

import Inscription from './core/Inscription';
import Connexion from './core/Connexion';
import Home from './core/Home';
import ProfilAtelier from './core/ProfilAtelier';
import Categories from './core/Categories';
import ArticlesCategorie from './core/ArticlesCategorie';
import DetailArticle from './core/DetailArticle';
import Commande from './dashboard/Commande';
import Modele from './dashboard/Modele';
import Article from './dashboard/Article';
import Client from './dashboard/Client';
import Account from './dashboard/Account';
import Dashboard from './dashboard/Dashboard';
import DetailCommand from './dashboard/DetailCommand';
import DetailClient from './dashboard/DetailClient';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="container-fluid p-0">

      
      <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>

        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/signup" element={<Inscription/>} />
          <Route path="/login" element={<Connexion/>} />
          <Route path="/profil_atelier" element={<ProfilAtelier/>} />
          <Route path="/categories" element={<Categories/>} />
          <Route path="/articles/:idCategory" element={<ArticlesCategorie/>} />
          <Route path="/detail_article" element={<DetailArticle/>} />

          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/commande" element={<Commande/>} />
          <Route path="/dashboard_article" element={<Article/>} />
          <Route path="/dashboard_modele" element={<Modele/>} />
          <Route path="/dashboard_client" element={<Client/>} />
          <Route path="/account" element={<Account/>} />
          <Route path="/detail_commande" element={<DetailCommand/>} />
          <Route path="/detail_client" element={<DetailClient/>} />
        </Routes>
        </Suspense>
      </BrowserRouter>
      

    </div>
  );
}

export default App;