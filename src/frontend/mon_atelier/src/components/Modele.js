import React from 'react';
import axios from 'axios';

import './modele.css';


class Modele extends React.Component{

	state = {
		modeles: []
	}

	componentDidMount(){
		axios.get("modeles/")
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
							<div className="column">
								<div className="imgDiv">
									<img src={modele.image} alt="" className="img-fluid" />
									<div className="fadedbox">
										<div className="text text-start fs-5">{modele.name}</div>
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