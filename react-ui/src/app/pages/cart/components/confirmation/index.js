import React, { Component } from 'react';
import MainLayout from '../../../../layouts/default';

import './index.css';

export default class Ambitions extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MainLayout>
                <div id='confirmation'>
                    <div className='content'>
                        <img alt='confirmation' src='' />
                    
                        <h2>Order Confirmation</h2>

                        <h3> Your order will be ready in <span> 30 minutes! </span> </h3>
                        <div id='order'>
                            <h4>
                                Order Details
                            </h4>
                            <div className='details'>
                            </div>
                        </div>
                    </div>
                </div>
            </ MainLayout>
        )
    }
}
