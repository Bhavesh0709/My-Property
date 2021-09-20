import React, { useState, useEffect } from "react";
import temp from "../img/sample.svg";
import { Country, State, City } from "country-state-city";
import axios from 'axios'

function WebForm() {

//   const [user,setUser] = useState({
//     fname:"",
//     lname:""
// });    

// const {fname,lname} = user;

// const onInputChange = e => {
// setUser({...user,[e.target.name]: e.target.value});
// }
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [showCountry, setShowCountry] = useState([]);
  const [showState, setShowState] = useState([]);
  const [showCity, setShowCity] = useState([]);
  const [countryCode, setCountryCode] = useState("");
  const [stateCode, setStateCode] = useState("");
  const [cityCode, setCityCode] = useState("");
  const [pinCode, setPinCode] = useState(0);

  const nameChangeHandler = (event) => {
    setfname(event.target.value);
    console.log(event.target.value);
  };
  const lnameChangeHandler = (event) => {
    setlname(event.target.value);
    console.log(event.target.value);
  };
  const countryCodeHandler = (event) => {
    setCountryCode(event.target.value);
    console.log(event.target.value);
  };
  const stateCodeHandler = (event) => {
    setStateCode(event.target.value);
    console.log(event.target.value);
  };
  const cityCodeHandler = (event) => {
    setCityCode(event.target.value);
    console.log(event.target.value);
  };
  const pinCodeHandler = (event) => {
    setPinCode(event.target.value);
  };
  useEffect(() => {
    setShowCountry(Country.getAllCountries());
  }, []);
  useEffect(() => {
    setShowState(State.getStatesOfCountry(countryCode));
  }, [countryCode]);

  useEffect(() => {
    setShowCity(City.getCitiesOfState(countryCode, stateCode));
  }, [stateCode]);

  var data = {
    data: {
      fname,
      lname,
      countryCode,
      stateCode,
      cityCode,
      pinCode
    },
  };

  const onSubmit = event => {
    event.preventDefault();
    console.log("In submit");
    let axiosConfig = {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        };    
    axios.post("/posts",data,axiosConfig).then((res)=>{console.log(res)});
  }
  return (
    <div>
      <div className="container mt-5 p-3">
        <div className="alert alert-secondary">
          <strong>Add your personal details </strong>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 col-12 col-xs-12">
            <form onSubmit={onSubmit}>
              <div className="row">
                <div className="col-md-6 col-12">
                  <label for="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter here"
                    value={fname}
                    name="fname"
                    onChange={nameChangeHandler}
                  />
                </div>
                <div className="col-md-6 col-12">
                  <label for="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter here"
                    value={lname}
                    name="lname"
                    onChange={lnameChangeHandler}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12 col-12">
                  <label for="Country" className="form-label">
                    Country
                  </label>
                  <select
                    id="country"
                    className="form-select"
                    name="country"
                    onChange={countryCodeHandler}
                  >
                    {showCountry.map((item) => (
                      <option  key={item.id} value={item.isoCode}>{item.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-4 col-12">
                  <label for="State" className="form-label">
                    State
                  </label>
                  <select
                    id="inputState"
                    className="form-select"
                    name="state"
                    onChange={stateCodeHandler}
                  >
                    {showState.map((item) => (
                      <option key={item.id} value={item.isoCode}>{item.name}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-4 col-12">
                  <label for="State" className="form-label">
                    City
                  </label>
                  <select
                    id="inputState"
                    className="form-select"
                    name="city"
                    onChange={cityCodeHandler}
                  >
                    {showCity.map((item) => (
                      <option  key={item.id} value={item.name}>{item.name}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-4 col-12">
                  <label for="State" class="form-label">
                    Pincode
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter here"
                    name="pincode"
                    min="100000"
                    onChange={pinCodeHandler}
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-success my-5 px-3">
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-6 col-12">
            <img
              src={temp}
              className="img-fluid px-2 mx-2"
              height="200px"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebForm;
