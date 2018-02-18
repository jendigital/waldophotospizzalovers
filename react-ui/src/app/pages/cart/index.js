import React, { Component } from 'react';
import MainLayout from '../../layouts/default';

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
                        <img className='logo' alt='Jen Digital Vision & Co' src='https://storage.googleapis.com/jendigitalvision/commun/logo-black-and-white.png' />
                    
                        <h2>Cart</h2>

                        <h3>Check your cart</h3>
                    </div>
                </div>
            </ MainLayout>
        )
    }
}
