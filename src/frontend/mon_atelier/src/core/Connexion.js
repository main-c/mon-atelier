import React, {component} from 'react';

import ReactDOM from 'react-dom'

import zxcvbn from 'zxcvbn'


class Connect extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      type: 'password',
      score: 'null'
    }
    this.showHide = this.showHide.bind(this);
    this.passwordStrength = this.passwordStrength.bind(this);
  }
  
  showHide(e){
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      type: this.state.type === 'password' ? 'text' : 'password'
    })  
  }
  
  passwordStrength(e){
    if(e.target.value === ''){
      this.setState({
        score: 'null'
      })
    }
    else{
      var pw = zxcvbn(e.target.value);
      this.setState({
        score: pw.score
      });      
    }

  }
  
  render(){
    return(
      <label className="password">Password
      <div>
        <input type={this.state.type} className="password__input" onChange={this.passwordStrength}/>
        <input type="checkbox" checked={this.state.isChecked} className="password__show" onChange={this.showHide} /><span>{this.state.type === 'password' ? 'Show' : 'Hide'}</span>
        <span className="password__strength" data-score={this.state.score} />
        </div>
      </label>
    )
  }
}
ReactDOM.render(<Connect/>, document.getElementById('react'));

export default Connect;



