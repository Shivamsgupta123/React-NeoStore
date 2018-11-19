import React, { Component } from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';
import { Button, FormGroup, FormControl, ControlLabel, Alert } from "react-bootstrap";
import TextField from '@material-ui/core/TextField';
// import { Alert} from 'react-bootstrap;
// import { GlobalAPI } from '../../lib/Globals';
// import ForgotPassword from '../ForgotPassword/ForgotPassword';
// import Routes from '../../../Routes/Routes';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Email: "",
            Password: "",
            Active: false,
            Token: ''
        };
    }

    validateForm() {
        return this.state.Email.length > 0 && this.state.Password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
    }
    login = () => {
        let formData = new FormData();
        formData.append('email', this.state.Email);
        formData.append('password', this.state.Password);
        fetch("http://staging.php-dev.in:8844/trainingapp/api/users/login",
            {
                method: "POST",
                body: formData
            }
        )
            .then((response) => response.json())
            .then(response => {
                if (response.status == 200) {
                    this.setState({ Active: true, Token: response.data.access_token })
                    localStorage.setItem("Acctoken", response.data.access_token)
                    console.log("Logindata", response.data.access_token)
                }
                else {
                    console.log("Invalid ID or Password")
                }
            })
    }

    render() {
        return (
            <div className="LoginContainer">
                <h1 style={{ color: "white" }}> NeoStore</h1>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        className={Login.InputField}
                        id="Email"
                        label={<text style={{ color: "white" }}>User ID</text>}
                        value={this.state.Email}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                    <br />
                    <TextField className="LoginInputField"
                        id="Password"
                        label={<text style={{ color: "white" }}>Password</text>}
                        value={this.state.Password}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        onChange={this.handleChange}
                    />

                    {/* <Link to="/Register"> */}
                    {
                        this.state.Active ?
                            <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
                                <Link to={`/Home/${this.state.Token}`}>
                                    <Button className="LoginButton"
                                        block
                                        bsSize="large"
                                        disabled={!this.validateForm()}
                                        type="submit"
                                        onClick={() => this.login()}
                                    >
                                        <h2 className="LoginText"> LOGIN</h2>
                                        {/* <img className="PlayButton" src={require('./iamges/play.png')} /> */}
                                    </Button>
                                </Link>
                            </div> :
                            <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
                                <Button className="LoginButton"
                                    block
                                    bsSize="large"
                                    disabled={!this.validateForm()}
                                    type="submit"
                                    onClick={() => this.login()}
                                >
                                    <h2 className="LoginText"> LOGIN</h2>
                                    {/* <img className="PlayButton" src={require('./iamges/play.png')} /> */}
                                </Button>
                            </div>
                    }
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Link to="/ForgotPassword">
                            <Button style={{ backgroundColor: "#9e0100", borderWidth: 0 }}>
                                <text style={{ color: "white", fontSize: 13 }}> Forgot Password?</text>
                            </Button>
                        </Link>
                    </div>
                    <br />
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Link to="/Registration">
                            <text style={{ color: "white", fontSize: 15 }}><u>SIGN UP</u></text>
                        </Link>
                        {/* </Link> */}
                    </div>
                </form>
            </div >

        );
    }
}


{/* <FormGroup controlId="Email" bsSize="large">
                        <ControlLabel style={{ color: "white" }}>User Id</ControlLabel>
                        <FormControl className='TextBox'
                            autoFocus
                            type="number"
                            value={this.state.Email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="Password" bsSize="large">
                        <ControlLabel style={{ color: "white" }}>Password</ControlLabel>
                        <FormControl className='TextBox'
                            type="number"
                            value={this.state.Password}
                            onChange={this.handleChange}
                        />
                    </FormGroup> */}