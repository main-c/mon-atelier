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

			<section className="container mt-5 col-12 sect_ins" >
				<form action="" id="sign_up_form" onSubmit={this.handleLogin}>
					<div className="col-md-12 sect1">
						<img src="logo.png" alt="logo_MonAtelier"/>
						<h1 className="text-white mt-5">Inscription</h1>
					</div>
					<div className="sect2 container col-md-12">
						<div class="row">
							<div class="col-6">
								<div className="user">
									<input type="text" className="inp_ins" name="user_name" id="user" placeholder="Nom complet" onchange={this.handleChange} required/>
									<span className="focus-bord larg"></span>
								</div>
								<div className="user">
									<input type="text" className="inp_ins" name="user_atel" id="atel" placeholder="Nom de l'atelier" onchange={this.handleChange} required/>
									<span className="focus-bord larg"></span>
								</div>
								<div className="pass">
									<div id="eye">
										<div>
											<input className='input' spellCheck={false} type={this.state1.type} className="inp_ins " name="user_pass" id="pass" placeholder="Mot de passe" onchange={this.handleChange} required/>
										</div>
										<div>
											<i className={`${this.state1.icon} icon`} aria-hidden='true' onClick={this.changeType}></i>
										</div>
									</div>
									<span className="focus-bord larg"></span>
								</div>
							</div>
							<div class="col-6">
								<div>
									<input type="email" className="inp_ins" name="user_mail" id="mail" placeholder="Adresse mail" onchange={this.handleChange} required/>
									<span className="focus-bord"></span>
								</div>
								<div>
									<input type="tel" className="inp_ins" name="number_user" id="num_user" placeholder="Telephone" onchange={this.handleChange} required/>
									<span className="focus-bord"></span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-12 sect3">
						{/* <button>valider</button> */}
						<input type="submit" className="bouton" value="Valider"></input>
					</div>
				</form>
		
			</section>
		);
	}
}

export default Inscription;