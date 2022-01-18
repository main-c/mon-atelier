import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './connexion.css';



class Connexion extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			user: "",
			pass: "",
			isPasswordShown: false
		}
		this.handleChange = this.handleChange.bind(this) 
	}

	handleChange(event){
		const name = event.target.name
		this.setState({
			[name]: event.target.value
		})
	}

	handleSubmit = event => {
		event.preventDefault();
	
		const connex = {
			user: this.state.user,
			pass: this.state.pass
		  };
	
		axios.post(`https://api-mon-atelier.herokuapp.com/api/v1/`,{connex}).then(res => {
			console.log(res);
			console.log(res.data);
		})
		
		/* axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.nom}`)
		.then(res => {
		console.log(res);
		console.log(res.data);
		})  */
	}


	//visibilite

	togglePasswordShownVisibility = () => {
		const {isPasswordShown} = this.state;
		this.setState({isPasswordShown: !isPasswordShown});
	}


	render(){

		const{isPasswordShown} = this.state;

		return(
			<div className="container-fluid connexion_container py-5 ps-lg-5">
				<section className="section">
					<div class="div1 text-center py-2">
						<img src="logo.png" className="img" alt="logo_MonAtelier"/>
						<h1 className="text-white mt-2">Connexion</h1>
					</div>
					<div className="div2">
						<form action="" onSubmit={this.handleSubmit}>
							<div className="user pt-5">
								<p className="text-dark fs-5 ms-4 mb-0">Email ou Téléphone</p>
								<input type="text" name="user" id="user" className="text-violet px-3 pb-2 px-4" onchange={this.handleChange} required/>
								<span className="focus-border container"></span>
							</div>
							<div className="pass mt-4">
								<div id="eye">
									<div>
										<p className="text-dark fs-5 ms-4 mb-0">Mot de passe</p>
										<input type={(isPasswordShown) ? "text" : "password"}  name="pass" id="pass" className="text-violet px-3 pb-2 px-4" onchange={this.handleChange} required/>
									</div>
									<div className="text-violet me-4">
										<i className={`fa ${isPasswordShown ? "fa-eye":"fa-eye-slash"} icon-eye`} aria-hidden='true' onClick={this.togglePasswordShownVisibility}></i>
									</div>
								</div>
								<span className="focus-border"></span>
							</div>
						</form>
					</div>
					<div class="text-center py-2 div3">
						<button className="fw-bold my-3">connexion</button>
						<p className="para">Pas encore connecté ? <strong><Link to="/signup">s'inscrire</Link></strong></p>
					</div>
				</section>
			</div>
		);
	}
}

export default Connexion;