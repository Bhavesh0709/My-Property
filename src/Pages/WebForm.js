// Do install the package from this website https://www.npmjs.com/package/country-state-city

import React, { Component } from "react";
import { Button, Container, Form, Row, Col, Alert } from "react-bootstrap";
import temp from "../img/sample.svg";
import { Country, State, City } from "country-state-city";
import { ICountry, IState, ICity } from "country-state-city";

class WebForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lname: "",
      country: "",
      stateCode: "",
      isLoaded: false,
      items: [],
      itemsList: [],
      itemsList1: [],
    };
  }
  

  nameChangeHandler = (event) => {
    this.setState({
      name: event.target.value,
    });
  
  };

  lnameChangeHandler = (event) => {
    this.setState({
      lname: event.target.value,
    });
  };

  countryChangeHandler = (event) => {
    this.setState({
      country: event.target.value,
      itemsList: State.getStatesOfCountry(event.target.value),
     
    });
    console.log("Country Name = ",this.state.country);
  };

  stateChangeHandler = (event) => {
    console.log("State code ", event.target.value);
    this.setState({
      stateCode:event.target.value,
      itemsList1: City.getCitiesOfState(this.state.country,event.target.value),
    })
  };

  assignCodeHandler = ( ) => {

  }
  //While submiting the form
  submitHandler = () => {
    alert(
      this.state.name +' ' +  this.state.lname + ' '+ this.state.country + ' ' + this.state.stateCode,
      
    );
  };

  componentDidMount() {
    this.setState({
      items: Country.getAllCountries(),         
    });
  }
  render() {
    var {
      name,
      lname,
      country,
      isLoaded,
      items,
      itemsList,
      itemsList1,
    } = this.state;
  
    return (
      <div>
        <Container className="mt-5 p-3">
          <Alert variant="secondary">
            <strong>Add your personal details </strong>
          </Alert>
          <Row className="mt-5">
            <Col className="col-md-6 col-12 col-xs-12">
              <Form onSubmit={this.submitHandler}>
                <Row>
                  <Col className="col-md-6 col-12">
                    <Form.Group className="mb-3" controlId="forName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="Text"
                        placeholder="Enter here"
                        value={name}
                        onChange={this.nameChangeHandler}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col className="col-md-6 col-12">
                    <Form.Group className="mb-3" controlId="forName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="Text"
                        placeholder="Enter here"
                        value={lname}
                        onChange={this.lnameChangeHandler}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <div className="State">
                  <Form.Label>Select Country</Form.Label>
                  <Form.Select
                    value={country}
                    onChange={this.countryChangeHandler}
                    required
                  >
                  {/* <option>Select your country</option> */}
                    {items.map((item) => (
                      <option value={item.isoCode}>{item.name}</option>
                    ))}
                  </Form.Select>  
                </div>
                <Row className="mt-3">
                  <Col className="col-md-4 col-12 col-xs-12 mt-1">
                    <Form.Label>Select State</Form.Label>
                    <Form.Select onChange={this.stateChangeHandler} required>
                    {/* <option>Select your state</option> */}
                      {itemsList.map((item) => (
                        
                        <option value={item.isoCode}>{item.name}</option>
                      ))}
                    </Form.Select>
                  </Col>

                  <Col className="col-md-4 col-12 col-xs-12 mt-1">
                    <Form.Label>Select City</Form.Label>
                    <Form.Select required>
                      {itemsList1.map((item) => (
                        <option>{item.name}</option>
                      ))}
                    </Form.Select>
                  </Col>

                  {/* <Col className="col-md-4 col-sm-12 col-xs-12 mt-1">
                    <Form.Group controlId="forSuburban">
                      <Form.Label>Suburban</Form.Label>
                      <Form.Control type="Text" placeholder="Enter here" />
                    </Form.Group>
                  </Col> */}

                  <Col className="col-md-4 col-12 col-xs-12 mt-1">
                    <Form.Group controlId="forSuburban">
                      <Form.Label>Pincode</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter here"
                        min="100000"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Button
                  type="submit"
                  className="btn btn-success  my-5 px-3"
                  onSubmit={temp}
                >
                  Submit
                </Button>
              </Form>
            </Col>

            <Col className="col-md-6 col-sm-12 col-xs-12">
              <img
                src={temp}
                className="img-fluid px-2 mx-2"
                height="200px "
              ></img>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default WebForm;
