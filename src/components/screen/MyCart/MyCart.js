import React, { Component } from 'react';
import "./MyCart.css";
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import _Button from '@material-ui/core/Button';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export default class MyCart extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="Container">
                <div className="Header">
                    <div style={{ width: "20%", textAlign: "center" }}>
                        <Link to="/Home">
                            <Button className="Button"><h4 style={{ color: "white" }}>BACK</h4></Button>
                        </Link>
                    </div>
                    <div style={{ width: "60%" }}>
                        <h2 style={{ color: "#9e0100" }}>My Cart</h2>
                    </div>
                    <div style={{ width: "20%", textAlign: "center" }}>
                        {/* <h4> hello</h4> */}
                    </div>
                </div>
                <div className="Container1">
                </div>
            </div>
        );
    }
}