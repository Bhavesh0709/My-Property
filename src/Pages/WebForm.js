import React, { useState, useEffect } from "react";
import Listing from "./Listing";
import SideNav from "./SideNav";
import Personal from "./Personal";
import Property from "./Property";
import Stepper from "@mui/material/Stepper";
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import axios from "axios";





function WebForm() {

  const steps = ['Listing Details','Personal Information','Property Details'];

function getStepContent(step) {  
  switch (step) {
    case 0:
      return <Listing getData={getData}/>;
    case 1:
      return <Personal getPersonal={getPersonal}/>;
    case 2:
      return <Property getProperty={getProperty}/>;
    default:
      throw new Error('Unknown step');
  }
}

  const[activeStep,setActiveStep] = useState(0);
  
  const [listingData, setListingData] = useState();
  const [personalData, setPersonalData] = useState();
  const [propertyData, setPropertyData] = useState();
  
  const getData = (data) => {
    setListingData({ ...listingData, data });
  };
  
  const getPersonal = (pdata) => {
    setPersonalData({ ...personalData, pdata });
  };

  const getProperty = (prodata) => {
    setPropertyData({ ...propertyData, prodata });
  };


  
  const handleNext = () => {
    setActiveStep(activeStep + 1);
   
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const onSubmit = event => {
    alert('Data Submitted');
    
    const details = {...listingData,...personalData};
    const finalDetail = {...details,...propertyData};

    console.log("final Details => ",finalDetail);
    console.log("In submit");
    
    let axiosConfig = {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        };
    axios.post("/posts",finalDetail,axiosConfig).then((res)=>{console.log(res)});
    event.preventDefault();
  }

  // console.log("List Data = ", listingData);
  // console.log("Personal Data = ", personalData);

  return (
    <div>
      <SideNav />

      {/* <Listing getData={getData} /> */}

      {/* To store the personal details */}
      {/* <Personal getPersonalData={getPersonal} /> */}
      {/*  To store the details */}
      {/* <Property /> */}
      <div className="container my-3">
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
      </div>
      <div>
      
        {activeStep === steps.length ? (
          <div>
              <div className="container ">
                <h2 className="my-5 text-center">Thank you for your information</h2> 
                <div className="d-flex justify-content-end">
                    <button onClick={onSubmit} className="btn btn-primary">Submit Data</button> 
                </div>   
              </div>
              
              
          </div>
        ) : (
          <div>
            <div className="container">

              {getStepContent(activeStep)}
              <div className="d-flex justify-content-end ">
                  {activeStep !== 0 && (
                    <button className="btn btn-secondary" onClick={handleBack}>Back</button>
                  )}
          
                  <button onClick={handleNext}  className="btn btn-primary mx-2"> Next </button>
        
              </div>
            </div>
          </div>
        )}
      </div>
      
    </div>
  );
}

export default WebForm;
