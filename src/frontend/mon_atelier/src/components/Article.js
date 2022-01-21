import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';


export default function Article() {

	const [articles,setArticles]= useState([])

	const {nameCat} = useParams()
	console.log({nameCat})
	
	useEffect(() => {
		axios.get(`http://monatelier.comsas.club/api/v1/articles/?workshop__name=&mesure=&modele__name=&modele__category__name=Robe+en+pagne`)
		.then(res => {
			console.log(res.data)
			setArticles(res.data.results)
		})
		.catch(err => {
			console.log(err)
		})
	}, [])

		return(

				<div className="container-fluid px-0 pb-lg-5">
					<div className='fw-bold text-center mt-5 fs-3'>NOS ARTICLES</div>
					<div className="mx-auto mb-5" style={{height:'4px', width:'100px', background:'#FF5566'}}></div>

					<div className="row pt-3 mx-auto py-5">

										
					{articles.map(article => {

						if(this.results.lenght >= 1){ 

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
						}
						 if(this.results.lenght=0){
						 	console.log(articles)
							return(<h1>No articles yet</h1>)
						}
					})}
						


					</div>
				</div>

	);
}

