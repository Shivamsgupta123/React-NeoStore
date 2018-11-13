import React, { Component } from 'react';
import "./ForgotPassword.css";
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import _Button from '@material-ui/core/Button';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";


export default class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: ''
        }
    }
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    submit = () => {
        console.log("id", this.state.Email)
    }

    render() {
        return (
            <div className="ForgotPasswordContainer">
                <div className="ForgotPasswordHeader">
                    <div style={{ width: "20%", textAlign: "center" }}>
                        <Link to="/">
                            <Button className="ForgotPasswordButton"><h4 style={{ color: "white" }}>BACK</h4></Button>
                        </Link>
                    </div>
                    <div style={{ width: "60%" }}>
                        <h2 style={{ color: "#9e0100" }}>Forgot Password</h2>
                    </div>
                    <div style={{ width: "20%", textAlign: "center" }}>
                        {/* <h4> hello</h4> */}
                    </div>
                </div>
                <div className="ForgotPasswordContainer1">
                    <h1 style={{ color: "white" }}> NeoStore</h1>
                    <div>
                        <TextField
                            id="Email"
                            label={<text style={{ color: "white" }}>User ID</text>}
                            value={this.state.Email}
                            onChange={this.handleChange}
                            margin="normal"
                        />
                    </div>
                    <br />
                    <div>
                        <_Button variant="extendedFab" aria-label="Delete" onClick={() => this.submit()}>
                            <h3 style={{ color: '#9e0100' }}>SUBMIT</h3>
                        </_Button>
                    </div>
                </div>

            </div>
        );
    }
}