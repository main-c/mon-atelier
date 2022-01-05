import React from 'react';


class Footer extends React.Component{

	render(){
		return(

			<div className="">
				<div className=" pb-5 text-white" style={{backgroundColor:'#443369'}}>
			        <div className="container-fluid">
			            <div className="row d-flex align-items-center">
			                <div className="col-lg-4 ps-lg-5 mt-5">
			                    <div>
			                       <a href="#"><img src="images/logo.png" className="card-img-top mx-auto p-0 me-3 rounded-pill" alt="..." style={{width:'100px', height:'100px'}} /> <span className="text-white fs-3 fw-bold">MonAtelier</span></a>
			                    </div>
			                    <div className="w-75 mt-3">
			                         MonAtelier est une application web de couture dont l’objectif 
			                         principal est de numériser l’organisation des activités des couturiers
			                    </div>
			                </div>
			                <div className="col-lg-1"></div>
			                <div className="col-lg-3 mt-5 text-start">
			                	<span className="text-white fs-5 fw-bold">Liens rapides</span>
			                    <div className="d-grid mt-2">
			                    	<a href="" className="mt-1">Accueil</a>
			                    	<a href="" className="mt-1">Catégories</a>
			                    	<a href="" className="mt-1">Modèles</a>
			                    	<a href="" className="mt-1">A Propos</a>
			                    	<a href="" className="mt-1">Contact</a>
			                    </div>
			                </div>
			                <div className="col-lg-4 mt-5 text-start">
			                	<span className="text-white fs-5 fw-bold">Créer un atelier </span><br />
			                    <p className="mt-2 mb-0 font-weight-normal text-justify ">
			                    Avec MonAtelier, vous avez la possiblité de gérer votre atelier, entre autre: vos clients, 
			                    vos commandes et même la possibilité d’améliorer votre visibilité. <br />
								Enregistrez-vous.</p><br />
								<div>
									<a href="#" style={{color: '#443369', backgroundColor:'white'}} className=" font-weight-normal h6 d-inline-block p-2 rounded-pill mb-2 me-2">S'inscire</a>
			                     	<span>OU</span>
			                     	<a href="#" style={{color: 'white'}} className=" font-weight-normal h6 d-inline-block p-2 border ms-2 border-2 border-white rounded-pill mb-2 me-2">Se connecter</a>
								</div>        
			            	</div>
        				</div>
    				</div>
		    	</div>
			    <div className="d-flex align-items-center text-dark pt-1 bg-dark">
			        <p className="mx-auto my-1 text-light">
			        	<span className="">Copyright © 2022 | </span>  
			        	<span>INF3055 | </span>
			        	<span className="fw-bold"> mon-atelier</span>
			        </p>
			    </div>
			</div>	

		);
	}
}

export default Footer;