import React from 'react';
import { Link } from 'react-router-dom';


class Home extends React.Component{

	render(){
		return(
			
			<div className="Integration">
			
				<div className="pt-lg-5" style={{ backgroundImage: 'url(images/banner.jpg)', 
				height:'90vh', width:'99vw', backgroundSize:'cover'}}>

					<h1 className="text-violet ps-5 fw-bold fs-1 mb-0 pt-5">MonAtelier,</h1>
					<p className="pt-lg-3 ps-5 fs-4 mb-5" style={{fontWeight:'lightner'}}>
						l’outil idéal pour tous vos besoins de 
						<br/>couture
					</p>
					<Link to="/profil" className="border-0 rounded-1 text-light fs-5 text-center pt-2 pb-2 ps-3 pe-3 ms-5" style={{background:'#443369'}}>voir les modèles</Link>

				</div>

				<div className="container px-auto pt-5">

					<p className='fw-bold text-center mt-5 fs-3' id="categories">CATEGORIES</p>
					<div className="mx-auto mb-5" style={{height:'4px', width:'100px', background:'#FF5566'}}></div>
					<div className="row pt-3 mx-auto categories">

						<div className="col-lg-4 mx-auto mb-3 mt-3 p-0 d-flex border rounded" style={{height:'100px', width:'350px'}}>
						    <img src="images/matoul.jpg" className="rounded-start" height="100px" alt="..." />
						    <div className="my-auto">
						        <a href="" className="text-violet fs-4 ms-5">Catégorie 1</a>
						    </div>
						</div>
						<div className="col-lg-4 mx-auto mb-3 mt-3 p-0 d-flex border rounded" style={{height:'100px', width:'350px'}}>
						    <img src="images/matoul.jpg" className="rounded-start" height="100px" alt="..." />
						    <div className="my-auto">
						        <a href="" className="text-violet fs-4 ms-5">Catégorie 1</a>
						    </div>
						</div>
						<div className="col-lg-4 mx-auto mb-3 mt-3 p-0 d-flex border rounded" style={{height:'100px', width:'350px'}}>
						    <img src="images/matoul.jpg" className="rounded-start" height="100px" alt="..." />
						    <div className="my-auto">
						        <a href="" className="text-violet fs-4 ms-5">Catégorie 1</a>
						    </div>
						</div>
						<div className="col-lg-4 mx-auto mb-3 mt-3 p-0 d-flex border rounded" style={{height:'100px', width:'350px'}}>
						    <img src="images/matoul.jpg" className="rounded-start" height="100px" alt="..." />
						    <div className="my-auto">
						        <a href="" className="text-violet fs-4 ms-5">Catégorie 1</a>
						    </div>
						</div>
						<div className="col-lg-4 mx-auto mb-3 mt-3 p-0 d-flex border rounded" style={{height:'100px', width:'350px'}}>
						    <img src="images/matoul.jpg" className="rounded-start" height="100px" alt="..." />
						    <div className="my-auto">
						        <a href="" className="text-violet fs-4 ms-5">Catégorie 1</a>
						    </div>
						</div>
						<div className="col-lg-4 mx-auto mb-3 mt-3 p-0 d-flex border rounded" style={{height:'100px', width:'350px'}}>
						    <img src="images/matoul.jpg" className="rounded-start" height="100px" alt="..." />
						    <div className="my-auto">
						        <a href="" className="text-violet fs-4 ms-5">Catégorie 1</a>
						    </div>
						</div>

					</div>
				</div>
				
				<div className="container-fluid px-0 pb-lg-5">
					<div className='fw-bold text-center mt-5 fs-3'>NOS ARTICLES</div>
					<div className="mx-auto mb-5" style={{height:'4px', width:'100px', background:'#FF5566'}}></div>

					<div className="row pt-3 mx-auto bg-violet py-5">

						<div className="col-lg-3 card p-0 mt-3 mx-auto border-0 articles" style={{width: "18rem"}}>
							<img src="images/banner1.jpg" className="card-img-top p-0 imag" alt="..." style={{width:'100%'}}  />
							<div className="card-body ps-2">
								<h5 className="card-title">Habillemnt de femme</h5>
								<p className="card-text">200 000XAF <br /><span>ajouté le 22 dec 2021</span></p>
								<div className="d-flex">
									<img src="images/logo.png" className="card-img-top p-0" alt="..." style={{width:'50px', height:'5Opx'}}  />
									<div className="ms-2 mt-3">Kim_atelier</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 card p-0 mt-3 mx-auto border-0" style={{width: "18rem"}}>
							<img src="images/banner1.jpg" className="card-img-top p-0" alt="..." style={{width:'100%'}}  />
							<div className="card-body ps-2">
								<h5 className="card-title">Habillemnt de femme</h5>
								<p className="card-text">200 000XAF <br /><span>ajouté le 22 dec 2021</span></p>
								<div className="d-flex">
									<div>
										<img src="images/logo.png" className="card-img-top p-0" alt="..." style={{width:'50px', height:'5Opx'}}  />
									</div>
									<div className="ms-2 mt-3">Kim_atelier</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 card p-0 mt-3 mx-auto border-0" style={{width: "18rem"}}>
							<img src="images/banner1.jpg" className="card-img-top p-0" alt="..." style={{width:'100%'}}  />
							<div className="card-body ps-2">
								<h5 className="card-title">Habillemnt de femme</h5>
								<p className="card-text">200 000XAF <br /><span>ajouté le 22 dec 2021</span></p>
								<div className="d-flex">
									<div>
										<img src="images/logo.png" className="card-img-top p-0" alt="..." style={{width:'50px', height:'5Opx'}}  />
									</div>
									<div className="ms-2 mt-3">Kim_atelier</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 card p-0 mt-3 mx-auto border-0" style={{width: "18rem"}}>
							<img src="images/banner1.jpg" className="card-img-top p-0" alt="..." style={{width:'100%'}}  />
							<div className="card-body ps-2">
								<h5 className="card-title">Habillemnt de femme</h5>
								<p className="card-text">200 000XAF <br /><span>ajouté le 22 dec 2021</span></p>
								<div className="d-flex">
									<div>
										<img src="images/logo.png" className="card-img-top p-0" alt="..." style={{width:'50px', height:'5Opx'}}  />
									</div>
									<div className="ms-2 mt-3">Kim_atelier</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 card p-0 mt-3 mx-auto border-0" style={{width: "18rem"}}>
							<img src="images/banner1.jpg" className="card-img-top p-0" alt="..." style={{width:'100%'}}  />
							<div className="card-body ps-2">
								<h5 className="card-title">Habillemnt de femme</h5>
								<p className="card-text">200 000XAF <br /><span>ajouté le 22 dec 2021</span></p>
								<div className="d-flex">
									<div>
										<img src="images/logo.png" className="card-img-top p-0" alt="..." style={{width:'50px', height:'5Opx'}}  />
									</div>
									<div className="ms-2 mt-3">Kim_atelier</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 card p-0 mt-3 mx-auto border-0" style={{width: "18rem"}}>
							<img src="images/banner1.jpg" className="card-img-top p-0" alt="..." style={{width:'100%'}}  />
							<div className="card-body ps-2">
								<h5 className="card-title">Habillemnt de femme</h5>
								<p className="card-text">200 000XAF <br /><span>ajouté le 22 dec 2021</span></p>
								<div className="d-flex">
									<div>
										<img src="images/logo.png" className="card-img-top p-0" alt="..." style={{width:'50px', height:'5Opx'}}  />
									</div>
									<div className="ms-2 mt-3">Kim_atelier</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 card p-0 mt-3 mx-auto border-0" style={{width: "18rem"}}>
							<img src="images/banner1.jpg" className="card-img-top p-0" alt="..." style={{width:'100%'}}  />
							<div className="card-body ps-2">
								<h5 className="card-title">Habillemnt de femme</h5>
								<p className="card-text">200 000XAF <br /><span>ajouté le 22 dec 2021</span></p>
								<div className="d-flex">
									<div>
										<img src="images/logo.png" className="card-img-top p-0" alt="..."style={{height:'6px', width:'100px', background:'#FF5566'}}									<div className="ms-2 mt-3">Kim_atelier</div>
								</div>
							</div>
						</div>

					</div>
				</div>

				<div className="container-fluid" id="a_propos mb-lg-5">
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
								ou couturiers de pouvoir partager ses modèles en ligne, nous permettrostyle={{height:'6px', width:'100px', background:'#FF5566'}}lle que leurs mesures, 
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
						    <dFrontend devuto text-center">
						    	<a href="#"><img src="images/twitter.png" className="card-img-top p-0 mx-auto me-3" alt="..." style={{width:'30px', height:'3Opx'}}  /></a>
						    	<a href="#"><img src="images/gmail.png" className="card-img-top p-0 mx-auto" alt="..." style={{width:'30px', height:'3Opx'}}  /></a><br />
						    </div>
						    <div className="mx-auto mt-3 text-center"><i>Backend dev</i></div>
						  </div>
						</div>

						<div className="card p-0 col-lg-1 mx-auto border-0" style={{width: "8rem"}}>
						  <img src="images/jugalux.png" className="card-img-top mx-auto p-0 rounded-circle" alt="..." style={{width:'100px', height:'100px'}}  />
						  <div className="card-body ps-0">
						    <h6 className="card-title text-center">Gaëlle Tamho</h6>
						    <div classNaFrontend devnter">
						    	<a href="#"><img src="images/twitter.png" className="card-img-top p-0 mx-auto me-3" alt="..." style={{width:'30px', height:'3Opx'}}  /></a>
						    	<a href="#"><img src="images/gmail.png" className="card-img-top p-0 mx-auto" alt="..." style={{width:'30px', height:'3Opx'}}  /></a><br />
						    </div>
						    <div className="mx-auto mt-3 text-center"><i>Frontend dev</i></div>
						  </div>
						</div>

						<div className="card p-0 col-lg-1 mx-auto border-0" style={{width: "8rem"}}>
						  <img src="images/flore.jpg" className="card-img-top mx-auto p-0 rounded-circle" alt="..." style={{width:'100px', height:'100px'}}  />
						  <div className="card-body ps-0">
						    <h6 className="card-title text-center">Raïssa Tiomela</h6>						    <div className="mx-auto tFrontend dev    	<a href="#"><img src="images/twitter.png" className="card-img-top p-0 mx-auto me-3" alt="..." style={{width:'30px', height:'3Opx'}}  /></a>
						    	<a href="#"><img src="images/gmail.png" className="card-img-top p-0 mx-auto" alt="..." style={{width:'30px', height:'3Opx'}}  /></a><br />
						    </div>
						    <div className="mx-auto mt-3 text-center"><i>Frontend dev</i></div>
						  </div>
						</div>

						<div className="card p-0 col-lg-1 mx-auto border-0" style={{width: "8rem"}}>
						  <img src="images/nrsoft.jpg" className="card-img-top mx-auto p-0 rounded-circle" alt="..." style={{width:'100px', height:'100px'}}  />
						  <div className="card-body ps-0">
						    <h6 className="card-title text-center">Rainsong Ngoutsop</h6>
						    <div className="mx-auto text-center"Frontend devf="#"><img src="images/twitter.png" className="card-img-top p-0 mx-auto me-3" alt="..." style={{width:'30px', height:'3Opx'}}  /></a>
						    	<a href="#"><img src="images/gmail.png" className="card-img-top p-0 mx-auto" alt="..." style={{width:'30px', height:'3Opx'}}  /></a><br />
						    </div>
						    <div className="mx-auto mt-3 text-center"><i>Frontend dev</i></div>
						  </div>
						</div>

						<div className="card p-0 col-lg-1 mx-auto border-0" style={{width: "8rem"}}>
						  <img src="images/edghi.jpg" className="card-img-top mx-auto p-0 rounded-circle" alt="..." style={{width:'100px', height:'100px'}}  />
						  <div className="card-body ps-0">
						    <h6 className="card-title text-center">Ghislain Makolle</h6>
						    <div className="mx-auto text-center">
						    Frontend devsrc="images/twitter.png" className="card-img-top p-0 mx-aut
				<div className="">
					   <div className=" pt-3 mt-2 text-white" style={{backgroundColor:'#443369'}}>
				        <div className="container-fluid">
				            <div
				                className="row d-flex align-items-center">
				                <div className="col-lg-4 ps-5">
				                    <div>
				                       <a href="#"><img src="images/logo.png" className="card-img-top mx-auto p-0 me-3 rounded-pill" alt="..." style={{width:'100px', height:'100px'}} /> <span className="text-white fs-2 fw-bold">MonAtelier</span></a>
				                    </div>
				                    <div className="w-50">
				                         MonAtelier est une application web de couture dont l’objectif 
				                         principal est de numériser l’organisation des activités des couturiers
				                    </div>
				                </div>
				                <div className="col-lg-4  text-center">
				                	<span className="text-white fs-3 fw-bold">Liens rapides</span>
				                    <div className="active">
				                    	<a href="" style={{paddingTop: '60px'}}>Accueil</a><br className="mb-3 mt-2"/>
				                    	<a href="" style={{paddingTop: '60px'}}>Catégories</a><br className="mb-3"/>
				                    	<a href="" style={{paddingTop: '60px'}}>Modèles</a><br className="mb-3"/>
				                    	<a href="" style={{paddingTop: '60px'}}>A Propos</a><br className="mb-3"/>
				                    	<a href="" style={{paddingTop: '60px'}}>Contact</a>
				                    </div>
				                </div>
				                <div className="col-lg-4  text-center">
				                	<span className="text-white fs-3 fw-bold">Créer un atelier </span><br />
				                    <a class=" font-weight-normal text-justify " href="#">
				                    Avec MonAtelier, vous avez la possiblité de gérer votre atelier, entre autre: vos clients, 
				                    vos commandes et même la possibilité d’améliorer votre visibilité. <br />
									Enregistrez-vous.</a><br />
									<div className='pt-2'>
									<a href="#" style={{color: '#443369', backgroundColor:'white'}}
				                     className=" font-weight-normal h6 d-inline-block p-2 rounded-pill mb-2 me-2">S'inscire</a>
				                     <span>OU</span>
				                     <a href="#" style={{color: 'white'}}
				                     className=" font-weight-normal h6 d-inline-block p-2 border ms-2 border-2 border-white rounded-pill mb-2 me-2">Se connecter</a>

									</div>
				                    
				                </div>

            </div>
        </div>
			    </div><hr className="mb-0" style={{backgroundColor: '#c4c4c4'}} />
			    <div className="d-flex align-items-center text-dark" style={{height: '7vh'}}>
			        <p className="mx-auto"><span className="">Copyright © 2020 | </span>  
			        <span>power | </span>
			        <span className=" h6 my-0">Groupe 4 
			        </span></p>
			    </div>
				</div>	
o me-3" alt="..." style={{width:'30px', height:'3Opx'}}  /></a>
						    	<a href="#"><img src="images/gmail.png" className="card-img-top p-0 mx-auto" alt="..." style={{width:'30px', height:'3Opx'}}  /></a><br />
						    </div>
						    <div className="mx-auto mt-3 text-center"><i>Backend dev</i></div>
						  </div>
						</div>
					</div>

				</div>
			</div>

		);
	}

}

export default Home;