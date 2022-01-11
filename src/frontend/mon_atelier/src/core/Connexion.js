import React from 'react';
import { Link } from "react-router-dom";

import './connexion.css';



class Connexion extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			user: "",
			pass: ""
		}
		this.handleChange = this.handleChange.bind(this) 
	}

	handleChange(e){
		const name = e.target.name
		this.setState({
			[name]: e.target.value
		})
	}


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
			<div className="container-fluid connexion_container py-5 ps-lg-5">
				<section className="section">
					<div class="d-flex justify-content-center py-3">
						<img src="logo.png" className="img" alt="logo_MonAtelier"/>
						<h3 className="text-white mt-4 ms-1">Connexion</h3>
					</div>
					<div className="div2">
						<form action="">
							<div className="user pt-5">
								<p className="text-dark fs-5 ms-4 mb-0">Email ou Téléphone</p>
								<input type="text" name="user" id="user" placeholder="..." className="text-violet px-3 pb-2 px-4" onchange={this.handleChange} required/>
								<span className="focus-border container"></span>
							</div>
							<div className="pass mt-4">
								<div id="eye">
									<div>
										<p className="text-dark fs-5 ms-4 mb-0">Mot de passe</p>
										<input spellCheck={false} type={this.state1.type}  name="pass" placeholder="..." id="pass"  className="text-violet px-3 pb-2 px-4" onchange={this.handleChange} required/>
									</div>
									<div>
										<i className={`${this.state1.icon} icon`} aria-hidden='true' onClick={this.changeType}></i>
									</div>
								</div>
								<span className="focus-border"></span>
							</div>
						</form>
					</div>
					<div class="text-center py-2 div3">
						<button className="fw-bold my-3">connexion</button>
						<p className="para text-white">Pas encore connecté ? <strong><Link to="/signup">s'inscrire</Link></strong></p>
					</div>
				</section>
			</div>
		);
	}
}

export default Connexion;