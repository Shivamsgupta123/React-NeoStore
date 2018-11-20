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
            Data: { data: [] },
        }
    }

    componentDidMount() {
        console.log("token", localStorage.getItem("Acctoken"))
        fetch("http://staging.php-dev.in:8844/trainingapp/api/cart", { headers: { access_token: localStorage.getItem("Acctoken") } })
            .then((response) => response.json())
            .then(response => {
                this.setState({ Data: response })
                console.log("Mycart", this.state.Data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        return (
            <div className="MyCartContainer">
                <div className="MyCartHeader">
                    <div style={{ width: "20%", textAlign: "center" }}>
                        <Link to="/Home">
                            <Button className="MyCartButton"><h4 style={{ color: "white" }}>BACK</h4></Button>
                        </Link>
                    </div>
                    <div style={{ width: "60%" }}>
                        <h2 style={{ color: "#9e0100" }}>My Cart</h2>
                    </div>
                    <div style={{ width: "20%", textAlign: "center" }}>
                        {/* <h4> hello</h4> */}
                    </div>
                </div>
                <div className="MyCartContainer1">
                    {this.state.Data.data.map(item => (
                        <div className="MycartProductInfo">
                            <div>
                                <img className="MyCartImage" src={item.product.product_images} />
                            </div>
                            <div>
                                <text className="MyCartText1">{item.product.name}</text>
                                <br />
                                <text className="MyCartText2">({item.product.product_category})</text>
                            </div>
                        </div>

                    ))
                    }
                </div>
            </div>
        );
    }
}