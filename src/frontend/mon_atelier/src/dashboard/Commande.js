import React from 'react';
import Layout from './Layout.js';
import { Link } from 'react-router-dom';


function Commande(){

	const commande = (

		<div className="container-fluid px-0">

			<div className="d-flex justify-content-center">
				<div className="underline bg-white pt-2 w-50 rounded">
					<h4 className="text-violet text-center">Jugalux Beauty</h4>
				</div>
			</div>

			<div className="d-flex justify-content-end mb-5">
				
				<div className="mt-5 pt-lg-0 pt-2">
					<a href="#newCommand" className="text-light text-center bg-violet2 p-2 rounded">Nouvelle commande</a>
				</div>
			</div>


			<div className="container-fluid mb-2 px-0">
				<div className="row">
					<div className="col-lg-4 p-3 my-3 mx-auto shadow-sm rounded card_command">
						<Link to="/detail_commande" className="text-dark">
							<h3>Kimmy Black</h3>
							<p className="text-secondary">18 Janvier 2020</p>
							<hr className="mb-1" />
							<i className="text-violet">En conception</i>
						</Link>
					</div>
					<div className="col-lg-4 p-3 my-3 mx-auto shadow-sm rounded card_command">
						<Link to="/detail_commande" className="text-dark">
							<h3>Kimmy Black</h3>
							<p className="text-secondary">18 Janvier 2020</p>
							<hr className="mb-1" />
							<i className="text-violet">Terminé</i>
						</Link>
					</div>
					<div className="col-lg-4 p-3 my-3 mx-auto shadow-sm rounded card_command">
						<Link to="/detail_commande" className="text-dark">
							<h3>Kimmy Black</h3>
							<p className="text-secondary">18 Janvier 2020</p>
							<hr className="mb-1" />
							<i className="text-violet">En conception</i>
						</Link>
					</div>
					<div className="col-lg-4 p-3 my-3 mx-auto shadow-sm rounded card_command">
						<Link to="/detail_commande" className="text-dark">
							<h3>Kimmy Black</h3>
							<p className="text-secondary">18 Janvier 2020</p>
							<hr className="mb-1" />
							<i className="text-violet">Terminé</i>
						</Link>
					</div>
					<div className="col-lg-4 p-3 my-3 mx-auto shadow-sm rounded card_command">
						<Link to="/detail_commande" className="text-dark">
							<h3>Kimmy Black</h3>
							<p className="text-secondary">18 Janvier 2020</p>							<hr className="mb-1" />
							<i className="text-violet">En attente de Materiel</i>
						</Link>
					</div>
					<div className="col-lg-4 p-3 my-3 mx-auto shadow-sm rounded card_command">
						<Link to="/detail_commande" className="text-dark">
							<h3>Kimmy Black</h3>
							<p className="text-secondary">18 Janvier 2020</p>							<hr className="mb-1" />
							<i className="text-violet">En conception</i>
						</Link>
					</div>

				</div>
			</div>


			<div className="underline my-5 pt-lg-3" id="newCommand">
				<h4 className="text-violet">Ajouter</h4>
			</div>

			<form method="POST" action="" className="py-4 mb-5 px-3 border-violet3 bg-white">
				<div className="row justify-content-around">
					<div className="col-lg-5 my-2">
						<p className="text-violet">Nom du client</p>
						<input type="text" name="user" id="user" placeholder="nom" className="text-violet border-violet3 px-3 py-2 px-4 inputCommand" required/>
					</div>
					<div className="col-lg-5 my-2">
						<p className="text-violet">Nom atelier</p>
						<input type="text" name="user" id="user" placeholder="atelier" className="text-violet border-violet3 px-3 py-2 px-4 inputCommand" required/>
					</div>		
				</div>
				<div className="row justify-content-around mt-lg-3">
					<div className="col-lg-5 my-2">
						<p className="text-violet">Date de livraison</p>
						<input type="text" name="user" id="user" placeholder="date" className="text-violet border-violet3 px-3 py-2 px-4 inputCommand" required/>
					</div>
					<div className="col-lg-5 my-2">
						<p className="text-violet">Statut</p>
						<input type="text" name="user" id="user" placeholder="statut" className="text-violet border-violet3 px-3 py-2 px-4 inputCommand" required/>
					</div>			
				</div>
				<div className="row justify-content-around mt-lg-3">
					<div className="col-lg-5 my-2">
						<p className="text-violet">Commentaire</p>
						<textarea type="text-area" name="user" id="user" placeholder="Add comment ... " className="text-violet border-violet3 p-2 w-100 inputCommand" required></textarea>
					</div>
					<div className="col-lg-5 my-lg-2 mt-lg-auto mt-5">
						<input type="submit" value="Ajouter la commande" className="text-light bg-violet p-2"/>
					</div>			
				</div>
			</form>

		</div>

	);

	return(
		
		<Layout content={commande} />
	);
}
export default Commande;