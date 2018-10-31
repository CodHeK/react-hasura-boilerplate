import React, { Component } from 'react';
import { Mutation } from "react-apollo";
import { addNameQuery } from '../queries/Queries';
import Mark from './Mark';
import $ from 'jquery';
import '../App.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      inp_data: "",
    }
  }

  inpData(e) {
    this.setState({ inp_data: e.target.value });
  }

  addName(addname, e) {
    if(e.which === 13) {
      console.log(this.state.inp_data);
      addname({
        variables: { name: e.target.value },
      })
      $(".login").fadeIn(400);
      e.target.value = "";
    }
  }

  render() {
    return (
      <Mutation mutation={addNameQuery} >
        {
          (addname, { data }) => (
            <div className="container login-main">
              <input placeholder="Enter your name..." className="input-bar form-control" onChange={this.inpData.bind(this)} onKeyPress={this.addName.bind(this, addname)} /> &nbsp;&nbsp; <Mark name={this.state.inp_data} />
              <br />
            </div>
          )
        }
      </Mutation>
    );
  }
}

export default Login;
