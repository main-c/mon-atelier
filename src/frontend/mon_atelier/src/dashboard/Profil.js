import React from 'react';
import Layout from './Layout.js';


function Profil(){

	const profil = (

		<div className="container-fluid">
			<p className="text-center text-violet">Hey, je suis le composant Profil</p>
		</div>

	);

	return(
		
		<Layout content={profil} />
	);
}
export default Profil;