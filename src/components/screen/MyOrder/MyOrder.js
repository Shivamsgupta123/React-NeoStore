import React, { Component } from 'react';
import "./MyOrder.css";
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import _Button from '@material-ui/core/Button';
import { Button, FormGroup, FormControl, ControlLabel, ButtonToolbar, DropdownButton, MenuItem } from "react-bootstrap";

export default class MyOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: { data: [] },
        }
    }
    componentDidMount() {

        // http://staging.php-dev.in:8844/trainingapp/api/orderList
        fetch("http://staging.php-dev.in:8844/trainingapp/api/orderList", { headers: { access_token: localStorage.getItem("Acctoken") } })
            .then((response) => response.json())
            .then(response => {
                if (response.data === null)
                    return;
                this.setState({ Data: response })
                console.log("MyOrder", this.state.Data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        return (
            <div className="MyOrderContainer">
                <div className="MyOrderHeader">
                    <div style={{ width: "20%", textAlign: "center" }}>
                        <Link to="/Home">
                            <Button className="MyOrderButton"><h4 style={{ color: "white" }}>BACK</h4></Button>
                        </Link>
                    </div>
                    <div style={{ width: "60%" }}>
                        <h2 style={{ color: "#9e0100" }}>My Order</h2>
                    </div>
                    <div style={{ width: "20%", textAlign: "center" }}>
                        {/* <h4> hello</h4> */}
                    </div>
                </div>
                <div className="MyOrderContainer1">
                </div>

            </div>
        )
    }

}