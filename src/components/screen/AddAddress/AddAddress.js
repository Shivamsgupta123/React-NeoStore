import React, { Component } from 'react';
import "./AddAddress.css";
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import _Button from '@material-ui/core/Button';
import { Button, FormGroup, FormControl, ControlLabel, ButtonToolbar, DropdownButton, MenuItem } from "react-bootstrap";


export default class AddAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Address: "",
            Landmark: "",
            City: "",
            State: "",
            ZipCode: "",
            Country: ""

        }
    }
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    submit = () => {
        console.log("address", this.state.Address)
    }
    render() {
        return (
            <div className="AddAddressContainer">
                <div className="AddAddressHeader">
                    <div style={{ width: "20%", textAlign: "center" }}>
                        <Link to="/SelectAddress">
                            <Button className="AddAddressButton"><h4 style={{ color: "white" }}>BACK</h4></Button>
                        </Link>
                    </div>
                    <div style={{ width: "60%" }}>
                        <h2 style={{ color: "#9e0100" }}>Add Address</h2>
                    </div>
                    <div style={{ width: "20%", textAlign: "center" }}>
                        {/* <Link to="/MyCart">
                            <Button className="AddAddressButton"><text style={{ color: "white", fontSize: 30 }}>+</text></Button>
                        </Link> */}
                    </div>
                </div>
                <div className="AddAddressContainer1">
                    <div className="AddAddressContainer2">
                        <TextField
                            className="AddAddressInputField"
                            id="Address"
                            label={<text className="AddAddressText1">Address</text>}
                            value={this.state.Address}
                            onChange={this.handleChange}
                        />
                        <br />
                        <TextField
                            className="AddAddressInputField"
                            id="Landmark"
                            label={<text className="AddAddressText1">Landmark</text>}
                            value={this.state.Landmark}
                            onChange={this.handleChange}
                        />
                        <br />
                        <TextField
                            className="AddAddressInputField"
                            id="City"
                            label={<text className="AddAddressText1">City</text>}
                            value={this.state.City}
                            onChange={this.handleChange}
                        />
                        <br />
                        <TextField
                            className="AddAddressInputField"
                            id="City"
                            label={<text className="AddAddressText1">City</text>}
                            value={this.state.City}
                            onChange={this.handleChange}
                        />
                    </div>


                </div>


            </div>
        )
    }
}