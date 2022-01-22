import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'
import './connexion.css';



export default class Connexion extends React.Component{

		constructor(props){
			super(props)
			this.state = {
				id: "",
				name: "",
				isPasswordShown : false
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
			axios.post("www.monatelier.comsas.club/api/v1/categories/", this.state)
			.then(response => {
			console.log(response)
		})

		.then((response) => this.setState({articles: response.data.results}))
		.catch((err) => console.log(err));
		}

		//visibilite

		togglePasswordShownVisibility = () => {
			const {isPasswordShown} = this.state;
			this.setState({isPasswordShown: !isPasswordShown});
		}

	render(){
		const {id, name, isPasswordShown} = this.state
		return(
			<div className="container-fluid connexion_container py-5 ps-lg-5">
				<section className="section">
					<div class="d-flex justify-content-center py-3">
						<img src="logo.png" className="img" alt="logo_MonAtelier" title="retour à l'acceuil" />
						<h3 className="text-white mt-4 ms-1">Connexion</h3>
					</div>
					<div className="div2">
						<form action="" onSubmit={this.handleSubmit}>
							<div className="user pt-5">
								<p className="text-dark fs-5 ms-4 mb-0">Email ou Téléphone</p>
								<input 
									type="text" 
									name="id" 
									value={id}
									onChange = {this.handleChange}
									id="id" placeholder="..." 
									className="text-violet px-3 pb-2 px-4" 
									required/>
								<span className="focus-border container"></span>
							</div>
							<div className="pass mt-4">
								<div id="eye">
									<div>
										<p className="text-dark fs-5 ms-4 mb-0">Mot de passe</p>
										<input className='input' type={(isPasswordShown) ? "text" : "password"} className="inp_ins text-violet px-3 pb-2 px-4" name="user_pass" id="pass" onchange={this.handleChange} required/>
									</div>
									<div className="text-violet me-4">
										<i className={`fa ${isPasswordShown ? "fa-eye":"fa-eye-slash"} icon-eye`} id="i" aria-hidden='true' onClick={this.togglePasswordShownVisibility}></i>
									</div>
								</div>
								<span className="focus-border"></span>
							</div>

					<div class="text-center py-2 div3">
							<button className="fw-bold my-3" type="submit">connexion</button>
						<p className="para text-white">Pas encore connecté ? <strong><Link to="/signup">s'inscrire</Link></strong></p>
					</div>
						</form>
					</div>
				</section>
			</div>
		);
	}
}
