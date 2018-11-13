import React, { Component } from 'react';
import "./ProductList.css";
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import _Button from '@material-ui/core/Button';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export default class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: { data: [] }
        }
        // this.info = { id: this.props.match.params.id, prduct_number: this.props.match.params.prduct_number }
        console.log("props", this.props)
    }
    componentDidMount() {
        fetch("http://staging.php-dev.in:8844/trainingapp/api/products/getList?product_category_id=" + this.props.match.params.prduct_number)
            .then((response) => response.json())
            .then(response => {
                this.setState({ Data: response })
                console.log("plistdata", this.state.Data)
            })
            .catch(error => {
                console.log(error)
            })

    }

    render() {
        return (
            <div className="ProductListContainer">
                <div className="ProductListHeader">
                    <div style={{ width: "20%", textAlign: "center" }}>
                        <Link to="/Home">
                            <Button className="ProductListButton"><h4 style={{ color: "white" }}>BACK</h4></Button>
                        </Link>
                    </div>
                    <div style={{ width: "60%" }}>
                        <h2 style={{ color: "#9e0100" }}>{this.props.match.params.id}</h2>
                    </div>
                    <div style={{ width: "20%", textAlign: "center" }}>
                        {/* <h4> hello</h4> */}
                    </div>
                </div>
                <div className="ProductListContainer1">
                    <ul >
                        {this.state.Data.data.map(item => (
                            <Link to={`/ProductDetails/${this.props.match.params.id}/${this.props.match.params.prduct_number}/${item.name}/${item.id}`} >
                                {/* <img className="ProductlistImage" src={item.product_images} />
                                <u style={{ color: "white" }}><text style={{ color: "black", marginTop: 20 }}> {item.name}</text></u> */}

                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}


.ProductListContainer{
    /* background-color: #9e0100; */
    /* min-height: 100vh;  */
    flex - direction: column;
    /* align-items: center;
    justify-content: center; */
    font - size: calc(10px + 2vmin);
    color: '#bb0100';
}
.ProductListHeader{
    background - color: rgba(175, 165, 165, 0.966);
    height: 20 %;
    height: 20 %;
    width: 100 %;
    display: flex;
    flex - direction: row;
    justify - content: center;
    align - items: center;
    text - align: center
}
.ProductListContainer1{

    display: flex;
    flex: 1;
    background - color: #9e0100;
    justify - content: center;
    align - items: center;
    text - align: center;
    flex - direction: column;
    /* background-color: white; */
    /* width:100%; */
    /* height: 30%; */
    /* margin-top: 50px; */
}
.ProductListButton{
    height: 50px;
    width: 50px;
    border - radius: 25px;
    background - color: #9e0100
}
.ProductContainer{
    display: flex;
    flex: 1;
    background - color: white;
    margin: 5px;
    width: 90 %;
    /* height: 100px; */
}
.ProductlistImage{
    height: 90 %;
    width: 40 %;
    margin: 7px;

}

