import React from "react";

function Property() {
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
                <label for="Category" className="form-label hd">
                  Category
                </label>
                <select className="form-select" name="Cateogry">
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
              <input type="checkbox" /> Dual occupancy?
            </div>
            <div className="row mt-3">
              <div className="col-md-6 col-12">
                <label className="form-label">Search Price</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ex: 7500"
                />
              </div>
              <div className="col-md-6 col-12">
                <label className="form-label">Price View</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ex: Offers Over $7500"
                />
              </div>
            </div>
            <div className="Checkbox mt-3">
              <input type="checkbox" /> Show Price?
              <p className="text-danger mt-2">
                *Unlock this if you want this price to be hidden
              </p>
            </div>
            <div className="Checkbox mt-3">
              <input type="checkbox" /> Under Offer/ Contract
            </div>
            <div className="row mt-2">
              <div className="col-md-6 col-12 mt-2">
                <label className="form-label">Authority</label>

                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Auction
                  </label>
                </div>

                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                  <label class="form-check-label" for="flexRadioDefault2">
                    Exclusive
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                  <label class="form-check-label" for="flexRadioDefault2">
                    Conjunctional
                  </label>
                </div>

                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                  <label class="form-check-label" for="flexRadioDefault2">
                    Open
                  </label>
                </div>

                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                  <label class="form-check-label" for="flexRadioDefault2">
                    Sale by neogitation
                  </label>
                </div>

              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-6 col-12">
                <label className="form-label">Auction Date</label>
                <input
                  type="Date"
                  className="form-control"
                  
                />
              </div>
              <div className="col-md-6 col-12">
                <label className="form-label">Auction Time</label>
                <input
                  type="time"
                  className="form-control"                 
                />
              </div>
            </div>
            
            <div className="heading mt-3">
              <label className="form-label">Auction Location</label>
              <input type="text" className="form-control" placeholder="Enter here" />
            </div>

            <div className="heading mt-3">
              <label className="form-label">Heading</label>
              <input type="text" className="form-control" placeholder="Enter here" />
            </div>

            <div class="mt-3">
              <label for="exampleFormControlTextarea1" class="form-label">Description</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="A description about your property"></textarea>
            </div>

            <div class="mt-3">
              <label for="exampleFormControlTextarea1" class="form-label">Short Description</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Something short and sweet about your property"></textarea>
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
                <label className="form-label">Home and Land Package ?</label>

                <div class="form-check">
                  <input class="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label class="form-check-label" for="flexRadioDefault1">
                    This Listing is a House and Land Package for sale
                  </label>
                </div>                     

              </div>
            </div>

            <div class="grp mt-3">
              <div className="col-md-12 col-12 mt-2">
                <label className="form-label">Duplicate Land Listing ?</label>

                <div class="form-check">
                  <input class="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label class="form-check-label" for="flexRadioDefault1">
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
                />
              </div>
              <div className="col-md-6 col-12">
                <label className="form-label">Bathrooms</label>
                <input
                  type="number"
                  className="form-control"   
                  placeholder="2"  
                  min="0"            
                />
              </div>
            </div>

            <div className="row mt-3">
            <label className="input-label mb-2">House Size</label>
              <div className="col-md-6 col-12">
                
                <div class="input-group mb-3">                    
                    <input type="text" class="form-control" placeholder="Enter here" />
                    <span class="input-group-text" id="basic-addon2">squares</span>
                </div>
              </div>
              {/* <div className="col-md-2 col-12 text-center mt-2">
                <p>or</p>
              </div> */}
              <div className="col-md-6 col-12">
                
                  <div class="input-group mb-3">                  
                      <input type="text" class="form-control" placeholder="Enter here" />
                      <span class="input-group-text" id="basic-addon2">m2</span>
                  </div>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-md-12 col-12">
                <label for="Category" className="form-label">
                  Energy Rating
                </label>
                <select className="form-select" name="Cateogry">
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
                          <select className="form-select" name="Cateogry">
                                <option value="House" active>
                                 Sq.m
                                </option>
                                <option value="1">cm</option>
                                <option value="2">mm</option>
                                <option value="3">ft</option>
                            </select>
                        </span>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-12">
                <label className="form-label">Land Frontage</label>
              <div class="input-group mb-3">                  
                    <input type="number" class="form-control" placeholder="Enter here" />
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
