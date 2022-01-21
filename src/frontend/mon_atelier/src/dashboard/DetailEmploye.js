import React from 'react';
import Layout from './Layout.js';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


function DetailEmploye(){

	const {nameEmploye} = useParams()
  const [info, setInfo] = React.useState([]);

  React.useEffect(() => {
    axios.get(`https://api-mon-atelier.herokuapp.com/api/v1/workers/${nameEmploye}/`)
    .then((response) => {
      setInfo(response.data);
    });
  }, []);
  if(!info) return null;

	const detailEmploye = (

		<div className="container-fluid">

			<div className="mx-auto underline bg-white pt-2 w-50 rounded">
				<h4 className="text-violet text-center">Jugalux Beauty</h4>
			</div>
			
			<div className="row command_information border mt-5 pt-lg-5 pt-4 px-lg-5 py-lg-4 p-2">
				<div className="col-lg-6">
					<div className="d-flex my-3">
						<p>Nom employe : </p>
						<p className="fw-bold ms-3 fs-5">{info.full_name}</p>
					</div>
					<div className="d-flex my-3">
						<p className="me-3">Tel : </p>
						<p className="fw-bold fs-5">{info.phone}</p>
					</div>
					<div className="d-flex my-3">
						<p className="me-3">Salaire : </p>
						<p className="fw-bold fs-5">{info.salary}</p>
					</div>
					<div className="d-flex my-3">
						<p className="me-3">CV : </p>
						<p className="fs-5">{info.cv}</p>
					</div>
				</div>
				<div className="col-lg-6 mt-lg-3">
					<div className="d-flex my-3 ms-lg-5 ps-lg-5">
						<p className="me-3">Employé le : </p>
						<p className="fw-bold fs-5">{info.since}</p>
					</div>
					<div className="d-flex my-3 ms-lg-5 ps-lg-5">
						<p>Adresse : </p>
						<p className="fw-bold ms-3 fs-5">{info.location}</p>
					</div>
					<div className="d-flex my-3 ms-lg-5 ps-lg-5">
						<p className="me-3">NCNI : </p>
						<p className="fw-bold fs-5">{info.no_cni}</p>
					</div>
				</div>

				<ModifEmploye />
			</div>
			
			<div className="mt-5">
				<button className="p-2 px-4 fw-bold text-light bg-danger" >Licencier</button>
			</div>

		</div>

	);

	return(
		
		<Layout content={detailEmploye} />
	);
}
export default DetailEmploye;


class ModifEmploye extends React.Component{
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