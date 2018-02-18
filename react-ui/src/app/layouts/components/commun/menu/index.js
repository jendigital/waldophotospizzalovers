import React, { Component } from 'react';
//import { Icon } from 'react-fa';
import './index.css';

class Menu extends Component {
    render() {
        return (
            <div id='header'>
                <img className='logo' alt='Jen Digital Vision & Co' src='https://storage.googleapis.com/jendigitalvision/commun/logo-black-and-white.png' />

                <div id='title'>
                    <h3>Waldo Photos Pizza Lovers</h3>
                    <h4>By Jen Digital</h4>
                </div>
            </div>
        );
    }
}

export default Menu;
