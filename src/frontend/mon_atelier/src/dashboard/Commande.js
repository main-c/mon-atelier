import React from 'react';
import Layout from './Layout.js';
import { Link } from 'react-router-dom';
import axios from 'axios';


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

			<AjoutCommande />


		</div>

	);

	return(
		
		<Layout content={commande} />
	);
}
export default Commande;



class AjoutCommande extends React.Component{
		constructor(props){
			super(props)
			this.state = {
				client: "",
				workshop: "",
				delivery_date: "",
				comment: "",
				state: "",
			}
			this.handleChange = this.handleChange.bind(this) 
		}

		handleChange = (e)=>{
			this.setState({
				[e.target.name]: e.target.value
			})
		}

		handleSubmit = (e) =>{
			e.preventDefault()
			console.log(this.state)
			axios.post("https://api-mon-atelier.herokuapp.com/api/v1/orders/", this.state)
			.then(response => {
			console.log(response)
		})

		.then((response) => this.setState({orders: response.data.results}))
		.catch((err) => console.log(err));
		}


	render(){
		const {client,workshop,delivery_date,comment,state} = this.state
		return(
			<div className="container-fluid px-0 pb-5">
				<div className="col-lg-10 mx-auto bg-white shadow-sm py-5 px-lg-5 px-3">
					<form action="" onSubmit={this.handleSubmit}>
						
						<div className="row justify-content-around">
							<div className="col-lg-5 my-2">
								<p className="text-violet">Nom du client</p>
								<input type="number" name="client" id="client" value={client} onChange = {this.handleChange} placeholder="Nom client" className="text-violet border-violet3 px-3 py-2 px-4 inputCommand" required/>
							</div>
							<div className="col-lg-5 my-2">
								<p className="text-violet">Nom atelier</p>
								<input type="number" name="workshop" id="workshop" value={workshop} placeholder="Nom atelier" onChange = {this.handleChange} className="text-violet border-violet3 px-3 py-2 px-4 inputCommand" required/>
							</div>		
						</div>
						<div className="row justify-content-around mt-lg-3">
							<div className="col-lg-5 my-2">
								<p className="text-violet">Date de livraison</p>
								<input type="date" name="delivery_date" id="delivery_date" value={delivery_date} onChange = {this.handleChange} className="text-violet border-violet3 px-3 py-2 px-4 inputCommand" required/>
							</div>
							<div className="col-lg-5 my-2">
								<p className="text-violet">Statut</p>
								<select name="state" id="state" value={state} onChange = {this.handleChange} className="text-violet border-violet3 px-3 py-2 px-4 inputCommand" required>
									<option value="C">En conception</option>
									<option value="T">Terminé</option>
									<option value="M">Attente de Materiel</option>
								</select>
							</div>			
						</div>
						<div className="row justify-content-around mt-lg-3">
							<div className="col-lg-5 my-2">
								<p className="text-violet">Commentaire</p>
								<textarea type="text-area" name="comment" id="comment" value={comment} placeholder="Add comment ... " onChange = {this.handleChange} className="text-violet border-violet3 p-2 w-100 inputCommand" required></textarea>
							</div>	
							<div class="col-lg-5 text-end mt-auto">
								<button className="my-3 border-0 bg-violet text-light p-2" type="submit">Ajouter la commande</button>
							</div>	
						</div>
					</form>
				</div>
			</div>
		);
	}
}