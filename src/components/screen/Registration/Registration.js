import React, { Component } from 'react';
import "./Registration.css";
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
// import _Button from '@material-ui/core/Button';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export default class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FirstName: '',
            LastName: '',
            Email: '',
            Password: '',
            ConfirmPassword: '',
            Gender: '',
            PhoneNumber: '',
            isChecked: false


        }
    }
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    register = () => {
        console.log("fname", this.state.FirstName)
        console.log("fname", this.state.LastName)
        console.log("fname", this.state.Email)
        console.log("fname", this.state.Password)
        console.log("fname", this.state.ConfirmPassword)
        console.log("fname", this.state.PhoneNumber)
    }

    setGender(event) {
        console.log("gender", event.target.value);
    }
    //check box
    toggleChange = async () => {
        await this.setState({
            isChecked: !this.state.isChecked,
        });
        console.log("checked", this.state.isChecked)
    }
    render() {
        return (
            <div className="RegistrationContainer">
                <div className="RegistrationHeader">
                    <div style={{ width: "20%", textAlign: "center" }}>
                        <Link to="/">
                            <Button className="RegistrationButton"><h4 style={{ color: "white" }}>BACK</h4></Button>
                        </Link>
                    </div>
                    <div style={{ width: "60%" }}>
                        <h2 style={{ color: "#9e0100" }}>Registration</h2>
                    </div>
                    <div style={{ width: "20%", textAlign: "center" }}>
                        {/* <h4> hello</h4> */}
                    </div>
                </div>
                <div className="RegistrationContainer1">
                    <h1 style={{ color: "white" }}> NeoStore</h1>
                    <TextField
                        id="FirstName"
                        label={<text style={{ color: "white", fontSize: 20 }}>First Name</text>}
                        value={this.state.FirstName}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                    <TextField
                        id="LastName"
                        label={<text style={{ color: "white", fontSize: 20 }}>Last Name</text>}
                        value={this.state.LastName}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                    <TextField
                        id="Email"
                        label={<text style={{ color: "white", fontSize: 20 }}>Email</text>}
                        value={this.state.Email}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                    <TextField
                        id="Password"
                        label={<text style={{ color: "white", fontSize: 20 }}>Password</text>}
                        value={this.state.Password}
                        onChange={this.handleChange}
                        margin="normal"
                        type="password"
                    />
                    <TextField
                        id="ConfirmPassword"
                        label={<text style={{ color: "white", fontSize: 20 }}>Confirm Password</text>}
                        value={this.state.ConfirmPassword}
                        onChange={this.handleChange}
                        margin="normal"
                        type="password"
                    />
                    <div style={{ marginTop: 25 }} onChange={this.setGender.bind(this)}>
                        <text style={{ color: 'white', fontSize: 18 }}> Gender</text>
                        <input type="radio" value="MALE" name="gender" /><text style={{ color: 'white', fontSize: 15 }}> Male</text>
                        <input type="radio" value="FEMALE" name="gender" /><text style={{ color: 'white', fontSize: 15 }}> Female</text>
                    </div>
                    <TextField
                        id="PhoneNumber"
                        label={<text style={{ color: "white", fontSize: 20 }}>Phone Number</text>}
                        value={this.state.PhoneNumber}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                    <label style={{ color: "white", fontSize: 12 }}>
                        <input type="checkbox"
                            checked={this.state.isChecked}
                            onChange={this.toggleChange}
                        />
                        <text > I accept terms & conditions</text>
                    </label>
                    {/* {React.createElement('input', { type: 'checkbox', defaultChecked: false })} */}
                    <Button className="RegistrationButton1" onClick={() => this.register()}>
                        <h2 style={{ color: "#9e0100" }}>REGISTER</h2>
                    </Button>

                </div>
            </div>

        );
    }
}