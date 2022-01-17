import React from 'react';
import './profilAtelier.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function Categories(){


	return(

		<div>
			<Navigation />
			<div className="container-fluid banner p-0" >

				<img src="images/categorie_banner.jpg" alt="" width="100%" height="500px" />
				<div className="p-3 py-lg-5 text_banner text-light w-100">
					<p className="fs-4">
						Découvrez toutes les catégories présentées par MonAtelier, 
						choisissez-en une et trouvez<br /> le tailleur parfait pour réaliser 
						vos envies<br />.
					</p>
				</div>
			</div>

			<div className="container-fluid my-5 px-0">
				<div className="titre mt-5">
					<p className="text-center mb-2 fs-3">TOUTES NOS CATÉGORIES</p>
					<div className="mx-auto"></div>
				</div>
				<div className="row mt-5 p-5 mx-auto">
					<div className="col-md-3 mx-auto">
						<img src="images/matoul.jpg" className="mx-auto img-fluid" alt="" />
						<p className="fw-bold fs-5 mt-3">Habits pour femmes</p>
					</div>
					<div className="col-md-3 mx-auto">
						<img src="images/logo.png" className="mx-auto img-fluid" alt="" />
						<p className="fw-bold fs-5 mt-3">Habits pour femmes</p>
					</div>
					<div className="col-md-3 mx-auto">
						<img src="images/img1.jpg" className="mx-auto img-fluid" alt="" />
						<p className="fw-bold fs-5 mt-3">Habits pour femmes</p>
					</div>
					<div className="col-md-3 mx-auto">
						<img src="images/img2.jpg" className="mx-auto img-fluid" alt="" />
						<p className="fw-bold fs-5 mt-3">Habits pour femmes</p>
					</div>
					<div className="col-md-3 mx-auto">
						<img src="images/matoul.jpg" className="mx-auto img-fluid" alt="" />
						<p className="fw-bold fs-5 mt-3">Habits pour femmes</p>
					</div>
					<div className="col-md-3 mx-auto">
						<img src="images/logo.png" className="mx-auto img-fluid" alt="" />
						<p className="fw-bold fs-5 mt-3">Habits pour femmes</p>
					</div>
					<div className="col-md-3 mx-auto">
						<img src="images/img1.jpg" className="mx-auto img-fluid" alt="" />
						<p className="fw-bold fs-5 mt-3">Habits pour femmes</p>
					</div>
					<div className="col-md-3 mx-auto">
						<img src="images/img2.jpg" className="mx-auto img-fluid" alt="" />
						<p className="fw-bold fs-5 mt-3">Habits pour femmes</p>
					</div>
				</div>
			</div>

			<Footer />
		</div>

	);
}

export default Categories;