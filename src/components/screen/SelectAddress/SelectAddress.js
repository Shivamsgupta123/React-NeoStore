import React, { Component } from 'react';
import "./SelectAddress.css";
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import _Button from '@material-ui/core/Button';
import { Button, FormGroup, FormControl, ControlLabel, ButtonToolbar, DropdownButton, MenuItem } from "react-bootstrap";


export default class SelectAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="SelectAddressContainer">
                <div className="SelectAddressHeader">
                    <div style={{ width: "20%", textAlign: "center" }}>
                        <Link to="/MyCart">
                            <Button className="SelectAddressButton"><h4 style={{ color: "white" }}>BACK</h4></Button>
                        </Link>
                    </div>
                    <div style={{ width: "60%" }}>
                        <h2 style={{ color: "#9e0100" }}>Select Address</h2>
                    </div>
                    <div style={{ width: "20%", textAlign: "center" }}>
                        <Link to="/AddAddress">
                            <Button className="SelectAddressButton"><text style={{ color: "white", fontSize: 30 }}>+</text></Button>
                        </Link>
                    </div>
                </div>
                <div className="SelectAddressContainer1">
                    <div className="SelectAddressContainer2">
                        <button><text className="SelectAddressText1">PLACE ORDER</text></button>
                    </div>
                </div>
            </div>
        )
    }
}