import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Country, State, City } from "country-state-city";

class Display extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
      countryCode: props.countryCode,
      selected: props.selectedCountry,
    };

   
  }

  render() {
    const { value, countryCode, selected } = this.state;
    return (
      <option value={value} >
        {value} {countryCode}
      </option>
    );
  }
}

export default Display;
