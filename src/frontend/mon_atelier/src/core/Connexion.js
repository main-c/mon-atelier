import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'

import './connexion.css';



export default class Connexion extends React.Component{

		constructor(props){
			super(props)
			this.state = {
				username: "",
				pasword: "",
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
			axios.post('https://api-mon-atelier.herokuapp.com/api/v1/auth/1/signin/', this.state)
			.then(response => {
			console.log(response)
		})

		.then((response) => this.setState({articles: response.data.results}))
		.catch((err) => console.log(err));
		}


	render(){
		const {username,password} = this.state
		return(
			<div className="container-fluid connexion_container py-5 ps-lg-5">
				<section className="section">
					<div class="d-flex justify-content-center py-3">
						<img src="logo.png" className="img" alt="logo_MonAtelier" alt="retour à l'acceuil" />
						<h3 className="text-white mt-4 ms-1">Connexion</h3>
					</div>
					<div className="div2">
						<form action="" onSubmit={this.handleSubmit}>
							<div className="user pt-5">
								<p className="text-dark fs-5 ms-4 mb-0">Email ou Téléphone</p>
								<input 
									type="text" 
									name="username" 
									value={username}
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
										<input 
										type={this.state.showPass ? "text" : "password" }
										name="password" 
										value={password}
										onChange = {this.handleChange}
										name="name" placeholder="..." id="pass"  
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
