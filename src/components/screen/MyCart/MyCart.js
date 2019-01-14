import React, { Component } from 'react';
import "./MyCart.css";
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import _Button from '@material-ui/core/Button';
import { Button, FormGroup, FormControl, ControlLabel, ButtonToolbar, DropdownButton, MenuItem } from "react-bootstrap";


export default class MyCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: { data: [] },
            ShowList: -1,

            // editQty: null
        }

    }

    componentDidMount() {
        console.log("token", localStorage.getItem("Acctoken"))
        fetch("http://staging.php-dev.in:8844/trainingapp/api/cart", { headers: { access_token: localStorage.getItem("Acctoken") } })
            .then((response) => response.json())
            .then(response => {
                if (response.data === null)
                    return;
                this.setState({ Data: response })
                console.log("Mycart", this.state.Data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    qtyBtn = (index) => {

        // this.setState({ Count: pId })
        // console.log("product id", pId)
        if (this.state.ShowList === index)
            index = -1
        this.setState({ ShowList: index })
    }
    editQty = (CountId, ItemIndx, ProductId) => () => {
        // console.log("id", CountId)
        // console.log("index", ItemIndx)
        // console.log("ProductId", ProductId)


        this.setState({ ShowList: false })

        let { Data } = this.state
        Data.data[ItemIndx].quantity = CountId
        Data.data[ItemIndx].product.sub_total = 1
        Data.data[ItemIndx].product.sub_total = Data.data[ItemIndx].product.cost * CountId
        // console.log(Data.total)


        let formData = new FormData()
        formData.append("product_id", ProductId);
        formData.append("quantity", CountId);

        fetch("http://staging.php-dev.in:8844/trainingapp/api/editCart",
            {
                method: "POST",
                headers: { access_token: localStorage.getItem("Acctoken") },
                body: formData
            }
        )
            .then((response) => response.json())
            .then(response => {
                if (response.status == 200) {
                    // Data.data[ItemIndx].product.sub_total = Data.data[ItemIndx].cost * CountId
                    // let { Data } = this.state
                    alert("Quantity Updated");
                    console.log("Quantity Updated")
                    // Data.data[ItemIndx].quantity = CountId
                    // // this.setState({ rating: false, rate: null, Data: Data });
                }
                else {
                    alert(response.user_msg);
                    console.log(response.user_msg)
                }
            })
    }

    removeItem = (ItemIndx, ProductId) => {
        console.log("index", ItemIndx)
        console.log("ProductId", ProductId)

        let formData = new FormData()
        formData.append("product_id", ProductId);
        // formData.append("quantity", CountId);

        fetch("http://staging.php-dev.in:8844/trainingapp/api/deleteCart",
            {
                method: "POST",
                headers: { access_token: localStorage.getItem("Acctoken") },
                body: formData
            }
        )
            .then((response) => response.json())
            .then(response => {
                if (response.status == 200) {
                    // Data.data[ItemIndx].product.sub_total = Data.data[ItemIndx].cost * CountId
                    // let { Data } = this.state
                    alert("Item Deleted");
                    console.log("Item Deleted")

                    // Data.data[ItemIndx].quantity = CountId
                    // // this.setState({ rating: false, rate: null, Data: Data });
                }
                else {
                    alert(response.user_msg);
                    console.log(response.user_msg)
                }
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
                    {this.state.Data.data.map((item, index) => (
                        <div className="MycartProductInfo">
                            <div>
                                <img className="MyCartImage" src={item.product.product_images} />
                            </div>
                            <div>
                                <div className="MyCartContainer5">
                                    <text className="MyCartText1">{item.product.name}</text>
                                    <button className="MyCartButton2" onClick={() => this.removeItem(index, item.product.id)}><text style={{ color: "white", fontWeight: "bold" }}>Remove</text></button>
                                </div>

                                <text className="MyCartText2">({item.product.product_category})</text>
                                <div className="MyCartContainer2">
                                    <button className="MyCartButton1" onClick={() => this.qtyBtn(index)}>{item.quantity}</button>
                                    <text style={{ color: "#9e0100", fontWeight: "bold", fontSize: 17, marginTop: 5 }}>Rs. {item.product.sub_total}</text>
                                </div>
                                {this.state.ShowList === index ?
                                    <div className="MyCartCountList">
                                        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                                            <li onClick={this.editQty(1, index, item.product.id)} style={{ cursor: "pointer" }}>1</li>
                                            <li onClick={this.editQty(2, index, item.product.id)} style={{ cursor: "pointer" }}>2</li>
                                            <li onClick={this.editQty(3, index, item.product.id)} style={{ cursor: "pointer" }}>3</li>
                                            <li onClick={this.editQty(4, index, item.product.id)} style={{ cursor: "pointer" }}>4</li>
                                            <li onClick={this.editQty(5, index, item.product.id)} style={{ cursor: "pointer" }}>5</li>
                                            <li onClick={this.editQty(6, index, item.product.id)} style={{ cursor: "pointer" }}>6</li>
                                            <li onClick={this.editQty(7, index, item.product.id)} style={{ cursor: "pointer" }}>7</li>
                                            <li onClick={this.editQty(8, index, item.product.id)} style={{ cursor: "pointer" }}>8</li>
                                        </ul>
                                    </div> :
                                    null}
                            </div>

                        </div>
                    ))
                    }

                </div>
                <div className="MyCartContainer3">
                    <div className="MyCartContainer4">
                        <text className="MyCartText1">Total</text>
                        <text style={{ color: "#9e0100", fontWeight: "bold", fontSize: 17 }}>Rs. {this.state.Data.total}</text>
                    </div>
                </div>
                <Link to="/SelectAddress">
                    <div className="MyCartContainer6">
                        <u style={{ color: "white" }}><text className="MyCartText3">ORDER NOW</text></u>
                    </div>
                </Link>
            </div>
        );
    }
}