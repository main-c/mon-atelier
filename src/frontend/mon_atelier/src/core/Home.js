import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Categories from '../components/categories'
import Articles from '../components/Article'
import Slide from '../components/slide.js'


class Home extends React.Component{

	render(){
		return(
			
			<div className="Integration">
				<Navigation />
				
				<div className="pt-lg-5" style={{ backgroundImage: 'url(images/banner.jpg)', 
				height:'90vh', width:'99vw', backgroundSize:'cover'}}>

					<h1 className="text-violet ps-lg-5 ps-3 fw-bold fs-1 mb-0 pt-5">MonAtelier,</h1>
					<p className="pt-3 ps-lg-5 ps-3 fs-4 mb-4 pb-5" style={{fontWeight:'lightner'}}>
						l’outil idéal pour tous vos besoins de 
						<br/>couture
					</p>
					<Link to="/profil" className="border-0 rounded-1 text-light fs-5 text-center pt-2 mt-lg-1 mt-5 pb-2 ps-3 pe-3 ms-lg-5 ms-3" style={{background:'#443369'}}>voir les modèles</Link>

				</div>

				<Slide />
				
				<Categories />

				<Articles />

				<div className="container-fluid mb-lg-5" id="a_propos">
					<p className='fw-bold text-center mb-0 mt-5 fs-3'>A PROPOS</p>
					<div className="mx-auto" style={{height:'4px', width:'100px', background:'#FF5566'}}></div>

					<div className="row container mx-auto d-flex">
						<div className="col-lg-7">
							<img src="images/APropos.png" className="img-fluid" alt="" style={{width:'500px', height:'50Opx'}}  />
						</div>
						<div className="col-lg-5 mt-lg-5">
							<h3 className="text-violet text-lg-end text-start ps-lg-5 fw-bold fs-2 pt-lg-2">MonAtelier,</h3>	
							<div className="ms-lg-auto" style={{height:'6px', width:'100px', background:'#443369'}}></div><br />
							<p className="text-lg-end">
								MonAtelier est une application web de couture dont l’objectif principal est de numériser 
								l’organisation des activités des couturiers. En plus de créer une plate-forme qui permettra à chaque atelier 
								ou couturiers de pouvoir partager ses modèles en ligne, nous permettrons la gestion des informations de 
								leurs clients telle que leurs mesures, 
								leurs commandes passées et les dates de livraison ainsi que l'amélioration de la visibilité de l’atelier.
							</p>
						</div>	
					</div>
				</div>

				<div className="container-fluid mb-5" id="contact">
					<div className='fw-bold text-center mt-5 mt-lg-0 fs-3'>CONTACT</div>
					<div className="mx-auto mb-5" style={{height:'4px', width:'100px', background:'#FF5566'}}></div>
					
					<div className="container row pt-3 mx-auto">

						<div className="card p-0 col-lg-1 mx-auto border-0" style={{width: "8rem"}}>
						  <img src="images/main-c.jpg" className="card-img-top mx-auto p-0 rounded-circle" alt="..." style={{width:'100px', height:'100px'}}  />
						  <div className="card-body ps-0">
						    <h6 className="card-title text-center">Yannik Kadjie</h6>
						    <div className="mx-auto text-center">
						    	<a href="https://twitter.com/YannikKadjie"><img src="images/twitter.png" className="card-img-top p-0 mx-auto me-3" alt="..." style={{width:'30px', height:'3Opx'}}  /></a>
						    	<a href="mailto:yannikkwc@gmail.com"><img src="images/gmail.png" className="card-img-top p-0 mx-auto" alt="..." style={{width:'30px', height:'3Opx'}}  /></a><br />
						    </div>
						    <div className="mx-auto mt-3 text-center"><i>Backend dev</i></div>
						  </div>
						</div>

						<div className="card p-0 col-lg-1 mx-auto border-0" style={{width: "8rem"}}>
						  <img src="images/jugalux.png" className="card-img-top mx-auto p-0 rounded-circle" alt="..." style={{width:'100px', height:'100px'}}  />
						  <div className="card-body ps-0">
						    <h6 className="card-title text-center">Gaëlle Tamho</h6>
						    <div className="mx-auto text-center">
						    	<a href="https://twitter.com/Jugalux1"><img src="images/twitter.png" className="card-img-top p-0 mx-auto me-3" alt="..." style={{width:'30px', height:'3Opx'}}  /></a>
						    	<a href="mailto:jugalux111@gmail.com"><img src="images/gmail.png" className="card-img-top p-0 mx-auto" alt="..." style={{width:'30px', height:'3Opx'}}  /></a><br />
						    </div>
						    <div className="mx-auto mt-3 text-center"><i>Frontend dev</i></div>
						  </div>
						</div>

						<div className="card p-0 col-lg-1 mx-auto border-0" style={{width: "8rem"}}>
						  <img src="images/flore.jpg" className="card-img-top mx-auto p-0 rounded-circle" alt="..." style={{width:'100px', height:'100px'}}  />
						  <div className="card-body ps-0">
						    <h6 className="card-title text-center">Raïssa Tiomela</h6>
						    <div className="mx-auto text-center">
						    	<a href="#"><img src="images/twitter.png" className="card-img-top p-0 mx-auto me-3" alt="..." style={{width:'30px', height:'3Opx'}}  /></a>
						    	<a href="mailto:floretiomela@gmail.com"><img src="images/gmail.png" className="card-img-top p-0 mx-auto" alt="..." style={{width:'30px', height:'3Opx'}}  /></a><br />
						    </div>
						    <div className="mx-auto mt-3 text-center"><i>Frontend dev</i></div>
						  </div>
						</div>

						<div className="card p-0 col-lg-1 mx-auto border-0" style={{width: "8rem"}}>
						  <img src="images/nrsoft.jpg" className="card-img-top mx-auto p-0 rounded-circle" alt="..." style={{width:'100px', height:'100px'}}  />
						  <div className="card-body ps-0">
						    <h6 className="card-title text-center">Rainsong Ngoutsop</h6>
						    <div className="mx-auto text-center">
						    	<a href="https://twitter.com/Gourain0"><img src="images/twitter.png" className="card-img-top p-0 mx-auto me-3" alt="..." style={{width:'30px', height:'3Opx'}}  /></a>
						    	<a href="mailto:ngoutsoprainsong@gmail.com"><img src="images/gmail.png" className="card-img-top p-0 mx-auto" alt="..." style={{width:'30px', height:'3Opx'}}  /></a><br />
						    </div>
						    <div className="mx-auto mt-3 text-center"><i>Frontend dev</i></div>
						  </div>
						</div>

						<div className="card p-0 col-lg-1 mx-auto border-0" style={{width: "8rem"}}>
						  <img src="images/edghi.jpg" className="card-img-top mx-auto p-0 rounded-circle" alt="..." style={{width:'100px', height:'100px'}}  />
						  <div className="card-body ps-0">
						    <h6 className="card-title text-center">Ghislain Makolle</h6>
						    <div className="mx-auto text-center">
						    	<a href="https://twitter.com/MakolleG"><img src="images/twitter.png" className="card-img-top p-0 mx-auto me-3" alt="..." style={{width:'30px', height:'3Opx'}}  /></a>
						    	<a href="mailto:edghimakoll@gmail.com"><img src="images/gmail.png" className="card-img-top p-0 mx-auto" alt="..." style={{width:'30px', height:'3Opx'}}  /></a><br />
						    </div>
						    <div className="mx-auto mt-3 text-center"><i>Backend dev</i></div>
						  </div>
						</div>
					</div>

				</div>

				<Footer />
			</div>

		);
	}

}

export default Home;