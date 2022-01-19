import React, {Component} from 'react'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ArticleAll from '../components/articleAll.js'

import '../core/profilAtelier.css'

import axios from 'axios';

class Articles extends React.Component{

	render(){
		return(
		<>

			<Navigation />


				<div className="pt-lg-5 text-center" style={{ backgroundImage: 'url(images/bgSignup.jpg)', 
				height:'65vh', width:'99vw', backgroundSize:'cover'}}>
					<div className="container">
						
					<h1 className="text-violet ps-lg-5 ps-3 fw-bold fs-1 mb-0 pt-5 mt-5">Tous les articles</h1>
					<p className="pt-3 ps-lg-5 ps-3 fs-4 mb-4 pb-3 text-dark" style={{fontWeight:'lightner'}}>
						La plate-forme adequate où les fans de modes peuvent trouver
						<br/>Les modèles de rêves
					</p>
					<form className="d-flex w-75 mx-auto bg-white ">
				        <input className=" border-0 p-3 Search"   type="search" placeholder="Rechercher un élément" aria-label="Search" />
				        <button className="border-0 fw-bold ps-3 pe-3"   style={{color:"white", backgroundColor: '#443369'}} type="submit">Search</button>
				        <button className="btn btn-outline-success" type="submit">Search</button>
				     </form>
					</div>

				</div>
				<div className="filters w-100" style={{backgroundColor:"pink", height:'12vh'}}>
					<div class="row w-100 container fs-5 mb-5 mx-auto">  
            	<div class="row mx-auto fs-5 text-center" style={{width: '100vw', borderRadius: '0.9rem'}}>
                <div class="mb-2 w-100 d-flex mt-2" style={{overflowX: "hidden", flexWrap: "wrap"}}>
                        <div class="rounded-pill pe-2 ps-2 cat" style={{margin: "2px"}}><a href="#" style={{paddingLeft: "15px", paddingRight: "15px", fontSize:"1rem", color: "grey", textDecoration: "none"}}>name</a></div>
                        <div class="rounded-pill pe-2 ps-2 cat" style={{margin: "2px"}}><a href="#" style={{paddingLeft: "15px", paddingRight: "15px", fontSize:"1rem", color: "grey", textDecoration: "none"}}>name</a></div>
                        <div class="rounded-pill pe-2 ps-2 cat" style={{margin: "2px"}}><a href="#" style={{paddingLeft: "15px", paddingRight: "15px", fontSize:"1rem", color: "grey", textDecoration: "none"}}>name</a></div>
                    
                </div>
        </div>
        </div>
				</div>

			<ArticleAll />

			<Footer />
		</>
			);
	}
}

export default Articles;