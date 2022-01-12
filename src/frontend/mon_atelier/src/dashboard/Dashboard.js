import React from 'react';
import Layout from './Layout.js';


function Dashboard(){

	const dashboard = (

		<div className="container-fluid">

			<p className="text-center text-violet">Hey, je suis le composant Dashboard</p>

		</div>

	);

	return(
		
		<Layout content={dashboard} />
	);
}
export default Dashboard;