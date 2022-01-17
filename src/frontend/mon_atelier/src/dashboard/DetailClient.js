import React from 'react';
import Layout from './Layout.js';
import { Link } from 'react-router-dom';


function DetailClient(){

	const detailClient = (

		<div className="container-fluid">

			<div className="mx-auto underline bg-white pt-2 w-50 rounded">
				<h4 className="text-violet text-center">Jugalux Beauty</h4>
			</div>
			
			<div className="row command_information border mt-5 pt-lg-5 pt-4 px-lg-5 py-lg-4 p-2">
				<div className="col-lg-6">
					<div className="d-flex my-auto">
						<p>Nom client : </p>
						<p className="fw-bold ms-3 fs-5">Kimmy Black</p>
					</div>
					<div className="d-flex my-auto">
						<p className="me-3">Tel : </p>
						<p className="fw-bold fs-5">654 371 312</p>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="d-flex my-auto ms-lg-5 ps-lg-5">
						<p>Tranche d'âge : </p>
						<p className="fw-bold ms-3 fs-5">21 - 33</p>
					</div>
					<div className="d-flex my-auto ms-lg-5 ps-lg-5">
						<p className="me-3">Sexe : </p>
						<p className="fw-bold fs-5">Masculin</p>
					</div>
				</div>

				<div className="d-flex justify-content-end">
					<Link to="" className="modif_btn text-light bg-violet p-2">Modifier</Link>
				</div>
			</div>
			
			<div className="underline mt-5">
				<h4 className="text-violet">Mesures</h4>
			</div>

		</div>

	);

	return(
		
		<Layout content={detailClient} />
	);
}
export default DetailClient;