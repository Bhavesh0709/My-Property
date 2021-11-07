import React, { useState, useEffect } from "react";

function Property(props) {
  let authorityValue = ["Auction","Exclusive","Conjunctional","Open","Sale by negoitation"];
  const [details,setDetails] = useState({
    Cateogry:"",
    SearchPrice:0,
    ViewPrice:0,
    date:"",
    time:"",
    authority:"",
    auctionLocation:"",
    heading:"",
    description:"",
    shortDescription:"",
    bedroom:0,
    bathroom:0,
    houseSizeInSq:0,
    houseSizeInMet:0,
    energyRating:0,
    landArea:0,
    landAreaUnit:"",
    landFrontage:0

  });

  const [checkBoxes,setCheckBoxes] = useState({
    occupancy:false,
    showPrice:false,
    underContract:false,
    homeNland:false,
    duplicateLand:false,
  })

  const onInputChange = e => {
    setDetails({...details,[e.target.name]:e.target.value});
  }

  const onCheckbox = e => {
    setCheckBoxes({...checkBoxes,[e.target.name]:e.target.checked});
  }
  // console.log(details);
  // console.log(checkBoxes);
  const finalDetails = {...details,...checkBoxes};
 
  useEffect(() => {
    props.getProperty(finalDetails);
  },[details.landFrontage]);
  return (
    <div>
      <div className="container mt-5 p-3">
        <div className="alert alert-secondary">
          <strong>Property Details </strong>
        </div>
        <div className="row">
          <div className="col-md-7 col-12">
            <div className="row mt-4">
              <div className="col-md-5 col-12">
                <label for="Category" className="form-label ">
                  Category
                </label>
                <select className="form-select" name="Cateogry" onChange={(e) => onInputChange(e)}>
                  <option value="House" active> 
                    House
                  </option>
                  <option value="Flat">Flat</option>
                  <option value="Appartment">Appartment</option>
                  <option value="Bungalow">Bungalow</option>
                </select>
              </div>
            </div>
            <div className="Checkbox mt-3">
              <input type="checkbox" name="occupancy" onChange={(e) => onCheckbox(e)}/> Dual occupancy?
            </div>
            <div className="row mt-3">
              <div className="col-md-6 col-12">
                <label className="form-label">Search Price</label>
                <input
                  type="number"
                  className="form-control"
                  name="SearchPrice"
                  placeholder="Ex: 7500" onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="col-md-6 col-12">
                <label className="form-label">Price View</label>
                <input
                  type="number"
                  className="form-control"
                  name="ViewPrice"
                  placeholder="Ex: Offers Over $7500" onChange={(e) => onInputChange(e)}
                />
              </div>
            </div>
            <div className="Checkbox mt-3">
              <input type="checkbox" name="showPrice" onChange={(e) => onCheckbox(e)}/> Show Price?
              <p className="text-danger mt-2">
                *Unlock this if you want this price to be hidden
              </p>
            </div>
            <div className="Checkbox mt-3">
              <input type="checkbox" name="underContract" onChange={(e) => onCheckbox(e)}/> Under Offer/ Contract
            </div>
            <div className="row mt-2">
              <div className="col-md-6 col-12 mt-2">
                <label className="form-label">Authority</label>

                <div class="form-check">
                  
                  {authorityValue.map(result=>(
                     <div>
                    <input class="form-check-input" type="radio" value={result} name="authority" onChange={(e) => onInputChange(e)} /> 
                    <label class="form-check-label"> {result} </label>                    
                    </div>
                  ))}

                </div>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-6 col-12">
                <label className="form-label">Auction Date</label>
                <input
                  type="Date"
                  name="date"
                  className="form-control"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="col-md-6 col-12">
                <label className="form-label">Auction Time</label>
                <input
                  type="time"
                  name="time"
                  className="form-control"  
                  onChange={(e) => onInputChange(e)}               
                />
              </div>
            </div>
            
            <div className="heading mt-3">
              <label className="form-label" name="auctionLocation">Auction Location</label>
              <input type="text" className="form-control" placeholder="Enter here" onChange={(e) => onInputChange(e)}/>
            </div>

            <div className="heading mt-3">
              <label className="form-label" name="heading">Heading</label>
              <input type="text" className="form-control" placeholder="Enter here" onChange={(e) => onInputChange(e)}/>
            </div>

            <div class="mt-3">
              <label  class="form-label" name="description">Description</label>
              <textarea class="form-control"  rows="5" placeholder="A description about your property" onChange={(e) => onInputChange(e)}></textarea>
            </div>

            <div class="mt-3">
              <label  class="form-label" name="shortDescription">Short Description</label>
              <textarea class="form-control"  rows="3" placeholder="Something short and sweet about your property" onChange={(e) => onInputChange(e)}></textarea>
            </div>

            <div class="grp mt-3">
              <div className="col-md-12 col-12 mt-2">
                <label className="form-label">New or Established ?</label>

                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label class="form-check-label" for="flexRadioDefault1">
                    New Construction
                  </label>
                </div>

                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                  <label class="form-check-label" for="flexRadioDefault2">
                    Established
                  </label>
                </div>                

              </div>
            </div>

            <div class="grp mt-3">
              <div className="col-md-12 col-12 mt-2">
                <label className="form-label" >Home and Land Package ?</label>

                <div class="form-check">
                  <input class="form-check-input" type="checkbox" name="homeNland"  onChange={(e) => onCheckbox(e)}/>
                  <label class="form-check-label" >
                    This Listing is a House and Land Package for sale
                  </label>
                </div>                     

              </div>
            </div>

            <div class="grp mt-3">
              <div className="col-md-12 col-12 mt-2">
                <label className="form-label">Duplicate Land Listing ?</label>

                <div class="form-check">
                  <input class="form-check-input" type="checkbox" name="duplicateLand"  onChange={(e) => onCheckbox(e)}/>
                  <label class="form-check-label">
                    Duplicate as a land listing on realestate com au
                  </label>
                </div>                     

              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-6 col-12">
                <label className="form-label">Bedrooms</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="2"
                  min="0"
                  name="bedroom"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="col-md-6 col-12">
                <label className="form-label">Bathrooms</label>
                <input
                  type="number"
                  className="form-control"   
                  placeholder="2"
                  name="bathroom"
                  onChange={(e) => onInputChange(e)}  
                  min="0"            
                />
              </div>
            </div>

            <div className="row mt-3">
            <label className="input-label mb-2">House Size</label>
              <div className="col-md-6 col-12">
                
                <div class="input-group mb-3">                    
                    <input type="text" class="form-control" name="houseSizeInSq" placeholder="Enter here" onChange={(e) => onInputChange(e)} />
                    <span class="input-group-text" id="basic-addon2">squares</span>
                </div>
              </div>
              {/* <div className="col-md-2 col-12 text-center mt-2">
                <p>or</p>
              </div> */}
              <div className="col-md-6 col-12">
                
                  <div class="input-group mb-3">                  
                      <input type="text" class="form-control" name="houseSizeInMet" placeholder="Enter here" onChange={(e) => onInputChange(e)}/>
                      <span class="input-group-text" id="basic-addon2">m2</span>
                  </div>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-md-12 col-12">
                <label for="Energy Rating" className="form-label">
                  Energy Rating
                </label>
                <select className="form-select" name="energyRating" onChange={(e) => onInputChange(e)}>
                  <option value="House" active>
                    N/A
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              
            </div>
            <div className="row mt-4">
              <div className="col-md-6 col-12">
                <div class="input-group">        
                    <label for="Category" className="form-label">
                         Land Area
                      </label>     
                  <div class="input-group">                   
                    <input type="number" class="form-control" placeholder="Enter here" />
                        <span className="input-group-text py-0" id="basic-addon2">
                          <select className="form-select" name="landAreaUnit" onChange={(e) => onInputChange(e)}>
                                <option value="Sq.M" active>
                                 Sq.m
                                </option>
                                <option value="cm">cm</option>
                                <option value="mm">mm</option>
                                <option value="ft">ft</option>
                            </select>
                        </span>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-12">
                <label className="form-label">Land Frontage</label>
              <div class="input-group mb-3">                  
                    <input type="number" class="form-control" name="landFrontage" placeholder="Enter here" onChange={(e) => onInputChange(e)}/>
                    <span class="input-group-text" id="basic-addon2">m</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Property;
