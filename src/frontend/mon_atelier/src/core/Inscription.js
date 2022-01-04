import React from 'react';
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
									<div className="user w-100">
										<input type="text" className="inp_ins" name="user_name" id="user" placeholder="Nom complet" onchange={this.handleChange} required/>
										<span className="focus-bord larg"></span>
									</div>
									<div className="user w-100">
										<input type="text" className="inp_ins" name="user_atel" id="atel" placeholder="Nom de l'atelier" onchange={this.handleChange} required/>
										<span className="focus-bord larg"></span>
									</div>
									<div className="pass w-100">
										<div id="eye">
											<div>
												<input className='input' spellCheck={false} type={this.state1.type} className="inp_ins " name="user_pass" id="pass" placeholder="Mot de passe" onchange={this.handleChange} required/>
											</div>
											<div>
												<i className={`${this.state1.icon} icon`} id="i" aria-hidden='true' onClick={this.changeType}></i>
											</div>
										</div>
										<span className="focus-bord larg"></span>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="w-100">
										<input type="email" className="inp_ins" name="user_mail" id="mail" placeholder="Adresse mail" onchange={this.handleChange} required/>
										<span className="focus-bord"></span>
									</div>
									<div className="w-100">
										<input type="tel" className="inp_ins" name="number_user" id="num_user" placeholder="Telephone" onchange={this.handleChange} required/>
										<span className="focus-bord"></span>
									</div>
								</div>
							</div>
						</div>
						<div className="sect3 p-3 text-center">
							<button className="fw-bold mt-3">S'inscrire</button>
							{/* <input type="submit" className="bouton" value="S'inscrire"></input> */}
							<p className="mt-2 text-center">Déjà inscris ? <strong><a href="#">se connecter</a></strong></p>
						</div>
					</form>
				</section>
			</div>
		);
	}
}

export default Inscription;