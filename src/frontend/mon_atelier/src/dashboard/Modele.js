import React from 'react';
import Layout from './Layout.js';
import Modele from '../components/Modele';
import axios from 'axios';



function Modeles(){

	const modele = (

		<div className="container-fluid">
			<div className="mx-auto underline bg-white pt-2 w-50 rounded">
				<h4 className="text-violet text-center">Jugalux Beauty</h4>
			</div>

				
			<div className="mt-5 pt-lg-0 pt-2 d-flex justify-content-end">
				<a href="#newModele" className="text-light text-center bg-violet2 p-2 rounded">Nouveau modèle</a>
			</div>

			<div className="row mt-5 bg-violet p-5">

				<Modele />

			</div>

			<div className="underline my-5 pt-lg-3" id="newModele">
				<h4 className="text-violet">Ajouter</h4>
			</div>

			<AjoutModele />


		</div>

	);

	return(
		
		<Layout content={modele} />
	);
}
export default Modeles;




class AjoutModele extends React.Component{

		constructor(props){
			super(props)
			this.state = {
				name: "",
				category: "",
				add_on: "",
				image: "",
			}
			this.handleChange = this.handleChange.bind(this);
		}

		handleChange = (e)=>{
			this.setState({
				[e.target.name]: e.target.value
			})
		}

		handleSubmit = (e) =>{
			e.preventDefault()
			console.log(this.state)
			axios.post("modeles/", this.state)
			.then(response => {
			console.log(response)
		})

		.then((response) => this.setState({orders: response.data.results}))
		.catch((err) => console.log(err));
		}


	render(){
		const {name,category,add_on,image} = this.state
		return(
			<div className="container-fluid px-0 pb-5 bg_AddForm">
				<div className="col-lg-10 mx-auto shadow py-5 px-lg-5 px-3">
					<form action="" onSubmit={this.handleSubmit}>
						<div className="row justify-content-around mt-lg-3">
							<div className="col-lg-5 my-2">
								<p className="text-violet">Modèle</p>
								<input type="text" name="name" id="name" value={name} placeholder="Nom du modèle" onChange = {this.handleChange} className="text-violet border-violet3 p-2 w-100 inputCommand" required />
							</div>
							<div className="col-lg-5 my-2">
								<p className="text-violet">Catégorie</p>
								<input type="number" name="category" id="category" value={category} placeholder="Id de la catégorie" onChange = {this.handleChange} className="text-violet border-violet3 p-2 w-100 inputCommand" required />
							</div>		
						</div>
						<div className="row justify-content-around">
							<div className="col-lg-5 my-2">
								<p className="text-violet">Date</p>
								<input type="date" name="add_on" id="add_on" value={add_on} onChange = {this.handleChange} className="text-violet border-violet3 px-3 py-2 px-4 w-100 inputCommand" required />
							</div>
							<div className="col-lg-5 my-2">
								<p className="text-violet">Echantillon</p>
								<input type="file" name="image" id="image" value={image} onChange = {this.handleChange} className="text-violet w-100 border-violet3 px-3 py-2 px-4 inputCommand" required />
							</div>
						</div>
						<div className="row justify-content-end">
							<div class="col-lg-6 text-end mt-4">
							<button className="my-3 border-0 bg-violet text-light p-2" type="submit">Créer le modèle</button>
							</div>	
						</div>
						
					</form>
				</div>
			</div>
		);
	}
}