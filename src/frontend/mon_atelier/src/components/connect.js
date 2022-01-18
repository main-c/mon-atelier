import React, {Component} from 'react';

import ReactDOM from 'react-dom'
import './connect.css'
import zxcvbn from 'zxcvbn'


export default class Connect extends React.Component {
	constructor(){
		super();
		this.state={
			showPass :false
		}
	}
  
  render(){
    return(
      <label className="password">Password
      <div>
        <input type={this.state.type} className="password__input" onChange={this.passwordStrength}/>
        <input type="checkbox" checked={this.state.isChecked} className="password__show" onChange={this.showHide} /><span>{this.state.type === 'password' ? 'Show' : 'Hide'}</span>
        <span className="password__strength" data-score={this.state.score} />
        <button
        	onClick = {()=>  this.setState({showPass:this.state.showPass })}
        >
        click
        </button>
        </div>

      </label>
    )
  }
}
ReactDOM.render(<Connect/>, document.getElementById('react'));





