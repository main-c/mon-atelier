import React from 'react';
import './profilAtelier.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';


import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Categories extends React.Component{

	state = {
    categories: []
  }

  componentDidMount(){
    axios.get("categories/")
    .then(res => {
      const categories = res.data.results;
      this.setState({ categories });
    })
    .then((res) => this.setState({ categories: res.data.results }))
      .catch((err) => console.log(err));
  }
	render(){
			return(

		<div>
			<Navigation />
			<div className="container-fluid banner p-0" >

				<img src="images/categorie_banner.jpg" alt="" width="100%" height="500px" />
				<div className="p-3 py-lg-5 text_banner text-light w-100">
					<p className="fs-4 ps-4">
						Découvrez toutes les catégories présentées par MonAtelier, 
						<br />choisissez-en une et trouvez<br /> le tailleur parfait pour réaliser 
						vos envies
					</p>
				</div>
			</div>
				<p className='fw-bold text-center mt-5 fs-3' id="categories">CATEGORIES</p>
				<div className="mx-auto" style={{height:'4px', width:'100px', background:'#FF5566'}}></div>

				<div className="row pt-3 mx-auto categories">


				{ this.state.categories.map(category => {
					return(

					<div className="col-lg-4 mx-auto mb-3 mt-3 p-0 d-flex border rounded" style={{height:'100px', width:'350px'}}>
					    <img src="images/matoul.jpg" className="rounded-start" height="100px" alt="..." />
					    <div className="my-auto">
					    <Link to={`/articles/${category.name}`}>
				            <p className="text-violet fs-4 ms-5">{category.name}</p>
				        </Link>
					        
					    </div>
					</div>
					            );
      })}


				</div>

			<Footer />
		</div>

	);
	}
}
