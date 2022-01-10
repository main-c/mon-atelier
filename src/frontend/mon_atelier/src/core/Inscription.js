import React from 'react';
import { Link } from "react-router-dom";

import './inscription.css';



class Inscription extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			user: "",
			pass: "",
			descr: "",
			mail: "",
			num_user: ""
		}
		this.handleChange = this.handleChange.bind(this) 
	}

	handleChange(e){
		const name = e.target.name
		this.setState({
			[name]: e.target.value
		})
	}

	handleLogin(e){
		alert("bonsoir")
		console.log("bonsoir")
		e.preventDefault()
		

	}

	//visibilite

	state1 = {
		icon: 'fa fa-eye',
		type: 'password'
	}

	changeType = () => {
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

	render(){

		return(
			<div className="container-fluid body mt-0 py-3">
				<section className="ms-lg-5 my-4 sect_ins" >
					<div className="text-center pt-3">
						<img src="logo.png" className="img" alt="logo_MonAtelier"/>
						<p className="text-white fs-3">Inscription</p>
					</div>
					<form action="" id="sign_up_form" onSubmit={this.handleLogin}>
						<div className="bg-white py-5">
							<div className="row">
								<div className="col-lg-6">
									<div className="user w-100 mt-4">
										<p className="text-dark fs-5 ms-4 mb-0">Nom complet</p>
										<input type="text" className="inp_ins text-violet px-3 pb-2 px-4" name="user_name" id="user" onchange={this.handleChange} required/>
										<span className="focus-bord larg"></span>
									</div>
									<div className="user w-100 mt-4">
										<p className="text-dark fs-5 ms-4 mb-0">Nom de l'atelier</p>
										<input type="text" className="inp_ins text-violet px-3 pb-2 px-4" name="user_atel" id="atel" onchange={this.handleChange} required/>
										<span className="focus-bord larg"></span>
									</div>
									<div className="pass w-100 mt-4">
										<div id="eye">
											<div>
												<p className="text-dark fs-5 ms-4 mb-0">Mot de passe</p>
												<input className='input' spellCheck={false} type={this.state1.type} className="inp_ins text-violet px-3 pb-2 px-4" name="user_pass" id="pass" onchange={this.handleChange} required/>
											</div>
											<div className="text-violet me-4">
												<i className={`${this.state1.icon} icon`} id="i" aria-hidden='true' onClick={this.changeType}></i>
											</div>
										</div>
										<span className="focus-bord larg"></span>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="w-100 mt-4">
										<p className="text-dark fs-5 ms-4 mb-0">E-mail</p>
										<input type="email" className="inp_ins text-violet px-3 pb-2 px-4" name="user_mail" id="mail" onchange={this.handleChange} required/>
										<span className="focus-bord"></span>
									</div>
									<div className="w-100 mt-4">
										<p className="text-dark fs-5 ms-4 mb-0">Téléphone</p>
										<input type="tel" className="inp_ins text-violet px-3 pb-2 px-4" name="number_user" id="num_user" onchange={this.handleChange} required/>
										<span className="focus-bord"></span>
									</div>
								</div>
							</div>
						</div>
						<div className="sect3 p-3 text-center">
							<button className="fw-bold mt-3">S'inscrire</button>
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