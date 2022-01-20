import React, {useState, useEffect} from 'react';
import Layout from './Layout.js';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


function DetailClient(){

	const {nameClient} = useParams()
  const [info, setInfo] = React.useState([]);

  React.useEffect(() => {
    axios.get(`www.monatelier.comsas.club/api/v1/clients/${nameClient}/`)
    .then((response) => {
      setInfo(response.data);
    });
  }, []);
  if(!info) return null;

	const detailClient = (

		<div className="container-fluid">

			<div className="mx-auto underline bg-white pt-2 w-50 rounded">
				<h4 className="text-violet text-center">Jugalux Beauty</h4>
			</div>
			
			<div className="row command_information border mt-5 pt-lg-5 pt-4 px-lg-5 py-lg-4 p-2">
				<div className="col-lg-6">
					<div className="d-flex my-auto">
						<p>Nom client : </p>
						<p className="fw-bold ms-3 fs-5">{info.name}</p>
					</div>
					<div className="d-flex my-auto">
						<p className="me-3">Tel : </p>
						<p className="fw-bold fs-5">{info.phone}</p>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="d-flex my-auto ms-lg-5 ps-lg-5">
						<p>Tranche d'âge : </p>
						<p className="fw-bold ms-3 fs-5">{info.tranche_d_age}</p>
					</div>
					<div className="d-flex my-auto ms-lg-5 ps-lg-5">
						<p className="me-3">Sexe : </p>
						<p className="fw-bold fs-5">{info.sexe}</p>
					</div>
				</div>

				<ModifClient />
			</div>
			
			<div className="underline mt-5">
				<h4 className="text-violet">Mesures</h4>
			</div>

		</div>

	);

	return(
		
		<Layout content={detailClient} />
	);
}
export default DetailClient;


class ModifClient extends React.Component{
    constructor(){
      super();
      this.state = {
        animation_name : '',
        depth: '',
        fade: ''
      };
    }
  
    closePopUp(){
      this.setState({animation_name: 'animate-out'});
      this.setState({depth:'above'});
       this.setState({fade:'fade-out'});
    }
    openPopUp(){
      this.setState({animation_name: 'animate-in'});
      this.setState({depth:'below'});
      this.setState({fade:'fade-in'});
    }

    render(){
        return (
          <div>
          	<div className="d-flex justify-content-end mt-3">
            	<button className="opener border-0 modif_btn text-light bg-violet p-2" id={this.state.depth} onClick={this.openPopUp.bind(this)}>Modifier les informations</button>
            </div>
            <section id="pop-up" className={this.state.animation_name}>
				<div id="innerPopUp" className={this.state.fade}>
					<div className="p-3">
						<p className="fs-5 text-violet">Modification</p>
						<hr/>
						<p className="close ps-2" onClick={this.closePopUp.bind(this)}><i className="fa fa-close"></i></p>
						<p>Contenu du formulaire</p>
					</div>
				</div>
            </section>
          </div>
        );
    }
}