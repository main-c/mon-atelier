import React from 'react';
import './layout.css';


class Layout extends React.Component{

	render(){

		return(

			<div className="wrapper bg-violet">
		        {/* Sidebar */}
		        <nav id="sidebar">
		            <div className="sidebar-header">
		                <div className="d-flex justify-content-start">
							<img src="logo.png" alt="logo_MonAtelier" width="80px" />
							<h5 className="text-white mt-5 ms-1">MonAtelier</h5>
						</div>
		            </div>

		            <ul className="list-unstyled components">
		                
		                <li className="active">
		                    <a href="#">Profil</a>
		                </li>

		                <li>
		                    <a href="#modeleSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Modèles</a>
		                    <ul className="collapse list-unstyled" id="modeleSubmenu">
		                        <li>
		                            <a href="#">Liste modèles</a>
		                        </li>
		                        <li>
		                            <a href="#">Ajout modèle</a>
		                        </li>
		                    </ul>
		                </li>

		                <li>
		                    <a href="#commandeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Commandes</a>
		                    <ul className="collapse list-unstyled" id="commandeSubmenu">
		                        <li>
		                            <a href="#">Liste commandes</a>
		                        </li>
		                        <li>
		                            <a href="#">Ajout commande</a>
		                        </li>
		                    </ul>
		                </li>
		                
		                <li>
		                    <a href="#employeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Employés</a>
		                    <ul className="collapse list-unstyled" id="employeSubmenu">
		                        <li>
		                            <a href="#">Liste employés</a>
		                        </li>
		                        <li>
		                            <a href="#">Ajouter employés</a>
		                        </li>
		                    </ul>
		                </li>
		                <li>
		                    <a href="#clientSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Clients</a>
		                    <ul className="collapse list-unstyled" id="clientSubmenu">
		                        <li>
		                            <a href="#">Liste clients</a>
		                        </li>
		                        <li>
		                            <a href="#">Ajouter client</a>
		                        </li>
		                    </ul>
		                </li>
		            </ul>

		            <ul className="list-unstyled bottom">
		                <li>
		                    <a href="" className="account">Account</a>
		                </li>
		                <li>
		                    <a href="" className="logout">Logout</a>
		                </li>
		            </ul>
		        </nav>

		        {/* Page Content */}
		        <div id="content" className="bg-light">

		            <nav className="navbar navbar-expand-lg navbar-light">
		                <div className="container-fluid">

		                    <button type="button" id="sidebarCollapse" className="border-0 p-2 bg-white fw-bold text-violet">
		                        <i className="fa fa-bars me-1"></i>
		                        <span>Menu</span>
		                    </button>
		                    <button className="btn btn-dark d-inline-block d-lg-none ms-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		                        <i className="fa fa-align-justify"></i>
		                    </button>

		                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
		                        <ul className="nav navbar-nav ms-auto">
		                            <li className="nav-item active">
		                                <a className="nav-link text-primary" href="#">Account</a>
		                            </li>
		                            <li className="nav-item">
		                                <a className="nav-link text-danger" href="#">Logout</a>
		                            </li>
		                        </ul>
		                    </div>
		                </div>
		            </nav>

		            <div className="container-fluid">
		            	<h1 className="text-center text-violet mt-5"> Contenus </h1>
		            </div>

		        </div>
		    </div>

		);
	}
}

export default Layout;