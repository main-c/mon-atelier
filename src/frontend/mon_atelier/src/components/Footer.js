import React from 'react';


function Footer(){


	return(

		
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


	);
}

export default Footer;