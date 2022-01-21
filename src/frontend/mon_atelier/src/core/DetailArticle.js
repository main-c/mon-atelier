import React, {useEffect} from 'react';
import axios from 'axios';
import {useParams, Link} from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';



export default function DetailArticle(){

	const {nameArt} = useParams()
  const [postWorkshop, setPostWorkshop] = React.useState(null);
  const [post, setPost] = React.useState(null);
  

  const request1 = axios.get(`http://monatelier.comsas.club/api/v1/articles/${nameArt}/`);
  const request2 = axios.get(`http://monatelier.comsas.club/api/v1/workshops/1/`);

	  React.useEffect(() => {
	  	axios.all([request1, request2]).then(axios.spread((...responses) => {
		  const resp1 = responses[0]
		  const resp2 = responses[1]

		  setPost(resp1.data)
		  setPostWorkshop(resp2.data)
		  console.log(resp1.data)
		  console.log(resp2.data)


		})).catch(errors => {
		  console.log(errors)
		  console.log(postWorkshop)

		})
	  

  }, []);


if(!post) return (<body className="bg-green" style={{position:"absolute"}}>
	<div style={{padding:'550px', paddingTop:'30vh'}} className='bg-green pt-5'>
		<div>
			<h1>Chargement...</h1>
		</div>
		<div>
			<img src={'...'} alt="loading..." />

		</div>	
	</div>
	
</body>);
if(!postWorkshop) return "Not aving";
		return(

			<div>
				<Navigation />
		

				<div className="container-fluid py-5 bg-light">
				 
					<p className="fs-4 ms-lg-5 text-violet fw-bold"> Article: <span className="" style={{color:'pink'}}> {post.name}</span> </p>
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-4 mt-5 py-5 d-flex justify-content-center shadow rounded">
								<img src={post.result} className="img-fluid" alt="" />
							</div>
							<div className="col-lg-1"></div>
							<div className="col-lg-5 mt-5">
								<div className="d-flex justify-content-between">
									<div className="d-grid">
										<p className="fs-2 fw-bold mb-0 text-violet">{post.name}</p>
										<p className="fw-bold">{post.status}</p>
									</div>
									
								</div>
								<div className="my-3">
									<p className="fs-5"><span className="fw-bold">Publié par</span>
										<Link to={`/profil_atelier/${postWorkshop.name}`}>
								            <span className="text-dark fs-6"> : {postWorkshop.name}</span>
								        </Link>
									</p>
									<p>
										{post.description}
									</p>
									<p className="fw-bold fs-4">{post.cost} XFA</p>	
								</div>
								<div className="mt-5">
									<a href="https://wa.me/693184269" className="text-success fw-bold fs-5 py-2 bg-green px-3 shadow-sm rounded">
										<i className="fa fa-whatsapp me-2"></i>
										Contacter l'atelier
									</a><br /><br />
									<a href="#" className="text-dark fw-bold fs-5 bg-light py-2 bg- px-3 shadow-md rounded">
										<i className="fa fa-phone me-2"></i>
										Contacter
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="container-fluid my-5 pt-5">
						<p className="fw-bold ms-lg-5 fs-4 text-violet">Articles similaires</p>
						<div className="row px-lg-5">
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
				</div>

			    <Footer />
			</div>

		);
	}
