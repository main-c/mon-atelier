import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Categories extends React.Component{

	state = {
    categories: []
  }

  componentDidMount(){
    axios.get("http://www.monatelier.comsas.club/api/v1/categories/")
    .then(res => {
      const categories = res.data.results;
      this.setState({ categories });
    })
    .then((res) => this.setState({ categories: res.data.results }))
      .catch((err) => console.log(err));
  }

render(){
	return(


				<div className="container px-auto pt-5">

					<p className='fw-bold text-center mt-5 fs-3' id="categories">CATEGORIES</p>
					<div className="mx-auto" style={{height:'4px', width:'100px', background:'#FF5566'}}></div>
					<div className="row pt-3 mx-auto categories">


					{ this.state.categories.slice(0, 6).map(category => {
						return(

						<div className="col-lg-4 mx-auto mb-3 mt-3 p-0 d-flex border rounded" style={{height:'100px', width:'350px'}}>
						    <img src="images/matoul.jpg" className="rounded-start" height="100px" alt="..." />
						    <div className="my-auto">
						    <Link to={`/articles/${category.name}`}>
					            <p className="text-violet fs-4 ms-5">{category.name}</p>
					        </Link>
						        
						    </div>
						</div>
						            );
          })}


					</div>
				</div>
		);
}

}
export default Categories;