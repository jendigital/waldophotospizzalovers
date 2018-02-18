import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MainLayout from '../../layouts/default';
import Pizzas from './components/pizzas';

import './index.css';

export default class Cart extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MainLayout>
                <div id='cart'>
                    <div className='content'>                    
                        <h2>Cart</h2>
                        <h3>Check your cart</h3>
                        <Pizzas step='cart' />
                        <Link to='/confirmation'> <button>Order</button></Link>
                    </div>
                </div>
            </ MainLayout>
        )
    }
}
