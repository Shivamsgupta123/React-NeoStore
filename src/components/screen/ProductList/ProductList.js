import React, { Component } from 'react';
import "./ProductList.css";
import { Link } from 'react-router-dom';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import StarRatingComponent from 'react-star-rating-component';

export default class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: { data: [] }
        }
        console.log("plistprops", this.props.match.params.token)
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
                        <Link to={`/Home/${this.props.match.params.token}`}>
                            <Button className="ProductListButton"><h4 style={{ color: "white" }}>BACK</h4></Button>
                        </Link>
                    </div>
                    <div style={{ width: "60%" }}>
                        <h2 style={{ color: "#9e0100" }}>{this.props.match.params.id}</h2>
                    </div>
                    <div style={{ width: "20%", textAlign: "center" }}>
                    </div>
                </div>
                <div className="ProductListContainer3">
                    <div className="ProductListProductInfoContainer">
                        <ul >
                            {this.state.Data.data.map(item => (
                                <Link to={`/ProductDetails/${this.props.match.params.id}/${this.props.match.params.prduct_number}/${item.name}/${item.id}`} >
                                    <div className="ProductListContainer4">
                                        <img className="ProductListProductImage" src={item.product_images} />
                                        <div style={{ marginLeft: 20, marginTop: 10 }}>
                                            <u style={{ color: "white" }}><text style={{ color: "black", fontSize: 25 }}> {item.name}</text></u>
                                            <br />
                                            <u style={{ color: "white" }}> <text style={{ color: "black", fontSize: 16 }}>{item.producer}</text></u>
                                            <div className="ProductListContainer5">
                                                {/* <br /> */}
                                                <u style={{ color: "white" }}> <text style={{ color: "#9e0100", fontSize: 21 }}>Rs. {item.cost}</text></u>
                                                <div>
                                                    <StarRatingComponent
                                                        name="rate1"
                                                        starCount={5}
                                                        value={item.rating}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <div>

                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
