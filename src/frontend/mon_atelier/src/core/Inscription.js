
import React, { useState } from 'react';
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
			showPass : false,
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
			axios.post("www.monatelier.comsas.club/api/v1/workshops/", {
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
		.catch((err)=> console.log(err));

		}


	state1 = {
		icon: 'fa fa-eye',
		type: 'password'
	}

/*	changeType = () => {
		const { type } = this.state1
		if (type === 'password') {
			this.setState1({
				icon: 'fa fa-eye-slash',
				type: 'text'
			})
		} else {
			this.setState1({
				icon: 'fa fa-eye',
				type: 'password'
			})
		}
	}
*/

	render(){

		const { last_name, name, password, email, phone } = this.state;
	
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
										placeholder="MonAtelier" id="atel" 
										onChange={this.handleChange} required/>
										<span className="focus-bord larg"></span>
									</div>
							<div className="pass w-100 mt-4">
								<div id="eye">
									<div>
										<p className="text-dark fs-5 ms-4 mb-0">Mot de passe</p>
										<input 
										type={this.state.showPass ? "text" : "password" }
										name="password" 
										value={password}
										onChange = {this.handleChange}
									    placeholder="..." id="pass"  
										className="text-violet px-3 pb-2 px-4"
										required/>
									</div>
									<div><br />
									<span
									className="bouton"
									alt="hide/show"
									onClick={()=> this.setState({showPass: !this.state.showPass})}
								>
								{this.state.showPass ? '🙉' : '🙈'}</span>
									</div>
								</div>
								<span className="focus-border"></span>
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
