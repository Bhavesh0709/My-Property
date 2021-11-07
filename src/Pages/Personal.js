import React, { useState, useEffect } from "react";
import temp from "../img/sample.svg";
import { Country, State, City } from "country-state-city";


function Personal(props) {

  const [userData,setData] = useState({
    fname:"",
    lname:"",
    countryCode:"",
    stateCode:"",
    cityCode:"",
    pinCode:0
  });

  const {fname,lname,countryCode,stateCode,cityCode,pinCode} = userData;

  const onInputChange = e => {
    setData({...userData,[e.target.name]: e.target.value});
  }
  const [showCountry, setShowCountry] = useState([]);
  const [showState, setShowState] = useState([]);
  const [showCity, setShowCity] = useState([]);
 
  
  useEffect(() => {
    setShowCountry(Country.getAllCountries());
  }, []);
  useEffect(() => {
    setShowState(State.getStatesOfCountry(userData.countryCode));
  }, [userData.countryCode]);

  useEffect(() => {
    setShowCity(City.getCitiesOfState(countryCode, stateCode));
  }, [stateCode]);

  useEffect(() => {
    props.getPersonal(userData);
},[userData.pinCode]);

  //   useEffect(() => {
  //     props.getPersonalData(userData);
  // },[userData])

    
 
  return (
    <div>
      <div className="container mt-5 p-3">
        <div className="alert alert-secondary">
          <strong>Add your personal details </strong>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 col-12 col-xs-12">
            <form>
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
                    onChange={(e) => onInputChange(e)}
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
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12 col-12">
                  <label for="Country" className="form-label">
                    Country
                  </label>
                  <select
                    
                    className="form-select"
                    name="countryCode"
                    onChange={(e) => onInputChange(e)}
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
                   
                    className="form-select"
                    name="stateCode"
                    onChange={(e) => onInputChange(e)}
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
                     className="form-select"
                    name="cityCode"
                    onChange={(e) => onInputChange(e)}
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
                    name="pinCode"
                    min="100000"
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
              </div>
              
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

export default Personal;
