import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

import './Navigation.css';


function Navigation(){

	const [toggleMenu, setToggleMenu] = useState(true);
	const [largeur, setLargeur] = useState(window.innerWidth);

	const toogleNavSmallScreen = () => {
		setToggleMenu(!toggleMenu);
	}

	useEffect(() => {

		const changeWidth = () => {
			setLargeur(window.innerWidth);

			if(window.innerWidth > 500){
				setToggleMenu(true);
			}
		}

		window.addEventListener('resize', changeWidth);

		return () => {
			window.removeEventListener('resize', changeWidth);
		}

	}, [])

	return(

		<nav>

			<div className="d-flex">
				<img src="logo.png" className="logo ms-2 pt-1" alt="" width="60px" />
				<p className="logo text-light ms-1 mb-0 mt-auto">MonAtelier</p>
			</div>
			{toggleMenu && (

				<ul className="liste m-0 p-0 d-flex">
					<div className="d-flex ms-4">
						<img src="logo.png" className="div_logo" alt="" width="60px" />
						<p className="div_logo text-light ms-1 mb-0 mt-auto">MonAtelier</p>
					</div>
					<div className="d-lg-flex mx-lg-auto conteneur">
						<li className="items pe-5"><Link to="/">Accueil</Link></li>
						<li className="items pe-5"><a href="#categories">Catégories</a></li>
						<li className="items pe-5"><Link to="/detail_article">Articles</Link></li>
						<li className="items pe-5"><a href="#a_propos">A Propos</a></li>
						<li className="items pe-5"><a href="#contact">Contact</a></li>
					</div>
				</ul>

			)}
			
			<button onClick={toogleNavSmallScreen} className="btn"><i className="fa fa-bars"></i></button>	
		</nav>
	);
}

export default Navigation;