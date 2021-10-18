import React from "react";
import { useState,useEffect } from "react";

function Listing(props) {
    const [listData,setData] = useState({
        listID:0,
        salesP1:"",
        salesP2:"",
        assis1:"",
        assis2:"",
        date:"",
    });

    const onInputChange = e => {
        setData({...listData,[e.target.name]: e.target.value});
      }

    useEffect(() => {
       props.getData(listData);
    }, [listData])
    
  return (
    <div>
      <div className="container p-3">
        <form >
          <div className="row">
            <div className="col-md-6 col-12">
              <label for="ListingId" className="form-label">
                Listing ID
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter here"
                name="listID"
                onChange={(e) => onInputChange(e)}
              />
              <div className="row">
                <div className="col-md-6 col-12 mt-4">
                  <label for="SP1" className="form-label">
                    Sales Person 1
                  </label>
                  <select name="salesP1" className="form-select" onChange={(e) => onInputChange(e)}>
                    <option value="None">None</option>
                    <option value="John">John</option>
                  </select>
                </div>
                <div className="col-md-6 col-12 mt-4">
                  <label for="SP2" className="form-label">
                    Sales Person 2
                  </label>
                  <select className="form-select" name="salesP2" onChange={(e) => onInputChange(e)}>
                    <option value="None">None</option>
                    <option value="Doe">Doe</option>
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-12 mt-4">
                  <label for="SP1" className="form-label">
                    Listing Assistant 1
                  </label>
                  <select className="form-select" name="assis1" onChange={(e) => onInputChange(e)}>
                    <option value="None">None</option>
                    <option value="Virat">Virat</option>
                  </select>
                </div>
                <div className="col-md-6 col-12 mt-4">
                  <label for="SP1" className="form-label" >
                    Listing Assistant 2
                  </label>
                  <select className="form-select" name="assis2" onChange={(e) => onInputChange(e)}>
                    <option value="None">None</option>
                    <option value="Rohit">Rohit</option>
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <label for="date" className="mb-2">
                  Listing Creation Date
                </label>
                <input type="date" name="date" className="form-control" onChange={(e) => onInputChange(e)}/>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div class="alert alert-warning mt-4 " role="alert">
                Leave this ID blank if you want it to generate automatically.
              </div>

              <div class="alert alert-info mt-5 py-2" role="alert">
                Select this if you want to share this information with listing
                agents
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Listing;
