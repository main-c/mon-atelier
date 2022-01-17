import React from 'react';
import Layout from './Layout.js';
import { Link } from 'react-router-dom';


function Client(){

	const client = (

		<div className="container-fluid px-0">

			<div className="mx-auto underline bg-white pt-2 w-50 rounded">
				<h4 className="text-violet text-center">Jugalux Beauty</h4>
			</div>

				
			<div className="mt-5 pt-lg-0 pt-2 d-flex justify-content-end">
				<a href="#newClient" className="text-light text-center bg-violet2 p-2 rounded">Nouveau client</a>
			</div>

			<div className="row mt-5">
				<div className="col-lg-4 mx-auto mt-4 p-1 rounded shadow-sm card_command">
					<Link to="/detail_client" className="d-flex">
						<i className="fa fa-3x fa-user-circle mt-3 ms-3 text-secondary"></i>
						<div className="d-grid ms-4 mt-2">
							<p className="fs-5 mb-0 text-violet">Kimmy Black</p>
							<i className="mb-2 text-secondary">Féminin</i>
							<p className="text-dark">654 371 312</p>
						</div>
					</Link>
				</div>
				<div className="col-lg-4 mx-auto mt-4 p-1 rounded shadow-sm card_command">
					<Link to="/detail_client" className="d-flex">
						<i className="fa fa-3x fa-user-circle mt-3 ms-3 text-secondary"></i>
						<div className="d-grid ms-4 mt-2">
							<p className="fs-5 mb-0 text-violet">Kimmy Black</p>
							<i className="mb-2 text-secondary">Féminin</i>
							<p className="text-dark">654 371 312</p>
						</div>
					</Link>
				</div>
				<div className="col-lg-4 mx-auto mt-4 p-1 rounded shadow-sm card_command">
					<Link to="/detail_client" className="d-flex">
						<i className="fa fa-3x fa-user-circle mt-3 ms-3 text-secondary"></i>
						<div className="d-grid ms-4 mt-2">
							<p className="fs-5 mb-0 text-violet">Kimmy Black</p>
							<i className="mb-2 text-secondary">Féminin</i>
							<p className="text-dark">654 371 312</p>
						</div>
					</Link>
				</div>
				<div className="col-lg-4 mx-auto mt-4 p-1 rounded shadow-sm card_command">
					<Link to="/detail_client" className="d-flex">
						<i className="fa fa-3x fa-user-circle mt-3 ms-3 text-secondary"></i>
						<div className="d-grid ms-4 mt-2">
							<p className="fs-5 mb-0 text-violet">Kimmy Black</p>
							<i className="mb-2 text-secondary">Féminin</i>
							<p className="text-dark">654 371 312</p>
						</div>
					</Link>
				</div>
				<div className="col-lg-4 mx-auto mt-4 p-1 rounded shadow-sm card_command">
					<Link to="/detail_client" className="d-flex">
						<i className="fa fa-3x fa-user-circle mt-3 ms-3 text-secondary"></i>
						<div className="d-grid ms-4 mt-2">
							<p className="fs-5 mb-0 text-violet">Kimmy Black</p>
							<i className="mb-2 text-secondary">Féminin</i>
							<p className="text-dark">654 371 312</p>
						</div>
					</Link>
				</div>
				<div className="col-lg-4 mx-auto mt-4 p-1 rounded shadow-sm card_command">
					<Link to="/detail_client" className="d-flex">
						<i className="fa fa-3x fa-user-circle mt-3 ms-3 text-secondary"></i>
						<div className="d-grid ms-4 mt-2">
							<p className="fs-5 mb-0 text-violet">Kimmy Black</p>
							<i className="mb-2 text-secondary">Féminin</i>
							<p className="text-dark">654 371 312</p>
						</div>
					</Link>
				</div>

			</div>

			<div className="underline my-5 pt-lg-3" id="newClient">
				<h4 className="text-violet">Ajouter</h4>
			</div>

		</div>

	);

	return(
		
		<Layout content={client} />
	);
}
export default Client;