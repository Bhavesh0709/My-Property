import React, { Component } from "react";
import{Link} from 'react-router-dom';

export class Register extends Component {
  render() {
    return (
      <div>
        <div className="container mx-auto py-5 ">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body shadow">
                  <h5 className="navbar-brand text-center mt-3"><strong>Login</strong></h5>
                  <form>
                    <div className="mb-3 p-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="abc@gmail.com"/>
                       
                    </div>
                    <div className="mb-3 pt-2 px-3">
                    <label for="exampleInputEmail1" class="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword" placeholder="..."/>
                       
                    </div>
                  </form>
                  <div className="text-end py-3 mx-3">
                  <a href="#" className="btn btn-success">
                    Login
                  </a>
                  </div>
                  <Link to="/Register" class=" btn btn-link ">Create an account</Link>
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
