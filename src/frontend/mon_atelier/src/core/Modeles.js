import React, {useState} from 'react';
import './profilAtelier.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Modele from '../components/Modele'

export default function Modeles(){


const [allData, setAllData] = useState([]);
const[filtData, setFiltData] = useState(allData); 

var [appendice, setAppendice] = ""


const handleSearch = (e) => {
	let value = (e).target.value;
	let result = [];console.log(value);
	result = allData.filter((data) => {
		return data.name.search(value) != -1;});

	setFiltData(result);}


return(

	<div>
		<Navigation />
				<div className="pt-lg-5 text-center" style={{ backgroundImage: 'url(images/bgLogin.jpg)', 
		height:'70vh', width:'99vw', backgroundSize:'cover'}}>
			<div className="container">
				
			<h1 style={{color:'pink'}} className="ps-lg-5 ps-3 fw-bold fs-1 mb-0 pt-5 mt-5">Tous les modèles</h1>
			<p className="pt-3 ps-lg-5 ps-3 fs-4 mb-4 pb-3 text-dark" style={{fontWeight:'lightner'}}>
				Découvrez tous les modéles disponibles sur MonAtelier, choisissez le et réalisez
				<br/>l'article de vos rêves
			</p>
			<form className="d-flex w-75 mx-auto bg-white ">
		        <input className=" border-0 p-3 "   type="search" placeholder="Rechercher un élément" aria-label="Search"  onChange={(e) =>handleSearch(e)} />
		        <button className="border-0 fw-bold ps-3 pe-3"   style={{color:"white", backgroundColor: '#443369'}} type="submit">Search</button>
		     </form>

			</div>
		</div>
		
		<div className="mt-5">
			<Modele />	
		</div>
		

		<div className=" mt-5">
			<Footer />	
		</div>
		
	</div>

	);

}