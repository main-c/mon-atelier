import React, {Component} from 'react'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ArticleAll from '../components/articleAll.js'

import axios from 'axios';

class Articles extends React.Component{

	render(){
		return(
		<>

			<Navigation />


				<div className="container-fluid py-5 bg-light">

					<p className="fs-4 ms-lg-5 fw-bold text-violet">Tous les articles</p>
				</div>

			<ArticleAll />

			<Footer />
		</>
			);
	}
}

export default Articles;