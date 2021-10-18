import React, { useState, useEffect } from "react";
import Listing from "./Listing";
import Personal from "./Personal";
import Property from "./Property";
import SideNav from "./SideNav";

function WebForm() {

  const [listingData,setListingData] = useState();
  const [personalData,setPersonalData] = useState();
  
  const getData = data =>{
    setListingData({...listingData,data});
  }

  const getPersonal = pdata =>{
    setPersonalData({...personalData,pdata});
  }

  // const onSubmit = event => {   
  //   alert('Data Submitted');
  //   console.log("In submit");
  //   console.log(userData);
  //   let axiosConfig = {
  //       headers: {
  //           "Content-Type": "application/json",
  //           "Access-Control-Allow-Origin": "*",
  //       },
  //       };    
  //   axios.post("/posts",data,axiosConfig).then((res)=>{console.log(res)});
  //   event.preventDefault();
  // }
  
  console.log("List Data = ",listingData);
  console.log("Personal Data = ",personalData);
  return (
    <div>
      <SideNav />
      {/* Listing Id of the agents */}
      <Listing getData={getData}/>

      {/* To store Personal Information */}
      <Personal personal={getPersonal}/>

      {/* To Store the Property Details */}
      <Property />
     </div>
  );
}

export default WebForm;
