import React, {Suspense, lazy} from 'react';

import Inscription from './core/Inscription';
import Connexion from './core/Connexion';
import Home from './core/Home';
import Articles from './core/Articles.js'
import ProfilAtelier from './core/ProfilAtelier';
import Categories from './core/Categories';
import Modeles from './core/Modeles';
import ArticlesCategorie from './core/ArticlesCategorie';
import DetailArticle from './core/DetailArticle';
import Commande from './dashboard/Commande';
import Modele from './dashboard/Modele';
import Article from './dashboard/Article';
import Client from './dashboard/Client';
import Employe from './dashboard/Employe';
import Account from './dashboard/Account';
import Dashboard from './dashboard/Dashboard';
import DetailCommand from './dashboard/DetailCommand';
import DetailClient from './dashboard/DetailClient';
import DetailEmploye from './dashboard/DetailEmploye';
import NotFound from './components/notFound.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

const home = lazy(()=> import('./core/Home'));


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
          <Route path="/articles/:nameCat" element={<ArticlesCategorie/>} />
          <Route path="/detail_article/:nameArt" element={<DetailArticle/>} />
          <Route path="/articles" element={<Articles/>} />
          <Route path="/modeles" element={<Modeles/>} />
          <Route path="*" element={<NotFound/>} />

          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/commande" element={<Commande/>} />
          <Route path="/dashboard_article" element={<Article/>} />
          <Route path="/dashboard_modele" element={<Modele/>} />
          <Route path="/dashboard_client" element={<Client/>} />
          <Route path="/employe" element={<Employe/>} />
          <Route path="/account" element={<Account/>} />
          <Route path="/detail_commande/:nameCommand" element={<DetailCommand/>} />
          <Route path="/detail_client/:nameClient" element={<DetailClient/>} />
          <Route path="/detail_employe/:nameEmploye" element={<DetailEmploye/>} />
        </Routes>
        </Suspense>
      </BrowserRouter>
      

    </div>
  );
}

export default App;