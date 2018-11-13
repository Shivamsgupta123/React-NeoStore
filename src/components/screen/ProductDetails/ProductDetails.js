import React, { Component } from 'react';
import "./ProductDetails.css";
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import _Button from '@material-ui/core/Button';
import { Button, FormGroup, FormControl, ControlLabel, Modal } from "react-bootstrap";
import StarRatingComponent from 'react-star-rating-component';



export default class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: { data: [] },
            img: '',
            show: true
        }
        console.log("proddetalprops", this.props)
    }
    componentDidMount() {
        fetch("http://staging.php-dev.in:8844/trainingapp/api/products/getDetail? product_id=" + this.props.match.params.product_id)
            .then((response) => response.json())
            .then(response => {
                this.setState({ Data: response, img: response.data.product_images[0].image })

                // console.log("pdetaildata", this.state.Data.data.product_images[0])
                console.log("pdetaildata", this.state.Data.data.description)
            })
            .catch(error => {
                console.log(error)
            })
    }
    fun = (img1) => () => {
        this.setState({ img: img1 })
        console.log("button pressed")
    }
    handleHide = () => {
        this.setState({ show: false });
    }
    render() {
        return (
            <div className="ProductDetailsContainer">
                <div className="ProductDetailsHeader">
                    <div style={{ width: "20%", textAlign: "center" }}>
                        <Link to={`/ProductList/${this.props.match.params.id}/${this.props.match.params.prduct_number}`}>
                            <Button className="ProductDetailsButton"><h4 style={{ color: "white" }}>BACK</h4></Button>
                        </Link>
                    </div>
                    <div style={{ width: "60%" }}>
                        <h2 style={{ color: "#9e0100" }}>{this.props.match.params.product_title}</h2>
                    </div>
                    <div style={{ width: "20%", textAlign: "center" }}>
                    </div>
                </div>
                <div className="ProductDetailsContainer1">
                    <div className="ProductDetailsProductInfo">
                        <div>
                            <text style={{ fontWeight: 700, fontSize: 23 }}>{this.state.Data.data.name}</text>
                            <br />
                            {/* <br /> */}
                        </div>
                        <div className="ProductDetailsContainer2">
                            <text style={{ color: "black", fontSize: 16 }}>{this.state.Data.data.producer}</text>
                            <div style={{ marginRight: 30 }}>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={5}
                                    value={this.state.Data.data.rating}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="ProductDetailsContainer3">
                        <div className="ProductDetailsContainer4">
                            <text style={{ color: "#9e0100", fontSize: 22, fontWeight: 700 }}>Rs. {this.state.Data.data.cost}</text>
                            <img className="ProductDetailsImage1" src={require('../../assets/images/share.png')} />
                        </div>
                        <div className="ProductDetailsContainer5">
                            <img className="ProductDetailsImage2" src={this.state.img} />
                            <div>
                                {this.state.Data.data.product_images && this.state.Data.data.product_images.map(item => (
                                    <button onClick={this.fun(item.image)} style={{ margin: 7 }}><img className="ProductDetailsImage3" src={item.image} /></button>

                                ))}
                            </div>
                        </div>
                        <div className="ProductDetailsContainer6">
                            <text style={{ color: "black", fontSize: 22, fontWeight: 700 }}>DESCRIPTION</text>
                            <text style={{ color: "black", fontSize: 18, paddingTop: 6 }}>{this.state.Data.data.description}</text>
                        </div>
                    </div>
                    <div className="ProductDetailsContainer7">
                        <button className="ProductDetailsButton1" onClick={() => this.setState({ show: true })}><text style={{ color: "white", fontSize: 25, fontWeight: 600 }}>BUY</text></button>
                        <button className="ProductDetailsButton1"><text style={{ color: "white", fontSize: 25, fontWeight: 600 }}>RATE</text></button>
                    </div>
                </div>
                <div className="BuyModal">
                    <Modal
                        show={this.state.show}
                        onHide={this.handleHide}
                        container={this}
                        aria-labelledby="contained-modal-title"
                    >
                        <Modal.Header>
                            <Modal.Title id="contained-modal-title">
                                Contained Modal
            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id
                            ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
          </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.handleHide}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        );
    }
}