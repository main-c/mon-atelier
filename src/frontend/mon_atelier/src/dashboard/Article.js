import React from 'react';
import Layout from './Layout.js';
import Article from '../components/Article';
import axios from 'axios';



function Articles(){

	const article = (

		<div className="container-fluid">
			<div className="mx-auto underline bg-white pt-2 w-50 rounded">
				<h4 className="text-violet text-center">Jugalux Beauty</h4>
			</div>

				
			<div className="mt-5 pt-lg-0 pt-2 d-flex justify-content-end">
				<a href="#newArticle" className="text-light text-center bg-violet2 p-2 rounded">Nouvel article</a>
			</div>

			<div className="row">

				<Article />

			</div>

			<div className="underline my-5 pt-lg-3" id="newArticle">
				<h4 className="text-violet">Ajouter</h4>
			</div>

			<AjoutArticle />


		</div>

	);

	return(
		
		<Layout content={article} />
	);
}
export default Articles;




class AjoutArticle extends React.Component{

		constructor(props){
			super(props)
			this.state = {
				name: "",
				modele: [],
				description: "",
				cost: "",
				state: "",
				quantity: "",
				echantillon: "",
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
			axios.post("https://api-mon-atelier.herokuapp.com/api/v1/articles/", this.state)
			.then(response => {
			console.log(response)
		})

		.then((response) => this.setState({orders: response.data.results}))
		.catch((err) => console.log(err));
		}


	render(){
		const {name,modele,description,cost,state,quantity,echantillon} = this.state
		return(
			<div className="container-fluid px-0 pb-5">
				<div className="col-lg-10 mx-auto bg-white shadow-sm py-5 px-lg-5 px-3">
					<form action="" onSubmit={this.handleSubmit}>
						<div className="row justify-content-around mt-lg-3">
							<div className="col-lg-5 my-2">
								<p className="text-violet">Nom de l'article</p>
								<input type="text" name="name" id="name" value={name} placeholder="Nom" onChange = {this.handleChange} className="text-violet border-violet3 p-2 w-100 inputCommand" required />
							</div>
							<div className="col-lg-5 my-2">
								<p className="text-violet">Modèles liés</p>

								<select name="modele" id="modele" value={[modele]} onChange = {this.handleChange} className="text-violet border-violet3 px-3 py-2 px-4 w-100 inputCommand" >
									{modele.map((item) => {
										return (<option key={item.id} value={item.id}>{item.name}</option>)
									})}
								</select>
							</div>		
						</div>
						<div className="row justify-content-around mt-lg-3">
							<div className="col-lg-5 my-2">
								<p className="text-violet">Prix</p>
								<input type="number" min="0" name="cost" id="cost" value={cost} onChange = {this.handleChange} className="text-violet border-violet3 p-2 w-100 inputCommand" required />
							</div>
							<div className="col-lg-5 my-2">
								<p className="text-violet">Etat</p>
								<select name="state" id="state" value={state} onChange = {this.handleChange} className="text-violet border-violet3 px-3 py-2 px-4 w-100 inputCommand" required>
									<option value="En vente">En vente</option>
									<option value="Vendu">Vendu</option>
								</select>
							</div>		
						</div>
						<div className="row justify-content-around">
							<div className="col-lg-5 my-2">
								<p className="text-violet">Quantité</p>
								<input type="number" min="0" max="100" name="quantity" id="quantity" value={quantity} onChange = {this.handleChange} className="text-violet border-violet3 px-3 py-2 px-4 w-100 inputCommand" required />
							</div>
							<div className="col-lg-5 my-2">
								<p className="text-violet">Echantillon</p>
								<input type="file" name="echantillon" id="echantillon" value={echantillon} onChange = {this.handleChange} className="text-violet w-100 border-violet3 px-3 py-2 px-4 inputCommand" required />
							</div>
						</div>
						<div className="row justify-content-around">
							<div className="col-lg-5 my-2">
								<p className="text-violet">Description</p>
								<textarea type="text-area" name="description" id="description" value={description} placeholder="Add comment ... " onChange = {this.handleChange} className="text-violet border-violet3 p-2 w-100 inputCommand" required></textarea>
							</div>
							<div class="col-lg-6 text-end mt-auto">
							<button className="my-3 border-0 bg-violet text-light p-2" type="submit">Créer l'article</button>
						</div>	
						</div>
						
					</form>
				</div>
			</div>
		);
	}
}