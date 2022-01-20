import React from 'react';
import {useParams} from 'react-router-dom';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Article from '../components/Article'


export default function ArticlesCategorie (){
		const {nameCat} = useParams()


		return(

			<div className="m-0">
				<Navigation />
				<div className="pt-lg-5 text-center" style={{ backgroundColor: 'pink', 
			height:'65vh', width:'99vw', backgroundSize:'cover'}}>
				<div className="container">
					
				<h1 className="text-violet ps-lg-5 ps-3 fw-bold fs-1 mb-0 pt-5 mt-5">{nameCat}</h1>
				<br />
				
				<form className="d-flex w-75 mx-auto bg-white ">
			        <input className=" border-0 p-3 Search"   type="search" placeholder="Rechercher un élément" aria-label="Search" />
			        <button className="border-0 fw-bold ps-3 pe-3"   style={{color:"white", backgroundColor: '#443369'}} type="submit">Search</button>
			        <button className="btn btn-outline-success" type="submit">Search</button>
			     </form>
				</div>

			</div>

				<div className="container-fluid py-5 bg-light">


					<div className="row px-lg-5">
							<Article />

						</div>
				</div>

				<Footer />
			</div>

		);
}