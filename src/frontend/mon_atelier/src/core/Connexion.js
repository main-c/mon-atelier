import React from 'react';
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
					<div class="div1 text-center py-2">
						<img src="logo.png" className="img" alt="logo_MonAtelier"/>
						<h1 className="text-white mt-2">Connexion</h1>
					</div>
					<div className="div2">
						<form action="">
							<div className="user">
								<input type="text" name="user" id="user" placeholder="Nom d'utilisateur" onchange={this.handleChange} required/>
								<span className="focus-border container"></span>
							</div>
							<div className="pass">
								<div id="eye">
									<div>
										<input spellCheck={false} type={this.state1.type}  name="pass" id="pass" placeholder="Mot de passe" onchange={this.handleChange} required/>
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
						<p className="para">Pas encore connecté ? <strong><a href="#">s'inscrire</a></strong></p>
					</div>
				</section>
			</div>
		);
	}
}

export default Connexion;