import React from 'react';
import Layout from './Layout.js';
import { Link } from 'react-router-dom';


function DetailCommand(){

	const detailCommand = (

		<div className="container-fluid">

			<div className="d-flex justify-content-center mb-5">
				<div className="underline bg-white pt-2 w-50 rounded">
					<h4 className="text-violet text-center">Jugalux Beauty</h4>
				</div>
			</div>

			<div className="row command_information border p-lg-5 p-2">
				
				<div className="col-lg-6 d-grid">
					<div className="d-flex">
						<p className="me-2 my-auto">Nom client :</p>
						<span className="fw-bold text-violet fs-5 my-auto">Kimmy Black</span>
					</div>
					<div className="mt-3 description">
						<p>
							La cliente souhaite un ensemble boubou pour toute la famille.
							Ceci comprends un costume pour homme, une robe de soirée et des robettes
						</p>
					</div>
					<p className="text-violet">En conception</p>
				</div>
				<div className="col-lg-6 d-grid justify-content-end">

					<i>
						<div className="d-flex text-secondary">
							<p className="me-1 my-auto">Commandé le</p>
							<span className="my-auto">18 Janvier 2018</span>
						</div>
					</i>
				</div>

				<div className="d-flex justify-content-end">
					<Link to="" className="modif_btn text-light bg-violet p-2">Modifier la commande</Link>
				</div>

			</div>

			<div className="underline mt-5">
				<h4 className="text-violet">Articles</h4>
			</div>

		</div>

	);

	return(
		
		<Layout content={detailCommand} />
	);
}
export default DetailCommand;
