import React from 'react';
import { Link } from 'react-router-dom';
import Slide, {CarouselItem} from '../components/slide'
import axios from 'axios'

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Categories from '../components/categories'
import ArticleAll from '../components/articleAll'
import './Home.css'

class Home extends React.Component{

		state = {
		articles : []
	}

	componentDidMount(){
		axios.get("articles/")
		.then(response => {
			const articles = response.data.results;
			this.setState({articles});
		})

		.then((response) => this.setState({articles: response.data.results}))
		.catch((err) => console.log(err));
	}

	render(){
		return(
			
			<div className="Integration">

			<h1>Home page</h1>
				<Navigation />
			

				<Footer />
			</div>

		);
	}

}

export default Home;