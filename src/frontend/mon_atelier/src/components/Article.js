import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Article extends React.Component {

	state = {
		articles : []
	}

	componentDidMount(){
		axios.get("https://api-mon-atelier.herokuapp.com/api/v1/articles/")
		.then(response => {
			const articles = response.data.results;
			this.setState({articles});
		})

		.then((response) => this.setState({articles: response.data.results}))
		.catch((err) => console.log(err));
	}


render(){
		return(


				<div className="container-fluid px-0 pb-lg-5">
					<div className='fw-bold text-center mt-5 fs-3'>NOS ARTICLES</div>
					<div className="mx-auto mb-5" style={{height:'4px', width:'100px', background:'#FF5566'}}></div>

					<div className="row pt-3 mx-auto bg-violet py-5">
					
					{ this.state.articles.map(article => {

						return(
							<div className="col-lg-3 card p-0 mt-3 mx-auto border-0" style={{width: "19rem", maxHeight:'26rem'}}>
							<img src={article.result} className="card-img-top p-0" alt="..." style={{width:'auto', height:'6.4cm'}}  />
							<div className="card-body ps-2">
								<h5 className="card-title">
									<Link to={`/articles/${article.id}`}>
						            	<p className="text-dark fs-4">{article.name}</p>
						        	</Link>
								</h5>
								<p className="card-text">{article.cost}XAF <br /><span>ajouté le 22 dec 2021</span></p>
								<div className="d-flex">
									<div>
										<img src={article.echantillon} className="card-img-top p-0 rounded-circle "  alt="..." style={{width:'1.2cm', height:'1.2cm'}}  />
									</div>
									<div className="ms-2 mt-3">{article.workshop}</div>
								</div>
							</div>
						</div>

							);
					})}
							<div className="col-lg-3 card p-0 mt-3 mx-auto border-0" style={{width: "18rem"}}>
							<img src="images/banner1.jpg" className="card-img-top p-0" alt="..." style={{width:'100%'}}  />
							<div className="card-body ps-2">
								<h5 className="card-title">Habillemnt de femme</h5>
								<p className="card-text">200 000XAF <br /><span>ajouté le 22 dec 2021</span></p>
								<div className="d-flex">
									<div>
										<img src="images/logo.png" className="card-img-top p-0" alt="..." style={{width:'50px', height:'5Opx'}}  />
									</div>
									<div className="ms-2 mt-3">Kim_atelier</div>
								</div>
							</div>
						</div>


					</div>

			
				</div>

	);
}
}

export default Article;