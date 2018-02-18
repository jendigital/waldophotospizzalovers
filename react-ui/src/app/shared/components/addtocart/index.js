import React from 'react';
import './index.css';

export default function Quantity(props) {
    const step = props.step;
    const quantity = props.number;

    if((step === 'menu' || step === 'cart') && quantity !== '0') {
        return (
            <div className='addToCart'>
                <img alt='minus' src='https://storage.googleapis.com/waldophotospizzalovers/minus.png' />
                <span>{quantity}</span>
                <img alt='plus' src='https://storage.googleapis.com/waldophotospizzalovers/plus.png' />
            </div>
        );
    }

    if((step === 'menu' || step === 'cart') && quantity === '0') {
        return (
            <div className='addToCart'>
                <img alt='minus' src='https://storage.googleapis.com/waldophotospizzalovers/desactivate-minus.png' />
                <span>{quantity}</span>
                <img alt='plus' src='https://storage.googleapis.com/waldophotospizzalovers/plus.png' />
            </div>
        );
    }

    return (
        <div className='addToCart'>
            <span>{quantity}</span>
        </div>
    );
}