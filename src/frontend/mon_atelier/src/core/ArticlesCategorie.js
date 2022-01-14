import React from 'react';
import {useParams} from 'react-router-dom';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function ArticlesCategorie (){
		const {id} = useParams()

		console.log(id)


		return(

			<div className="m-0">
				<Navigation />

				<div className="container-fluid py-5 bg-light">

					<p className="fs-4 ms-lg-5 fw-bold text-violet">Nom catégorie</p>


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

				<Footer />
			</div>

		);
}
