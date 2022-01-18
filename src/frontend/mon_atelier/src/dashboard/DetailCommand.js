import React from 'react';
import Layout from './Layout.js';
import { Link } from 'react-router-dom';


function DetailCommand(){

	const detailCommand = (

		<div className="container-fluid">

			<div className="d-flex justify-content-center mb-5">
				<div className="underline bg-white pt-2 w-50 rounded">
					<h4 className="text-violet text-center">Jugalux Beauty</h4>
				</div>
			</div>

			<div className="row border p-lg-5 p-2">
				
				<div className="col-lg-6 d-grid">
					<div className="d-flex">
						<p className="me-2 my-auto">Nom client :</p>
						<span className="fw-bold text-violet fs-5 my-auto">Kimmy Black</span>
					</div>
					<div className="mt-3 description">
						<p>
							La cliente souhaite un ensemble boubou pour toute la famille.
							Ceci comprends un costume pour homme, une robe de soirée et des robettes
						</p>
					</div>
					<p className="text-violet">En conception</p>
				</div>
				<div className="col-lg-6 d-grid justify-content-end">

					<i>
						<div className="d-flex text-secondary">
							<p className="me-1 my-auto">Commandé le</p>
							<span className="my-auto">18 Janvier 2018</span>
						</div>
					</i>
				</div>

				<ModifCommand />

			</div>

			<div className="underline mt-5">
				<h4 className="text-violet">Articles</h4>
			</div>

		</div>

	);

	return(
		
		<Layout content={detailCommand} />
	);
}
export default DetailCommand;



class ModifCommand extends React.Component{
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
          	<div className="d-flex justify-content-end">
            	<button className="opener border-0 modif_btn text-light bg-violet p-2" id={this.state.depth} onClick={this.openPopUp.bind(this)}>Modifier la commande</button>
            </div>
            <section id="pop-up" className={this.state.animation_name}>
				<div id="innerPopUp" className={this.state.fade}>
					<div className="p-3">
						<p className="fs-5 text-violet">Modifier la commande</p>
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