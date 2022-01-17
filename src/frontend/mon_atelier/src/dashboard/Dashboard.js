import React from 'react';
import Layout from './Layout.js';
import { Link } from 'react-router-dom';


function Dashboard(){

	const dashboard = (

		<div className="container-fluid">

			<div className="underline">
				<h4 className="text-violet">Statistiques</h4>
			</div>

			<div className="row mt-4 justify-content-around">
				<div className="col-lg-3 d-grid mx-lg-2 px-3 pt-2 mt-2 shadow-sm rounded stats border border-5 border-primary border-top-0 border-bottom-0 border-end-0">
					<h2 className="text-primary">0</h2>
					<p className="fs-5">Articles en vente</p>
				</div>
				<div className="col-lg-3 d-grid mx-lg-2 px-3 pt-2 mt-2 shadow-sm rounded stats border border-5 border-secondary border-top-0 border-bottom-0 border-end-0">
					<h2 className="text-secondary">0</h2>
					<p className="fs-5">Modèles</p>
				</div>
				<div className="col-lg-3 d-grid mx-lg-2 px-3 pt-2 mt-2 shadow-sm rounded stats border border-5 border-dark border-top-0 border-bottom-0 border-end-0">
					<h2 className="text-dark">0</h2>
					<p className="fs-5">Commande validée</p>
				</div>
				<div className="col-lg-3 d-grid mx-lg-2 px-3 pt-2 mt-2 mt-lg-4 shadow-sm rounded stats border border-5 border-danger border-top-0 border-bottom-0 border-end-0">
					<h2 className="text-danger">0</h2>
					<p className="fs-5">Commandes en attende</p>
				</div>
				<div className="col-lg-3 d-grid mx-lg-2 px-3 pt-2 mt-2 mt-lg-4 shadow-sm rounded stats border border-5 border-success border-top-0 border-bottom-0 border-end-0">
					<h2 className="text-success">0</h2>
					<p className="fs-5">Clients enregistrés</p>
				</div>
				<div className="col-lg-3 d-grid mx-lg-2 px-3 pt-2 mt-2 mt-lg-4 shadow-sm rounded stats border border-5 border-warning border-top-0 border-bottom-0 border-end-0">
					<h2 className="text-warning">0</h2>
					<p className="fs-5">Employés</p>
				</div>
			</div>


			<div className="underline my-5 pt-lg-3">
				<h4 className="text-violet">Mes Commandes</h4>
			</div>

			<div className="container mb-5">
				<div className="row bg-violet pt-3 mb-4 text-light">
					<div className="col-lg-3"><p className="fw-bold">Client</p></div>
					<div className="col-lg-3"><p className="fw-bold">Nom</p></div>
					<div className="col-lg-3"><p className="fw-bold">Date</p></div>
					<div className="col-lg-3 text-lg-end pe-lg-5"><p className="fw-bold">Prix total</p></div>
				</div>

				<div className="row pt-3 my-2 text-violet shadow-sm command">
					<div className="col-lg-3"><p>Jugalux Beauty</p></div>
					<div className="col-lg-3"><p>Kimmy</p></div>
					<div className="col-lg-3"><p>25/07/2020</p></div>
					<div className="col-lg-3 text-lg-end pe-lg-5"><p>250 000 xfa</p></div>
				</div>
				<div className="row pt-3 my-2 text-violet shadow-sm command">
					<div className="col-lg-3"><p>Salaka Sarl</p></div>
					<div className="col-lg-3"><p>Shoot</p></div>
					<div className="col-lg-3"><p>12/01/2019</p></div>
					<div className="col-lg-3 text-lg-end pe-lg-5"><p>134 000 xfa</p></div>
				</div>
				<div className="row pt-3 my-2 text-violet shadow-sm command">
					<div className="col-lg-3"><p>Markup Soft</p></div>
					<div className="col-lg-3"><p>Emma</p></div>
					<div className="col-lg-3"><p>22/05/2015</p></div>
					<div className="col-lg-3 text-lg-end pe-lg-5"><p>278 000 xfa</p></div>
				</div>
				<div className="row pt-3 my-2 text-violet shadow-sm command">
					<div className="col-lg-3"><p>Ely's Shop</p></div>
					<div className="col-lg-3"><p>Gourain</p></div>
					<div className="col-lg-3"><p>08/09/2018</p></div>
					<div className="col-lg-3 text-lg-end pe-lg-5"><p>75 000 xfa</p></div>
				</div>
				<div className="mt-5 d-flex justify-content-end">
					<Link to="/commande" className="text-light text-center bg-violet p-2 rounded">Voir plus de commandes</Link>
				</div>
			</div>


			<div className="underline my-5 pt-lg-3">
				<h4 className="text-violet">Articles</h4>
			</div>

			<div className="container mb-5">
				<div className="row bg-violet pt-3 mb-4 text-light">
					<div className="col-lg-3"><p className="fw-bold">Image</p></div>
					<div className="col-lg-3"><p className="fw-bold">Catégorie</p></div>
					<div className="col-lg-3"><p className="fw-bold">Modèle</p></div>
					<div className="col-lg-3 text-lg-end pe-lg-5"><p className="fw-bold">Prix</p></div>
				</div>

				<div className="row pt-3 my-2 text-violet shadow-sm command">
					<div className="col-lg-3"><img src="images/matoul.jpg" className="mt-0 rounded-circle" alt="" width="100px" height="100px" /></div>
					<div className="col-lg-3 my-auto"><p>Robes Pagne</p></div>
					<div className="col-lg-3 my-auto"><p>Robette pour petites filles</p></div>
					<div className="col-lg-3 my-auto text-lg-end pe-lg-5"><p>75 000 xfa</p></div>
				</div>
				<div className="row pt-3 my-2 text-violet shadow-sm command">
					<div className="col-lg-3"><img src="images/matoul.jpg" className="mt-0 rounded-circle" alt="" width="100px" height="100px" /></div>
					<div className="col-lg-3 my-auto"><p>Robes Pagne</p></div>
					<div className="col-lg-3 my-auto"><p>Robette pour petites filles</p></div>
					<div className="col-lg-3 my-auto text-lg-end pe-lg-5"><p>75 000 xfa</p></div>
				</div>
				<div className="row pt-3 my-2 text-violet shadow-sm command">
					<div className="col-lg-3"><img src="images/matoul.jpg" className="mt-0 rounded-circle" alt="" width="100px" height="100px" /></div>
					<div className="col-lg-3 my-auto"><p>Robes Pagne</p></div>
					<div className="col-lg-3 my-auto"><p>Robette pour petites filles</p></div>
					<div className="col-lg-3 my-auto text-lg-end pe-lg-5"><p>75 000 xfa</p></div>
				</div>
				<div className="row pt-3 my-2 text-violet shadow-sm command">
					<div className="col-lg-3"><img src="images/matoul.jpg" className="mt-0 rounded-circle" alt="" width="100px" height="100px" /></div>
					<div className="col-lg-3 my-auto"><p>Robes Pagne</p></div>
					<div className="col-lg-3 my-auto"><p>Robette pour petites filles</p></div>
					<div className="col-lg-3 my-auto text-lg-end pe-lg-5"><p>75 000 xfa</p></div>
				</div>


				<div className="mt-5 d-flex justify-content-end">
					<Link to="/articles" className="text-light text-center bg-violet p-2 rounded">Voir plus d'articles</Link>
				</div>
			</div>



		</div>

	);

	return(
		
		<Layout content={dashboard} />
	);
}
export default Dashboard;