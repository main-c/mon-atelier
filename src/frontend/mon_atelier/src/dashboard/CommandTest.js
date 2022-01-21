class AjoutCommande extends React.Component{
		constructor(props){
			super(props)
			this.state1 = {
				client: "",
				workshop: "",
				delivery_date: "",
				comment: "",
				state: "",
			}
			this.state2 = {
				name: "",
				phone: "",
				tranche_d_age: "",
				sexe: "",
			}
			this.handleChange = this.handleChange.bind(this) 
		}

		handleChange = (e)=>{
			this.setState({
				[e.target.name]: e.target.value
			})
		}


		handleSubmit = (e) =>{

			let one = "orders/";
			let two = "clients/";

			const requestOne = axios.post(one, this.state1);
			const requestTwo = axios.post(two, this.state2);

			axios
				.all([requestOne, requestTwo])
				.then(
				axios.spread((...response) => {
					const responseOne = response[0];
					const responseTwo = response[1];

					// use/access the results
					console.log(responseOne, responseTwo)
				})
				)
				.then((response) => this.setState({orders: response.data.results}))
				.then((response) => this.setState({clients: response.data.results}))
				.catch(errors => {
					// react on errors.
					console.error(errors);
				});
		}


	render(){
		{/*
		const {client,workshop,delivery_date,comment,state} = this.state1
		const {name,phone,tranche_d_age,sexe} = this.state2 */}
		return(

			<div>
				<form action="" onSubmit={this.handleSubmit}>
					<div className="container-fluid px-0 pb-5 bg_AddForm">
						<div className="col-lg-10 mx-auto shadow py-5 px-lg-5 px-3">

							<div className="row justify-content-around">


								<div className="col-lg-5 my-2">
									<p className="text-violet">Statut</p>
									<select name="state" id="state" value={this.state1.state} onChange = {this.handleChange} className="text-violet w-100 border-violet3 px-3 py-2 px-4 inputCommand" required>
										<option value="C">En conception</option>
										<option value="T">Terminé</option>
										<option value="M">Attente de Materiel</option>
									</select>
								</div>
							</div>
							<div className="row justify-content-around mt-lg-3">
								<div className="col-lg-5 my-2">
									<p className="text-violet">Commentaire</p>
									<textarea type="text-area" name="comment" id="comment" value={this.state1.comment} placeholder="Add comment ... " onChange = {this.handleChange} className="text-violet border-violet3 p-2 w-100 inputCommand" required></textarea>
								</div>
								<div className="col-lg-5 my-2">
									<p className="text-violet">Date de livraison</p>
									<input type="date" name="delivery_date" id="delivery_date" value={this.state1.delivery_date} onChange = {this.handleChange} className="text-violet border-violet3 px-3 py-2 px-4 inputCommand" required/>
								</div>		
							</div>

						</div>
					</div>

					<div className="container-fluid px-0 pb-5 ps-lg-5 bg_AddForm">
						<div className="col-lg-7 mx-auto shadow px-lg-5 px-3">
							<div className="pt-5">
								<p className="text-dark fs-5 mb-0">Nom client</p>
								<input 
									type="text" 
									name="name" 
									value={this.state2.name}
									onChange = {this.handleChange}
									id="name" placeholder="..." 
									className="text-violet border-violet3 mx-auto ps-3 mt-2 py-2 inputCommand" 
									required/>
							</div>
							<div className="pt-3">
								<p className="text-dark fs-5 mb-0">Tel</p>
								<input 
									type="text" 
									name="phone" 
									value={this.state2.phone}
									onChange = {this.handleChange}
									id="phone" placeholder="..." 
									className="text-violet border-violet3 mx-auto ps-3 mt-2 py-2 inputCommand" 
									required/>
							</div>
							<div className="pt-3">
								<p className="text-dark fs-5 mb-0">Tranche d'âge</p>
								<select 
									name="tranche_d_age" 
									value={this.state2.tranche_d_age}
									onChange = {this.handleChange}
									id="tranche_d_age" 
									className="text-violet px-3 pb-2 ms-1 mt-3 ps-lg-5" 
									required>
									<option value="En">Enfant</option>
									<option value="Ado">Adolescent</option>
									<option value="Adulte">Adulte</option>
								</select>
							</div>
							<div className="pt-3">
								<p className="text-dark fs-5 mb-0">Sexe</p>
								<select 
									name="sexe" 
									value={this.state2.sexe}
									onChange = {this.handleChange}
									id="sexe" 
									className="text-violet px-3 pb-2 ms-1 mt-3 ps-lg-5" 
									required>
									<option value="M">Masculin</option>
									<option value="F">Feminin</option>
								</select>
							</div>
							

							<div class="text-end py-3">
								<button className="my-3 border-0 bg-violet text-light p-2" type="submit">Ajouter la commande</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		);
	}
}