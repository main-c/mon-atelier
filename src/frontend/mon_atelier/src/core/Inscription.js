import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

import './inscription.css';



class Inscription extends React.Component{

	constructor(props){
			super(props)
			this.state = {
		    last_name: "",
			name: "",
			password: "",
			email: "",
			phone: "",
			isPasswordShown : false
		};
		this.handleChange = this.handleChange.bind(this) 
    }
	

	handleChange = (e) => {
	    this.setState({
	    	[e.target.name]: e.target.value 
	    })
	}


		handleSubmit = (e) =>{
			e.preventDefault()
			console.log(this.state)
			axios.post("https://api-mon-atelier.herokuapp.com/api/v1/workshops/", {
				manager: {
					last_name: this.state.last_name,
					password: this.state.password,
					email: this.state.email
				},
				name: this.state.name,
				phone: this.state.phone
			})
			.then(response => {
			console.log(response)
		})

		.then((response) => this.setState({workshops: response.data.results}))
		.catch((err)=> alert("L'une de vos information est incorrect, réesayez s'il vous plait"));

		}

		//visibilite

		togglePasswordShownVisibility = () => {
			const {isPasswordShown} = this.state;
			this.setState({isPasswordShown: !isPasswordShown});
		}

	render(){

		const { last_name, name, password, email, phone, isPasswordShown } = this.state;
	
		return(
			<div className="container-fluid body mt-0 py-1 d-flex justify-content-center">
				<section className="ms-lg-5 my-4 my-lg-1 sect_ins" >
					<Link to="/">
						<div className="d-flex justify-content-center py-3">
							<img src="logo.png" className="img" alt="logo_MonAtelier"/>
							<h3 className="text-white mt-5 ms-1">Inscription</h3>
						</div>
					</Link>
					<form id="sign_up_form" onSubmit={this.handleSubmit}>
						<div className="bg-white py-5">
							<div className="row">
								<div className="col-lg-6">
									<div className="user w-100 mt-4">
										<p className="text-dark fs-5 ms-4 mb-0">Nom complet</p>
										<input 
										type="text" 
										className="inp_ins text-violet px-3 pb-2 px-4" placeholder="..." 
										name="last_name" 
										id="user" 
										value={last_name}
										onChange={this.handleChange} required/>
										<span className="focus-bord larg"></span>
									</div>
									<div className="user w-100 mt-4">
										<p className="text-dark fs-5 ms-4 mb-0">Nom de l'atelier</p>
										<input 
										type="text" 
										name="name"
										value={name}
										className="inp_ins text-violet px-3 pb-2 px-4" 
										placeholder="..." id="atel" 
										onChange={this.handleChange} required/>
										<span className="focus-bord larg"></span>
									</div>
							<div className="pass w-100 mt-4">
								<div id="eye">
									<div>
										<p className="text-dark fs-5 ms-4 mb-0">Mot de passe</p>
										<input className='input' type={(isPasswordShown) ? "text" : "password"} placeholder="..." className="inp_ins text-violet px-3 pb-2 px-4" name="user_pass" id="pass" onchange={this.handleChange} required/>
									</div>
									<div className="text-violet me-4">
										<i className={`fa ${isPasswordShown ? "fa-eye":"fa-eye-slash"} icon`} id="i" aria-hidden='true' onClick={this.togglePasswordShownVisibility}></i>
									</div>
								</div>
								<span className="focus-bord"></span>
							</div>
								</div>
								<div className="col-lg-6">
									<div className="w-100 mt-4">
										<p className="text-dark fs-5 ms-4 mb-0">E-mail</p>
										<input type="email" className="inp_ins text-violet px-3 pb-2 px-4" 
										name="email"
										value={email}
									    placeholder="..." 
										id="email" onChange={this.handleChange} required/>
										<span className="focus-bord"></span>
									</div>
									<div className="w-100 mt-4">
										<p className="text-dark fs-5 ms-4 mb-0">Téléphone</p>
										<input type="tel" 
										name="phone"
										value={phone}
										className="inp_ins text-violet px-3 pb-2 px-4" 
										placeholder="..." id="num_user" 
										onChange={this.handleChange} required/>
										<span className="focus-bord"></span>
									</div>
								</div>
							</div>
						</div>
						<div className="sect3 p-3 text-center">
							<button type="submit" className="fw-bold mt-3">S'inscrire</button>
							{/* <input type="submit" className="bouton" value="S'inscrire"></input> */}
							<p className="mt-2 text-center">Déjà inscris ? <strong><Link to="/login">se connecter</Link></strong></p>
						</div>
					</form>
				</section>
			</div>
		);
	}
}

export default Inscription;