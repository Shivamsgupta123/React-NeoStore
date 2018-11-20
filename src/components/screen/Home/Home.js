import React, { Component } from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
// import _Button from '@material-ui/core/Button';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Carousel from 'react-image-carousel';
import { render } from 'react-dom';
// import iamges from '../../assets/images/sofa.jpeg';
import Login from '../Login/Login';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            OpenDrawer: false
        }
        this.images = ['https://www.google.co.in/search?q=animal&rlz=1C5CHFA_enIN804IN804&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjtoNmQoq7eAhVCMY8KHfTmCjAQ_AUIDygC&biw=472&bih=615#imgrc=v6HZ1uk0AmaMJM:']
        console.log("Homeprops", this.props.match.params.token)
    }
    componentDidMount() {
        console.log("iamge", this.images[0])
    }
    openMenuBar = () => {
        this.setState({ OpenDrawer: !this.state.OpenDrawer })

    }
    logOut = () => {
        localStorage.removeItem("Acctoken")
    }
    render() {
        return (
            <div className="HomeContainer">
                <div className="HomeHeader">
                    <div style={{ width: "20%" }}>
                        <Button className="HomeButton" onClick={() => this.openMenuBar()}><h4 style={{ color: "white" }}>MENU</h4></Button>
                    </div>
                    <div style={{ width: "60%" }}>
                        <h2 style={{ color: "#9e0100" }}>NeoSTORE</h2>
                    </div>
                    <div style={{ width: "20%", textAlign: "center" }}>
                        {/* <h4> hello</h4> */}
                    </div>
                </div>
                {this.state.OpenDrawer ?
                    <div className="HomeDrawer">
                        <div style={{ width: "100%" }}>
                            <div style={{ textAlign: "center" }}>
                                <img className="HomeImage" src={require('../../assets/images/cupboard.jpg')} />
                                <br />
                                <text style={{ fontSize: 14, fontWeight: "bold" }}>Shivam Gupta</text>
                                <br />
                                <text style={{ fontSize: 11 }}>shivam@mail.com</text>
                            </div>
                            <br />
                            <br />
                            <Link to="/MyCart">
                                <u style={{ color: "white" }}> <text className="HomeText">My Cart</text></u>
                            </Link>
                            <br />
                            {/* {`/ProductList/${this.props.match.params.id}/${this.props.match.params.prduct_number}`} */}
                            <Link to="/ProductList/Tables/1">
                                <u style={{ color: "white" }}> <text className="HomeText">Tables</text></u>
                            </Link>
                            <br />
                            <Link to="/ProductList/Sofas/3">
                                <u style={{ color: "white" }}> <text className="HomeText">Sofas</text></u>
                            </Link>
                            <br />
                            <Link to="/ProductList/Chairs/2">
                                <u style={{ color: "white" }}> <text className="HomeText">Chairs</text></u>
                            </Link>
                            <br />
                            <Link to="/ProductList/Cupboards/4">
                                <u style={{ color: "white" }}> <text className="HomeText">Cupboards</text></u>
                            </Link>
                            <br />
                            <u style={{ color: "white" }}><text className="HomeText">My Account</text></u>
                            <br />
                            <u style={{ color: "white" }}><text className="HomeText">Store Loator</text></u>
                            <br />
                            <u style={{ color: "white" }}> <text className="HomeText">My Order</text></u>
                            <br />
                            <Link to="/Login"><u style={{ color: "white" }}><text className="HomeText" onClick={this.logOut}>Log Out</text></u></Link>
                        </div>
                    </div> :
                    null}
                {this.state.OpenDrawer ? null :
                    <div className="HomeContainer1">
                        <img className="HomeSwiperImage" src={require('../../assets/images/sofa.jpeg')} />
                        <div className="HomeTiles">
                            <div className="TopTiles">
                                <Link to="/ProductList/Tables/1">
                                    <div style={{ backgroundColor: "white", height: 145, width: 180, marginRight: 10 }}>
                                        <u style={{ color: "white" }}>  <h2 style={{ textAlign: "center", color: " #9e0100", paddingTop: 55 }}>Tables</h2></u>
                                    </div>
                                </Link>
                                <Link to="/ProductList/Sofas/3">
                                    <div style={{ backgroundColor: "white", height: 145, width: 180, marginLeft: 10 }}>
                                        <u style={{ color: "white" }}> <h2 style={{ textAlign: "center", color: " #9e0100", paddingTop: 55 }}>Sofas</h2></u>
                                    </div>
                                </Link>
                            </div>

                            <div className="TopTiles">
                                <Link to="/ProductList/Cupboards/4">
                                    <div style={{ backgroundColor: "white", height: 145, width: 180, marginRight: 10 }}>
                                        <u style={{ color: "white" }}>   <h2 style={{ textAlign: "center", color: " #9e0100", paddingTop: 55 }}>Cupboards</h2></u>
                                    </div>
                                </Link>
                                <Link to="/ProductList/Chairs/2">
                                    <div style={{ backgroundColor: "white", height: 145, width: 180, marginLeft: 10 }}>
                                        <u style={{ color: "white" }}>  <h2 style={{ textAlign: "center", color: " #9e0100", paddingTop: 55 }}>Chairs</h2></u>
                                    </div>
                                </Link>
                            </div>

                        </div>
                    </div>
                }
            </div>
        );
    }
}