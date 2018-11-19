import React, { Component } from 'react';
import "./ProductDetails.css";
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import _Button from '@material-ui/core/Button';
import { Button, FormGroup, FormControl, ControlLabel, Modal } from "react-bootstrap";
import StarRatingComponent from 'react-star-rating-component';
import { Alert } from 'reactstrap';


export default class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: { data: [] },
            img: '',
            show: false,
            rating: false,
            qty: '',
            pId: '',
            rate: null,
        }
        // console.log("proddetalprops", this.props.match.params.token)
    }
    componentDidMount() {
        console.log("token", localStorage.getItem("Acctoken"))
        fetch("http://staging.php-dev.in:8844/trainingapp/api/products/getDetail? product_id=" + this.props.match.params.product_id)
            .then((response) => response.json())
            .then(response => {
                this.setState({ Data: response, img: response.data.product_images[0].image, pId: response.data.id, rate: response.data.rating })
                console.log("pdetaildata", this.state.Data)
                // console.log("rating", this.state.rate)
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
    handleChange = async event => {
        await this.setState({
            [event.target.id]: event.target.value
        });
        // console.log("qty", this.state.qty)
    }

    handleHideRating = () => {
        this.setState({ rating: false });
    }
    // async onStarClick(nextValue, prevValue, name) {
    //     await this.setState({ rate: nextValue });
    //     // console.log("rating", this.state.rate)
    // }
    async onStarHover(nextValue, prevValue, name) {
        await this.setState({ rate: nextValue });
        // console.log("rating", this.state.rate)
    }

    submitRating = () => {
        let form = new FormData()
        form.append("product_id", this.state.pId);
        form.append("rating", this.state.rate);

        fetch("http://staging.php-dev.in:8844/trainingapp/api/products/setRating",
            {
                method: "POST",
                body: form
            }
        )
            .then((response) => response.json())
            .then(response => {
                if (response.status == 200) {
                    let { Data, rate } = this.state
                    alert("Rating Successfull");
                    console.log("Rating Successfull")
                    Data.data.rating = Math.abs((Data.data.rating + rate) / 2)
                    this.setState({ rating: false, rate: null, Data: Data });
                }
                else {
                    alert(response.user_msg);
                    console.log(response.user_msg)
                }
            })

    }
    submitQty = () => {

        let form = new FormData()
        form.append("product_id", this.state.pId);
        form.append("quantity", this.state.qty);
        fetch("http://staging.php-dev.in:8844/trainingapp/api/addToCart",
            {
                method: "POST",
                headers: {
                    access_token: this.props.match.params.token
                },
                body: form
            }
        )
            .then((response) => response.json())
            .then(response => {
                if (response.status == 200) {
                    alert("Item added to the cart");
                    // console.log("Item added to the cart")
                    this.setState({ show: false, qty: '' });
                }
                else {
                    alert(response.user_msg);
                    // console.log(response.user_msg)
                }
            })
    }
    render() {
        return (
            <div className="ProductDetailsContainer">
                <div className="ProductDetailsHeader">
                    <div style={{ width: "20%", textAlign: "center" }}>
                        <Link to={`/ProductList/${this.props.match.params.id}/${this.props.match.params.prduct_number}/${this.props.match.params.token}`}>
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

                        <div className="static-modal">
                            <Modal
                                show={this.state.show}
                                onHide={this.handleHide}
                                container={this}
                                aria-labelledby="contained-modal-title"
                                style={{ backgroundColor: "white", display: "flex", flex: 1, justifyContent: "center", textAlign: "center", margin: 60, position: "static" }}
                            >
                                <Modal.Header>
                                    <Modal.Title id="contained-modal-title">
                                        <h2>{this.props.match.params.product_title}</h2>
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <img className="ProductDetailsImage4" src={this.state.img} />
                                    <br />
                                    <br />
                                    Enter Qty
                            <br />
                                    <input
                                        style={{ height: 30, margin: 10, borderWidth: 3, borderColor: "black" }}
                                        type="number"
                                        id="qty"
                                        value={this.state.qty}
                                        onChange={this.handleChange}
                                    />
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button className="ProductDetailsButton2" onClick={this.handleHide}><text style={{ color: "white", fontSize: 25, fontWeight: 600 }}>CLOSE</text></Button>
                                    <Button className="ProductDetailsButton2" onClick={this.submitQty}><text style={{ color: "white", fontSize: 25, fontWeight: 600 }}>SUBMIT</text></Button>
                                </Modal.Footer>
                            </Modal>
                        </div>


                        <div className="static-modal">
                            <Modal
                                show={this.state.rating}
                                onHide={this.handleHideRating}
                                container={this}
                                aria-labelledby="contained-modal-title"
                                style={{ backgroundColor: "white", display: "flex", flex: 1, justifyContent: "center", textAlign: "center", margin: 60, position: "static" }}
                            >
                                <Modal.Header>
                                    <Modal.Title id="contained-modal-title">
                                        <h2>{this.props.match.params.product_title}</h2>
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <img className="ProductDetailsImage4" src={this.state.img} />
                                    <br />
                                    <h1><StarRatingComponent
                                        value={this.state.rate || this.state.Data.data.rating}
                                        starCount={5}
                                        // onStarClick={this.onStarClick.bind(this)}
                                        onStarHover={this.onStarHover.bind(this)}
                                        editing={true}
                                    /></h1>

                                </Modal.Body>
                                <Modal.Footer>
                                    <Button className="ProductDetailsButton2" onClick={this.handleHideRating}><text style={{ color: "white", fontSize: 25, fontWeight: 600 }}>CLOSE</text></Button>
                                    <Button className="ProductDetailsButton2" onClick={this.submitRating}><text style={{ color: "white", fontSize: 25, fontWeight: 600 }}>SUBMIT</text></Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
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
                        <button className="ProductDetailsButton1" onClick={() => this.setState({ rating: true })}><text style={{ color: "white", fontSize: 25, fontWeight: 600 }}>RATE</text></button>
                    </div>
                </div>
            </div>
        );
    }
}