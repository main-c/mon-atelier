import React from 'react';
import './layout.css';
import { Link } from "react-router-dom";


function Layout(props){


	return(

		<div className="wrapper bg-violet">
	        {/* Sidebar */}
	        <nav id="sidebar">
	            <div className="sidebar-header">
	            	<Link to="/">
		                <div className="d-flex justify-content-start">
							<img src="logo.png" alt="logo_MonAtelier" width="80px" />
							<h5 className="text-white mt-5 ms-1">MonAtelier</h5>
						</div>
					</Link>
	            </div>

	            <ul className="list-unstyled components">
	                
	                <li className="nav-item active">
	                    <Link to="/dashboard">
	                    	<i className="fa fa-dashboard me-4"></i>
	                    	Dashboard
	                    </Link>
	                </li>

	                <li className="nav-item">
	                    <Link to="/dashboard_modele">
	                    	<i className="fa fa-google-wallet me-4"></i>
	                    	Modèles
	                    </Link>
	                </li>

	                <li className="nav-item">
	                    <Link to="/dashboard_article">
	                    	<i className="fa fa-clipboard me-4"></i>
	                    	Articles
	                    </Link>
	                </li>

	                <li className="nav-item">
	                    <Link to="/commande">
	                    	<i className="fa fa-shopping-bag me-4"></i>
	                    	Commandes
	                    </Link>
	                </li>
	                
	                <li className="nav-item">
	                    <Link to="/employe">
	                    	<i className="fa fa-user me-4"></i>
	                    	Employés
	                    </Link>
	                </li>

	                <li className="nav-item">
	                    <Link to="/dashboard_client">
	                    	<i className="fa fa-users me-4"></i>
	                    	Clients
	                    </Link>
	                </li>
	            </ul>

	            <ul className="list-unstyled bottom">
	                <li>
	                    <Link to="/account" className="account">
	                    	<i className="fa fa-user me-2"></i>
	                    	Account
	                    </Link>
	                </li>
	                <li>
	                    <Link to="/" className="logout">
	                    	<i className="fa me-2 fa-sign-out"></i>
	                    	Logout
	                    </Link>
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
	                                <Link className="nav-link bg-light rounded-circle" to="/account">
	                                	<i className="fa fs-5 text-violet mx-1 fa-user"></i>
	                                </Link>
	                            </li>
	                            <li className="nav-item">
	                                <Link className="nav-link text-light mx-lg-3" to="/">
	                                	<i className="fa fs-5 my-auto fa-sign-out"></i>
	                                </Link>
	                            </li>
	                        </ul>
	                    </div>
	                </div>
	            </nav>

	            <div className="container-fluid">

	            	{props.content}
	            	
	            </div>

	        </div>
	    </div>

	);
}

export default Layout;