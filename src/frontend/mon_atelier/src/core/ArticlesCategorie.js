import React from 'react';
import {useParams} from 'react-router-dom';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Article from '../components/Article'
import Categories from '../components/categories.js'

export default function ArticlesCategorie (){
		const {nameCat} = useParams()


		return(

			<div className="m-0">
				<Navigation />

				<div className="container-fluid py-5 bg-light">

					<p className="fs-4 ms-lg-5 fw-bold text-violet">{nameCat}</p>


					<div className="row px-lg-5">
							<Article />

						</div>
				</div>

				<Footer />
			</div>

		);
}