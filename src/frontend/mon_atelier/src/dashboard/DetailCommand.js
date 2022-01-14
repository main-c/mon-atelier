import React from 'react';
import Layout from './Layout.js';


function DetailCommand(){

	const detail_commande = (

		<div className="container-fluid">
			<p className="text-center text-violet">Hey, ici vous pourrez voir les détails cette commande <br />
			ainsi que la modifier</p>
		</div>

	);

	return(
		
		<Layout content={detail_commande} />
	);
}
export default DetailCommand;