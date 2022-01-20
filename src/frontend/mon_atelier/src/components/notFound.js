import React from 'react'
import {Link} from 'react-router-dom'
import Footer from './Footer'



export default function notFound(){



	return(

		<div className="pt-lg-5 text-center" style={{ height:'65vh', width:'99vw'}}>

			<h1 className="text-violet text-center fs-1 mb-3">Page Introuvable !!!</h1>

		<img src={"images/404.png"} alt="" className="mx-auto mb-5" style={{height:'45vh', width:'50vw'}} />

			<p className="pb-5 fs-3 fw-lightner"><span className="fs-2">Oooops, </span>il semblerait que contenu que vous cherchez soit introuvable</p>

			<div className="mb-5">
				<Link to="/" className="border-0 rounded-1 text-light fs-5 text-center pt-2 pb-2 ps-3 pe-3" style={{background:'#443369', marginBottom:'200px'}}>Aller à l'acceuil</Link><br />
			</div>

		<Footer className="mt-5"> </Footer>

		</div>

		);
}