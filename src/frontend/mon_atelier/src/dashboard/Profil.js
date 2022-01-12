import React from 'react';
import Layout from './Layout.js';
import './profil.css';


function Profil(){

	const profil = (

		<div className="profil_container">

			<div className="container-fluid bg_brofil px-0"></div>

			<div className="row justify-content-around">
				<div className="col-lg-4 p-2 bg-light rounded shadow">
					<h4>Personal box</h4>

					{/* code des informations personelles du propriétaire de l'atelier */}

				</div>
				<div className="col-lg-6 p-2 bg-light rounded shadow">
					<h4>General box</h4>

				{/* code des informations propres à l'atelier */}

				</div>
			</div>

		</div>

	);

	return(
		
		<Layout content={profil} />
	);
}
export default Profil;