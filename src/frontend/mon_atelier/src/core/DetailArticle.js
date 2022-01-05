import React from 'react';
//import './detailArticle.css';

class DetailArticle extends React.Component{

	render(){
		return(

			<div className="container-fluid py-5 bg-light">
				<p className="fs-4 ms-lg-5 text-violet fw-bold">Détail Article</p>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-4 mt-5 py-5 d-flex justify-content-center shadow rounded">
							<img src="images/img1.jpg" className="img-fluid" alt="" />
						</div>
						<div className="col-lg-1"></div>
						<div className="col-lg-5 mt-5">
							<div className="d-flex justify-content-between">
								<div className="d-grid">
									<p className="fs-2 fw-bold mb-0 text-violet">Nom Atelier</p>
									<p className="fw-bold">catégorie</p>
								</div>
								<p className="mt-3">Publié le 01 Dec 2021</p>
							</div>
							<div className="my-3">
								<p className="fs-2">Robe pagne</p>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Expedita, illo ipsam, quisquam neque natus architecto ab et
									optio repellat atque voluptatum iste cum temporibus, quae.
									Eligendi atque iure, architecto eos.
								</p>
								<p className="fw-bold fs-4">10 000 XFA</p>	
							</div>
							<div className="mt-5">
								<a href="#" className="text-success fw-bold fs-5 py-2 bg-green px-3 shadow-sm rounded">
									<i className="fa fa-whatsapp me-2"></i>
									Contacter l'atelier
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

		);
	}
}

export default DetailArticle;