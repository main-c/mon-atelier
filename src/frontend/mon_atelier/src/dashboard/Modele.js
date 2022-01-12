import React from 'react';
import Layout from './Layout.js';


function Modele(){

	const modele = (

		<div className="container-fluid">
			<p className="text-center text-violet">Hey, je suis le composant Modele</p>
		</div>

	);

	return(
		
		<Layout content={modele} />
	);
}
export default Modele;