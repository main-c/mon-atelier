import React from 'react';
import {useParams} from 'react-router-dom';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Articles from '../components/Article'

export default function ArticlesCategorie (){
		const {id} = useParams()

		console.log(id)


		return(

			<div className="m-0">
				<Navigation />

				<div className="container-fluid py-5 bg-light">

					<p className="fs-4 ms-lg-5 fw-bold text-violet">Nom catégorie</p>


					<div className="row px-lg-5">
							<Articles />

						</div>
				</div>

				<Footer />
			</div>

		);
}
