import React from 'react';
import Layout from './Layout.js';


function Commande(){

	const commande = (

		<div className="container-fluid">

			<p className="text-center text-violet">Hey, je suis le composant Commande</p>

		</div>

	);

	return(
		
		<Layout content={commande} />
	);
}
export default Commande;