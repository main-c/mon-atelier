import React from 'react';
import './profilAtelier.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ArticlesCategorie from '../components/categories.js'

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

			<ArticlesCategorie />

			<Footer />
		</div>

	);
}

export default Categories;