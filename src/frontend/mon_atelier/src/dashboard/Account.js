import React from 'react';
import Layout from './Layout.js';
import { useState } from "react";
import './dashboard.css';
import './Account.css'


function Account(){

	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (index) => {
		setToggleState(index);
	};
	
	//charger l'image
	

	const[image, setImage]= useState('');
	const[isUploaded, setIsUploaded] = useState(false);

	function handleImageChange(e){
		if(e.target.selection && e.target.selection[0]){
			let reader = new FileReader;

			reader.onload = function(e){
				setImage(e.target.result);
				setIsUploaded(true);
			};
			reader.readAsDataURL(e.target.selection[0]);
			
		}
	}
	

	const account = (

		
			<div className="account_container">

				<div className="container-fluid bg_brofil px-0"></div>

				<div className="row justify-content-around bod">
					<div className="col-lg-4 p-2 bg-white rounded shadow">
						{/* <h4>Personal box</h4> */}
						
						<div>
							{!isUploaded ? (
									<div id="selection" onChange = {handleImageChange}>
										<img src="images/blank-profile.png" alt="Photo_Profil" className="img-hold shadow"/>
										<div className=" bg-violet rounded-circle camera">
											<i className="fa fa-camera text-light camm" ></i>
										</div>
									</div>
								 ) : ( 
									<div id="selection" onChange = {handleImageChange}>
										<img id="uploaded-image" src={image} alt="upload-img" className="img-hold shadow"></img>
										<div className=" bg-violet rounded-circle camera">
											<i className="fa fa-camera text-light camm"></i>
										</div>
									</div>
								 )
							}
							
						</div>

						<div>
							<form action="">
								<div className="bg-white mt-5 py-5">
									<div className="col mx-lg-3">
										<label htmlFor="Lname" className="form-label text-violet">LastName</label>
										<input type="text" className="bordure" id="Lname" name="name" placeholder="..." aria-label="First name"/>
									</div>
									<div class="col mx-lg-3">
										<label htmlFor="passw" className="form-label text-violet">Password</label>
										<input type="password" className="bordure" id="passw" placeholder="..." aria-label="Last name"/>
									</div>
									<div class="col mx-lg-3">
										<label htmlFor="tel" className="form-label text-violet">Phone</label>
										<input type="tel" className="bordure" id="tel" placeholder="..." aria-label="Last name"/>
									</div>
								</div>	
							</form>
						</div>

					</div>
					<div className="col-lg-7 p-2 bg-light rounded shadow">
						{/* <h4>General box</h4> */}
						<div className="generail-box">
							<div className="bloc-tabs">
								<button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}><span className="text-violet">Account Setting</span></button>
								<button className={toggleState === 2 ? "tabs active-tabs" : "tabs"}onClick={() => toggleTab(2)}><span className="text-violet">Compagny Setting</span></button>
								<button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}><span className="text-violet">Notifications</span></button>
							</div>
							<div className="content-tabs">
								<div className={toggleState === 1 ? "content  active-content" : "content"}>
									<form action="">
										<div>
											<div className="row">
												<div className="col">
													<label htmlFor="name" className="form-label text-violet">Name</label>
													<input type="text" className="bordure text-violet" id="name" name="name" placeholder="..." aria-label="First name"/>
												</div>
												<div className="col">
													<label htmlFor="mail" className="form-label text-violet">Email</label>
													<input type="email" className="bordure text-violet" id="mail" placeholder="..." aria-label="Last name"/>
												</div>
											</div>
											<div className="space"></div>
											<div className="row">
												<div className="col">
													<label htmlFor="exampleFormControlTextarea1" className="form-label text-violet">WhatsApp Phone</label>
													<input type="tel" className="bordure text-violet" placeholder="..." aria-label="First name"/>
												</div>
												<div class="col">
													<label htmlFor="lieu" className="form-label text-violet">Location</label>
													<input type="text" className="bordure text-violet" id="lieu" placeholder="..." aria-label="Last name"/>
												</div>
											</div>
											<div className="space"></div>
											<div className="mb-3">
												<label htmlFor="description" className="form-label text-violet">Description</label>
												<textarea className="bordure text-violet" id="description" rows="3"></textarea>
											</div>
										</div>
										<div className="btn-div">
											<button className="btn-update">Update</button>
										</div>	
									</form>
								</div>
								<div className={toggleState === 2 ? "content  active-content" : "content"}>
									<h2>Content 2</h2>
									<hr />
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
										nostrum rerum laudantium totam unde adipisci incidunt modi alias!
										Accusamus in quia odit aspernatur provident et ad vel distinctio
										recusandae totam quidem repudiandae omnis veritatis nostrum
										laboriosam architecto optio rem, dignissimos voluptatum beatae
										aperiam voluptatem atque. Beatae rerum dolores sunt.
									</p>
								</div>
								<div className={toggleState === 3 ? "content  active-content" : "content"}>
									<h2>Content 3</h2>
									<hr />
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
										nostrum rerum laudantium totam unde adipisci incidunt modi alias!
										Accusamus in quia odit aspernatur provident et ad vel distinctio
										recusandae totam quidem repudiandae omnis veritatis nostrum
										laboriosam architecto optio rem, dignissimos voluptatum beatae
										aperiam voluptatem atque. Beatae rerum dolores sunt.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			

	);

	return(
		
		<Layout content={account} />
	);
}
export default Account;