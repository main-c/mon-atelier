import React from 'react';
import Layout from './Layout.js';


function Article(){

	const article = (

		<div className="container-fluid">
			<p className="text-center text-violet">Hey, je suis le composant Article</p>
		</div>

	);

	return(
		
		<Layout content={article} />
	);
}
export default Article;