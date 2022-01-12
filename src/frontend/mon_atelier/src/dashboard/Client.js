import React from 'react';
import Layout from './Layout.js';


function Client(){

	const client = (

		<div className="container-fluid">
			<p className="text-center text-violet">Hey, je suis le composant Client</p>
		</div>

	);

	return(
		
		<Layout content={client} />
	);
}
export default Client;