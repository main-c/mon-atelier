import React from 'react';
import Layout from './Layout.js';
import { useState, useEffect} from "react";
import axios from 'axios';
import './dashboard.css';
import './Account.css'


const baseURL = "https://api-mon-atelier.herokuapp.com/api/v1/workshops/";

function Account(){

	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (index) => {
		setToggleState(index);
	};
	
	//charger l'image
	
	const[imgPreview, setImgPreview] = useState(null);
	const[error, setError] = useState(false);

	const handleImageChange = (e) => {
		setError(false);
		const selected = e.target.files[0];
		const ALLOWED_TYPES = ["image/png", "image/jpg", "image/jpeg"]
		if(selected && ALLOWED_TYPES.includes(selected.type)){
			let reader = new FileReader();
			reader.onloadend = () =>{
				setImgPreview(reader.result);
			};
			reader.readAsDataURL(selected);
		} else{
			setError(true);
		}
	};


	//consommation de l'API

	const [last_name, setLast_name] = useState('');
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [phone, setPhone] = useState('');
	const [location, setlocation] = useState('');
	const [whatsapp_phone, setWhatsapp_phone] = useState('');
	const [description, setDescription] = useState('')



	function handleSubmit(e){
		e.preventDefault()
		axios.post(`https://api-mon-atelier.herokuapp.com/api/v1/workshops/?format=json`, {
			manager: {
			  last_name,
			  password,
			  email
			},
			name,
			phone,
			location,
			whatsapp_phone,
			description
		  })
			.then(res => {
			  console.log(res);
			  console.log(res.data);
			})
			 .catch(err => console.log(err));
	  }
		

	const account = (

		
			<div className="account_container">

				<div className="container-fluid bg_brofil px-0"></div>

				<div className="row justify-content-around bod">
					<div className="col-lg-4 p-2 bg-white rounded shadow">
						{/* <h4>Personal box</h4> */}
						<div>
							<div className="imgPreview" style={{background: imgPreview ? `url("${imgPreview}") no-repeat center/cover`: "#fff"}}>
								{! imgPreview && (
									<>
										<img src="images/blank-profile.png" alt="Photo_Profil" className="img-hold shadow"/>
										<label htmlFor="fileUpload" className = "customFileUpload">
											<div className=" bg-violet rounded-circle camera">
												<i className="fa fa-camera text-light camm"></i>
											</div>
										</label>
										<input type="file" id="fileUpload" onChange = {handleImageChange}/>
									</>
								)}
							</div>
							{/* {imgPreview && <button className="btn-npt" onClick={()=> setImgPreview(null)}>
								<div className=" bg-violet rounded-circle camera">
									<i className="fa fa-camera text-light camm"></i>
								</div>
							</button>} */}
							{ imgPreview && (
									<>
										{/* <img src="images/blank-profile.png" alt="Photo_Profil" className="img-hold shadow"/> */}
										<label htmlFor="fileUpload" className = "customFileUpload">
											<div className=" bg-violet rounded-circle camera position_cam">
												<i className="fa fa-camera text-light camm"></i>
											</div>
										</label>
										<input type="file" id="fileUpload" onChange = {handleImageChange} style={{display: "none"}}/>
									</>
								)}
						</div>
						{error && <p className="errorMsg">File not supported</p>} 

						<div>
							<form action="" onSubmit={handleSubmit}>
								<div className="bg-white mt-5 py-5">
									<div className="col mx-lg-3">
										<label htmlFor="last_name" className="form-label text-violet">LastName</label>
                                        <input type="text"className="bordure subject" placeholder="..." id="last_name" value={last_name} onChange={(e)=>{setLast_name(e.target.value)}} />
									</div>
									<div class="col mx-lg-3">
										<label htmlFor="password" className="form-label text-violet">Password</label>
                                        <input type="password"className="bordure subject" placeholder="..." id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
									</div>
									<div class="col mx-lg-3">
										<label htmlFor="phone" className="form-label text-violet">Phone</label>
                                        <input type="text"className="bordure text-violet subject" placeholder="..." id="phone" value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
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
									<form action="" onSubmit={handleSubmit}>
										<div>
											<div className="row">
												<div className="col">
													<label htmlFor="Fname" className="form-label text-violet">Name</label>
                                                    <input type="text"className="bordure text-violet subject" id="Fname" placeholder="..." value={name} onChange={(e)=>{setName(e.target.value)}} />
												</div>
												<div className="col">
													<label htmlFor="mail" className="form-label text-violet">Email</label>
                                                    <input type="email"className="bordure text-violet subject" placeholder="..." id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                                                    
												</div>
											</div>
											<div className="space"></div>
											<div className="row">
												<div className="col">
													<label htmlFor="whatsapp_phone" className="form-label text-violet">WhatsApp Phone</label>
                                                    <input type="tel"className="bordure text-violet subject" placeholder="..." id="whatsapp_phone" value={whatsapp_phone} onChange={(e)=>{setWhatsapp_phone(e.target.value)}} />
												</div>
												<div class="col">
													<label htmlFor="location" className="form-label text-violet">Location</label>
                                                    <input type="text"className="bordure text-violet subject" placeholder="..." id="location" value={location} onChange={(e)=>{setlocation(e.target.value)}} />
												</div>
											</div>
											<div className="space"></div>
											<div className="mb-3">
												<label htmlFor="description" className="form-label text-violet">Description</label>
                                                <textarea type="text"className="bordure text-violet subject" rows="3"  id="description" value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
											</div>
										</div>
										<div>
											<button className="btn-update" onSubmit={handleSubmit}>Update</button>
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