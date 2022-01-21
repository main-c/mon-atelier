import React, {useState, useEffect} from 'react';
import Layout from './Layout.js';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Employe(){


	const [employes, setEmployes] = useState([])

	useEffect(() => {
		axios.get("workers/")
		.then((response) => {
			setEmployes(response.data.results);
		})
		.catch(err => {
			console.log(err)
		})
	}, []);


	const employe = (

		<div className="container-fluid px-0">

			<div className="mx-auto underline bg-white pt-2 w-50 rounded">
				<h4 className="text-violet text-center">Jugalux Beauty</h4>
			</div>

				
			<div className="mt-5 pt-lg-0 pt-2 d-flex justify-content-end">
				<a href="#newEmploye" className="text-light text-center bg-violet2 p-2 rounded">Nouvel employé</a>
			</div>

			<div className="row mt-5">

				{ employes.map(employe => {
					return(

						<div className="col-lg-4 mx-auto mt-4 p-1 rounded shadow-sm card_command">
							<Link to={`/detail_employe/${employe.id}`} className="d-flex">
								<i className="fa fa-3x fa-user-circle mt-3 ms-3 text-secondary"></i>
								<div className="d-grid ms-4 mt-2">
									<p className="fs-5 mb-0 text-violet">{employe.full_name}</p>
									<i className="mb-2 text-secondary">{employe.location}</i>
									<p className="text-dark">{employe.phone}</p>
								</div>
							</Link>
						</div>
					);
				})}

			</div>

			<div className="underline my-5 pt-lg-3" id="newEmploye">
				<h4 className="text-violet">Ajouter</h4>
			</div>

			<AjoutEmploye />

		</div>

	);

	return(
		
		<Layout content={employe} />
	);
}
export default Employe;


class AjoutEmploye extends React.Component{
		constructor(props){
			super(props)
			this.state = {
				full_name: "",
				phone: "",
				salary: "",
				no_cni: "",
				location: "",
				cv: "",
				since: "",
				workshop:"",
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
			axios.post("workers/", this.state)
			.then(response => {
			console.log(response)
		})

		.then((response) => this.setState({clients: response.data.results}))
		.catch((err) => console.log(err));
		}


	render(){
		const {full_name,phone,salary,no_cni,location,cv,since,workshop} = this.state
		return(
			<div className="container-fluid px-0 pb-5 ps-lg-5 bg_AddForm">
				<div className="col-lg-7 mx-auto shadow px-lg-5 px-3">
					<form action="" onSubmit={this.handleSubmit}>
						<div className="pt-5">
							<p className="text-dark fs-5 mb-0">Nom employé</p>
							<input 
								type="text" 
								name="full_name" 
								value={full_name}
								onChange = {this.handleChange}
								id="full_name" placeholder="Nom complet" 
								className="text-violet border-violet3 mx-auto ps-3 mt-2 py-2 inputCommand" 
								required/>
						</div>
						<div className="pt-3">
							<p className="text-dark fs-5 mb-0">Tel</p>
							<input 
								type="tel" 
								name="phone" 
								value={phone}
								onChange = {this.handleChange}
								id="phone" placeholder="6 xx xx xx xx" 
								className="text-violet border-violet3 mx-auto ps-3 mt-2 py-2 inputCommand" 
								required/>
						</div>
						<div className="pt-5">
							<p className="text-dark fs-5 mb-0">Salaire</p>
							<input 
								type="text" 
								name="salary" 
								value={salary}
								onChange = {this.handleChange}
								id="salary" placeholder=" xxx FCFA"
								className="text-violet border-violet3 mx-auto ps-3 mt-2 py-2 inputCommand" 
								required/>
						</div>
						<div className="pt-5">
							<p className="text-dark fs-5 mb-0">N° ncni</p>
							<input 
								type="number" 
								name="no_cni" 
								value={no_cni}
								onChange = {this.handleChange}
								id="no_cni" placeholder="N° carte d'identité nationale" 
								className="text-violet border-violet3 mx-auto ps-3 mt-2 py-2 inputCommand" 
								required/>
						</div>
						<div className="pt-5">
							<p className="text-dark fs-5 mb-0">Adresse</p>
							<input 
								type="text" 
								name="location" 
								value={location}
								onChange = {this.handleChange}
								id="location" placeholder="Quartier de résidence" 
								className="text-violet border-violet3 mx-auto ps-3 mt-2 py-2 inputCommand" 
								required/>
						</div>
						{/*
						<div className="pt-5">
							<p className="text-dark fs-5 mb-0">CV</p>
							<input 
								type="file" 
								name="cv" 
								value={cv.url}
								onChange = {this.handleChange}
								id="cv" 
								className="text-violet border-violet3 mx-auto ps-3 mt-2 py-2 inputCommand"/>
						</div>
						*/}
						<div className="pt-5">
							<p className="text-dark fs-5 mb-0">Date du jour</p>
							<input 
								type="date" 
								name="since" 
								value={since}
								onChange = {this.handleChange}
								id="since" placeholder="Entrez la date du jour" 
								className="text-violet border-violet3 mx-auto ps-3 mt-2 py-2 inputCommand" 
								required/>
						</div>
						<div className="pt-5">
							<p className="text-dark fs-5 mb-0">Atelier</p>
							<input 
								type="number" 
								name="workshop" 
								value={workshop}
								onChange = {this.handleChange}
								id="workshop" placeholder="Id de votre atelier" 
								className="text-violet border-violet3 mx-auto ps-3 mt-2 py-2 inputCommand" 
								required/>
						</div>

						<div class="text-end py-3">
							<button className="my-3 border-0 bg-violet text-light p-2" type="submit">Ajouter l'employé</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}