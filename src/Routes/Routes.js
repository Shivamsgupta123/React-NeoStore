import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../components/screen/Login/Login';
// import Register from './Register';
import ForgotPassword from '../components/screen/ForgotPassword/ForgotPassword';
import Registration from '../components/screen/Registration/Registration';
import Home from '../components/screen/Home/Home';
import MyCart from '../components/screen/MyCart/MyCart';
import ProductList from '../components/screen/ProductList/ProductList';
import ProductDetails from '../components/screen/ProductDetails/ProductDetails';

class Routes extends Component {
    constructor(props) {
        super(props)
        this.comp = Login
        this.checkLogin()
    }

    checkLogin = () => {
        const token = localStorage.getItem("Acctoken");
        if (token)
            this.comp = Home
    }

    render() {
        return (
            // <Switch>
            <Router>
                <switch>
                    <Route exact path="/" component={this.comp} />
                    <Route exact path="/Login" component={Login} />
                    <Route path="/ForgotPassword" component={ForgotPassword} />
                    <Route path="/Registration" component={Registration} />
                    <Route path="/Home" component={Home} />
                    <Route path="/MyCart" component={MyCart} />
                    <Route path="/ProductList/:id/:prduct_number" component={ProductList} />
                    <Route path="/ProductDetails/:id/:prduct_number/:product_title/:product_id" component={ProductDetails} />
                </switch>
            </Router>

        );
    }
}

export default Routes;



