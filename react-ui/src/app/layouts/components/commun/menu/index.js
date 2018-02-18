import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CartIcon from '../carticon'
import './index.css';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.step = props.navigation.children.props.id;
    }
    render() {
        return (
            <div id='header'>
                <a target='_blank' rel="noopener noreferrer" href='https://jendigitalvision.herokuapp.com/'>
                    <img className='logo' alt='Jen Digital Vision & Co' src='https://storage.googleapis.com/jendigitalvision/commun/logo-black-and-white.png' />
                </a>
                <CartIcon step={this.step} />
                <div id='title'>
                    <Link to='/menu'>
                        <h3>Waldo Photos Pizza Lovers</h3>
                        <h4>By Jen Digital</h4>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Menu;
