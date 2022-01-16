import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../App.css'

import './modele.css';


class Modele extends React.Component{

	state = {
		modeles: []
	}

	componentDidMount(){
		axios.get("https://api-mon-atelier.herokuapp.com/api/v1/modeles/")
		.then(res => {
			const modeles = res.data.results;
			this.setState({ modeles });
		})
		.then((res) => this.setState({ modeles: res.data.results }))
	    .catch((err) => console.log(err));
	}


	render(){
		return(

			<div className="container-fluid">
				<div className="row">

					{ this.state.modeles.map(modele => {
						return(
							<div className="card m-2" style={{width: '18rem'}}>
							  <img src={modele.image} className="card-img-top m-0" alt="..." />
							  <div className="card-body">
							    <h5 className="card-title">{modele.name}</h5>
							    <p className="card-text">{modele.add_on}</p>
								<div className="mx-auto text-center mt-5">
									<Link to="/categories"  className="mx-auto text-center text-decoration-none fs-5 rounded-1 ps-4 pe-4 p-2 bg-violet text-white moreCat">voir plus</Link>
								</div>
							  </div>
							</div>
						);
					})}

				</div>
			</div>

		);
	}
}

export default Modele;