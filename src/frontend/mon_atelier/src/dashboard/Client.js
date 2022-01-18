import React from 'react';
import Layout from './Layout.js';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Client(){

	const client = (

		<div className="container-fluid px-0">

			<div className="mx-auto underline bg-white pt-2 w-50 rounded">
				<h4 className="text-violet text-center">Jugalux Beauty</h4>
			</div>

				
			<div className="mt-5 pt-lg-0 pt-2 d-flex justify-content-end">
				<a href="#newClient" className="text-light text-center bg-violet2 p-2 rounded">Nouveau client</a>
			</div>

			<div className="row mt-5">
				<div className="col-lg-4 mx-auto mt-4 p-1 rounded shadow-sm card_command">
					<Link to="/detail_client" className="d-flex">
						<i className="fa fa-3x fa-user-circle mt-3 ms-3 text-secondary"></i>
						<div className="d-grid ms-4 mt-2">
							<p className="fs-5 mb-0 text-violet">Kimmy Black</p>
							<i className="mb-2 text-secondary">Féminin</i>
							<p className="text-dark">654 371 312</p>
						</div>
					</Link>
				</div>
				<div className="col-lg-4 mx-auto mt-4 p-1 rounded shadow-sm card_command">
					<Link to="/detail_client" className="d-flex">
						<i className="fa fa-3x fa-user-circle mt-3 ms-3 text-secondary"></i>
						<div className="d-grid ms-4 mt-2">
							<p className="fs-5 mb-0 text-violet">Kimmy Black</p>
							<i className="mb-2 text-secondary">Féminin</i>
							<p className="text-dark">654 371 312</p>
						</div>
					</Link>
				</div>
				<div className="col-lg-4 mx-auto mt-4 p-1 rounded shadow-sm card_command">
					<Link to="/detail_client" className="d-flex">
						<i className="fa fa-3x fa-user-circle mt-3 ms-3 text-secondary"></i>
						<div className="d-grid ms-4 mt-2">
							<p className="fs-5 mb-0 text-violet">Kimmy Black</p>
							<i className="mb-2 text-secondary">Féminin</i>
							<p className="text-dark">654 371 312</p>
						</div>
					</Link>
				</div>
				<div className="col-lg-4 mx-auto mt-4 p-1 rounded shadow-sm card_command">
					<Link to="/detail_client" className="d-flex">
						<i className="fa fa-3x fa-user-circle mt-3 ms-3 text-secondary"></i>
						<div className="d-grid ms-4 mt-2">
							<p className="fs-5 mb-0 text-violet">Kimmy Black</p>
							<i className="mb-2 text-secondary">Féminin</i>
							<p className="text-dark">654 371 312</p>
						</div>
					</Link>
				</div>
				<div className="col-lg-4 mx-auto mt-4 p-1 rounded shadow-sm card_command">
					<Link to="/detail_client" className="d-flex">
						<i className="fa fa-3x fa-user-circle mt-3 ms-3 text-secondary"></i>
						<div className="d-grid ms-4 mt-2">
							<p className="fs-5 mb-0 text-violet">Kimmy Black</p>
							<i className="mb-2 text-secondary">Féminin</i>
							<p className="text-dark">654 371 312</p>
						</div>
					</Link>
				</div>
				<div className="col-lg-4 mx-auto mt-4 p-1 rounded shadow-sm card_command">
					<Link to="/detail_client" className="d-flex">
						<i className="fa fa-3x fa-user-circle mt-3 ms-3 text-secondary"></i>
						<div className="d-grid ms-4 mt-2">
							<p className="fs-5 mb-0 text-violet">Kimmy Black</p>
							<i className="mb-2 text-secondary">Féminin</i>
							<p className="text-dark">654 371 312</p>
						</div>
					</Link>
				</div>

			</div>

			<div className="underline my-5 pt-lg-3" id="newClient">
				<h4 className="text-violet">Ajouter</h4>
			</div>

			<AjoutClient />

		</div>

	);

	return(
		
		<Layout content={client} />
	);
}
export default Client;


class AjoutClient extends React.Component{
		constructor(props){
			super(props)
			this.state = {
				name: "",
				phone: "",
				tranche_d_age: "",
				sexe: "",
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
			axios.post("https://api-mon-atelier.herokuapp.com/api/v1/clients/", this.state)
			.then(response => {
			console.log(response)
		})

		.then((response) => this.setState({clients: response.data.results}))
		.catch((err) => console.log(err));
		}


	render(){
		const {name,phone,tranche_d_age,sexe} = this.state
		return(
			<div className="container-fluid px-0 pb-5 ps-lg-5 bg_AddForm">
				<div className="col-lg-7 mx-auto shadow px-lg-5 px-3">
					<form action="" onSubmit={this.handleSubmit}>
						<div className="pt-5">
							<p className="text-dark fs-5 mb-0">Nom client</p>
							<input 
								type="text" 
								name="name" 
								value={name}
								onChange = {this.handleChange}
								id="name" placeholder="..." 
								className="text-violet border-violet3 mx-auto ps-3 mt-2 py-2 inputCommand" 
								required/>
						</div>
						<div className="pt-3">
							<p className="text-dark fs-5 mb-0">Tel</p>
							<input 
								type="text" 
								name="phone" 
								value={phone}
								onChange = {this.handleChange}
								id="phone" placeholder="..." 
								className="text-violet border-violet3 mx-auto ps-3 mt-2 py-2 inputCommand" 
								required/>
						</div>
						<div className="pt-3">
							<p className="text-dark fs-5 mb-0">Tranche d'âge</p>
							<select 
								name="tranche_d_age" 
								value={tranche_d_age}
								onChange = {this.handleChange}
								id="tranche_d_age" 
								className="text-violet px-3 pb-2 ms-1 mt-3 ps-lg-5" 
								required>
								<option value="En">Enfant</option>
								<option value="Ado">Adolescent</option>
								<option value="Adulte">Adulte</option>
							</select>
						</div>
						<div className="pt-3">
							<p className="text-dark fs-5 mb-0">Sexe</p>
							<select 
								name="sexe" 
								value={sexe}
								onChange = {this.handleChange}
								id="sexe" 
								className="text-violet px-3 pb-2 ms-1 mt-3 ps-lg-5" 
								required>
								<option value="M">Masculin</option>
								<option value="F">Feminin</option>
							</select>
						</div>
						

						<div class="text-end py-3">
							<button className="my-3 border-0 bg-violet text-light p-2" type="submit">Ajouter le client</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}