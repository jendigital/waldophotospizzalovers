import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default function CartIcon(props) {
    const step = props.step;

    if(step !== 'cart') {
        return (
            <Link to='/cart'><img id='carticon' alt='cart' src='https://storage.googleapis.com/waldophotospizzalovers/cart.png' /></Link>
        );
    }

    return null;
}