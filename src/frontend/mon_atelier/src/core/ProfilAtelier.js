import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import Modele from '../components/Modele';
import './profilAtelier.css';
import axios from 'axios'

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';


export default function ProfilAtelier(){

	const {nameWork} = useParams()
	console.log({nameWork})

	 const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`https://api-mon-atelier.herokuapp.com/api/v1/workshops/2/`).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

	return(

		<div>
			<Navigation />

			<div className="container-fluid banner p-0" >

				<img src="images/profil_atelier.jpg" alt="" width="100%" height="600px" />

				<div className="p-3 py-lg-5 text_banner text-light w-100">
					<p className="fs-1 title"> {post.name}</p>
					<p>
						{post.description}
						
					</p>
				</div>

			</div>

			<div className="container-fluid my-5 px-0">
				<div className="titre mt-5">
					<p className="text-center mb-2 fs-3">LES MODÈLES</p>
					<div className="mx-auto"></div>
				</div>
				<div className="mt-5 bg-violet p-5">
					<Modele />
				</div>
			</div>
			<div className="container-fluid mb-5">
				<div className="titre mt-5">
					<p className="text-center mb-2 fs-3">Contactez-nous</p>
					<div className="mx-auto"></div>
				</div>
			</div>
			<div className="container d-flex contact">
				<div className="row w-50 mx-auto">
					<div className="col-lg-6 d-grid mx-auto">
						<img src="images/gmail.png" className="mx-auto" alt="" width="100px" />
						<p className="mt-4 mx-auto">{post.manager.email}</p>
					</div>
					<div className="col-lg-6 d-grid mx-auto">
						<img src="images/telephone.png" className="mx-auto" alt="" width="100px" />
						<p className="mt-4 mx-auto">{post.phone}</p>
					</div>
				</div>
				<div className="row w-50 mx-auto">
					<div className="col-lg-6 d-grid mx-auto">
						<img src="images/whatsapp.png" className="mx-auto" alt="" width="100px" />
						<p className="mt-4 mx-auto">{post.whatsapp_phone}</p>
					</div>
					<div className="col-lg-6 d-grid mx-auto">
						<img src="images/place.png" className="mx-auto" alt="" width="100px" />
						<p className="mt-4 mx-auto">{post.location}</p>
					</div>
				</div>
			</div>

			<div className="container my-5 d-flex justify-content-between">
				<img src='{post.logo}'  alt="" className="img-fluid" width="40%" />
				<img src="images/banner2.jpg" alt="" className="img-fluid" width="40%" />
			</div>


			<Footer />
		</div>

	);
}
