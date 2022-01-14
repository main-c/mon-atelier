
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Post from './post.js'

class HomeTest extends React.Component{

  state = {
    modeles: []
  }

  componentDidMount(){
    axios.get("https://api-mon-atelier.herokuapp.com/api/v1/categories/")
    .then(res => {
      const modeles = res.data.results;
      this.setState({ modeles });
    })
    .then((res) => this.setState({ modeles: res.data.results }))
      .catch((err) => console.log(err));
  }


  render(){
    return(

      <div className="container-fluid">
        <div className="row">

          { this.state.modeles.map(modele => {
            return(
              <div className="column">
                <div className="imgDiv">
                  <img src={modele.last_name} alt="" className="img-fluid" />
                  <div className="fadedbox">
                    <div className="text text-start fs-5">{modele.name}</div>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </div>

    );
  }
}

export default HomeTest;