import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import Navigation from './Navigation'

export default function Search(){

const [allData, setAllData] = useState([]);
const[filtData, setFiltData] = useState(allData); 

var [appendice, setAppendice] = ""


const handleSearch = (e) => {
	let value = (e).target.value;
	let result = [];console.log(value);
	result = allData.filter((data) => {
		return data.name.search(value) != -1;});

	setFiltData(result);}


useEffect(() => 
	{axios('https://api-mon-atelier.herokuapp.com/api/v1/articles/?format=json')

		.then((res)=>{

			console.log(res.data.results)
			setFiltData(res.data.results)
			setAllData(res.data.results)
		})
		.catch((err)=>{
			console.log("the error now is" + err)
		})
	}, 

	[]);

	return(
		

			<div className="container-fluid px-0 pb-0 mx-auto">

			<Navigation />

		<div className="pt-lg-5 text-center" style={{ backgroundImage: 'url(images/bgSignup.jpg)', 
		height:'65vh', width:'99vw', backgroundSize:'cover'}}>
			<div className="container">
				
			<h1 className="text-violet ps-lg-5 ps-3 fw-bold fs-1 mb-0 pt-5 mt-5">Tous les articles</h1>
			<p className="pt-3 ps-lg-5 ps-3 fs-4 mb-4 pb-3 text-dark" style={{fontWeight:'lightner'}}>
				La plate-forme adequate où les fans de modes peuvent trouver
				<br/>Les modèles de rêves
			</p>
			<form className="d-flex w-75 mx-auto bg-white ">
		        <input className=" border-0 p-3 "   type="search" placeholder="Rechercher un élément" aria-label="Search"  onChange={(e) =>handleSearch(e)} />
		        <button className="border-0 fw-bold ps-3 pe-3"   style={{color:"white", backgroundColor: '#443369'}} type="submit">Search</button>
		     </form>

			</div>
		</div>
		<span className="d-flex w-75 border border-1 mx-auto bg-white ">
						<span className="border-0 fw-bold ps-2 pe-5 pt-4"   style={{color:"white", backgroundColor: '#443369'}} >Catégories</span>
		        <span className=" border-0 w-100" ><Articles /></span>
		        
		     </span>

					<div className='fw-bold text-center mt-5 fs-3'>NOS ARTICLES</div>
					<div className="mx-auto mb-2" style={{height:'4px', width:'100px', background:'#FF5566'}}></div>

					<div className="row pt-3 mx-auto py-3">

					{filtData.map((article,index)=>{

						return(
							<div className="col-lg-3 card p-0 mt-3 mx-auto border-0" style={{width: "19rem", maxHeight:'26rem'}}>
							<img src={article.result} className="card-img-top p-0" alt="..." style={{width:'auto', height:'6.4cm'}}  />
							<div className="card-body ps-2">
								<h5 className="card-title">
									<Link to={`/detail_article/${article.id}`}>
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

					</div>
				</div>


		)

}

class Articles extends React.Component{

	state = {
    categories: []
  }

  componentDidMount(){
    axios.get("https://api-mon-atelier.herokuapp.com/api/v1/categories/")
    .then(res => {
      const categories = res.data.results;
      this.setState({ categories });
    })
    .then((res) => this.setState({ categories: res.data.results }))
      .catch((err) => console.log(err));
  }

	render(){
	return(
	<>
			<div className="filters w-100" style={{ height:'12vh'}}>
				<div class="row w-100 row fs-5 mx-auto ">  
			    	<div class="row mx-auto fs-5 text-center" style={{width: '100vw', borderRadius: '0.9rem'}}>
			    		<div class="mb-2 w-100 d-flex mt-2" style={{overflowX: "hidden", flexWrap: "wrap"}}>
					        {this.state.categories.slice(0,8).map((cat)=>{
					    		return(
					    		   
					    			<div class="rounded-pill pe-2 ps-2 border text-violet" style={{margin: "4px"}}><Link to={`/articles/${cat.name}`}>
									            <span className="text-violet fs-6">{cat.name}</span>
									        </Link></div>	

					    		   );
					    	})}
			    		</div>
					</div>
				</div>
			</div>

	</>
		);
	}
}