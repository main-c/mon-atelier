import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';


import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ArticleAll from '../components/articleAll.js'
import Search from '../components/search.js'


import '../core/profilAtelier.css'


class Articles extends React.Component{


	render(){
	return(
	<>

	
		<Search />

		<Footer />
	</>
		);
	}
}

export default Articles;