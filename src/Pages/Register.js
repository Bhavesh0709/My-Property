import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebForm from "./WebForm";
export class Register extends Component {
  
  responseGoogle=(response,e)=>{
    e.preventDefault();
    // console.log(response);
    // console.log(response.profile.Obj);
    <Switch>
        <Route to="/WebForm" component={WebForm} />
    </Switch>
    alert('Successfull login');

    console.log("Name = ",response.profileObj.name);
   
    
  }


  render(){
    return (
      <div>
        <div className="container mx-auto py-5 ">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body shadow">
                  <h5 className="navbar-brand text-center mt-3"><strong>Register</strong></h5>
                  
                  
                  <form>
                  <div className=" mt-3 p-3">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" />
                        
                    </div>
                    <div className="mb-3 p-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3 pt-2 px-3">
                    <label for="exampleInputEmail1" class="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword" />
                        <div id="emailHelp" class="form-text">Use lowercase,uppercase, digits and special symbols</div>
                    </div>
                  </form>
                  <div className="text-end mx-3 ">
                  <a href="11" className="btn btn-success">
                    Register
                  </a> &nbsp;&nbsp;
                  
                  <GoogleLogin
                    className="google-login"
                    clientId="67065215570-ffm2166jpk60a97n7fhcg0ku20nkmr1e.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                   />
    
                
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
