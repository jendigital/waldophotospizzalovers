import React, { Component } from 'react';
import MainLayout from '../../layouts/default';

import './index.css';

export default class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MainLayout>
                <div id="menu">
                    <div className="content">                    
                        <h2>Pizzas Menu </h2>

                        <h3>Make <span>your choice !</span> </h3>

                        <div className='pizzas'>
                            <div className='pizzas-line'>
                                <div className='pizza'>
                                    <img alt='marguerita' src='https://storage.googleapis.com/waldophotospizzalovers/marguerita.jpg' />
                                    <h3>MARGUERITA</h3>
                                    <p>tomatoe, ementhal cheese, olive,</p>
                                    <p>origan</p>
                                </div>
                                <div className='pizza'>
                                    <img alt='calzone' src='https://storage.googleapis.com/waldophotospizzalovers/calzone.jpg' />
                                    <h3>CALZONE</h3>
                                    <p>
                                        tomatoe, ementhal cheese, ham,
                                    </p>
                                    <p>
                                        sunny side egg, origan
                                    </p>
                                </div>
                                <div className='pizza'>
                                    <img alt='vegetarian' src='https://storage.googleapis.com/waldophotospizzalovers/vegetarian.jpeg' />
                                    <h3>VEGETARIAN</h3>
                                    <p>
                                        tomatoe, ementhal cheese, pepper,
                                    </p>
                                    <p>
                                        muchroom, olive, origan
                                    </p>
                                </div>
                            </div>
                            <div className='pizzas-line'>
                                <div className='pizza'>
                                    <img alt='reine' src='https://storage.googleapis.com/waldophotospizzalovers/reine.jpg' />
                                    <h3>REINE (QUEEN)</h3>
                                    <p>
                                        tomatoe, ementhal cheese, ham,
                                    </p>
                                    <p>
                                        mushroom, origan
                                    </p>
                                </div>
                                <div className='pizza'>
                                    <img alt='oriental' src='https://storage.googleapis.com/waldophotospizzalovers/orientale.jpeg' />
                                    <h3>ORIENTAL</h3>
                                    <p>
                                        tomatoe, ementhal cheese, spicy 
                                    </p>
                                    <p>
                                        sausage, pepper, sunny side
                                    </p>
                                    <p>
                                        egg, origan
                                    </p>
                                </div>
                                <div className='pizza'>
                                    <img alt='american' src='https://storage.googleapis.com/waldophotospizzalovers/american.jpg' />
                                    <h3>AMERICAN</h3>
                                    <p>
                                        tomatoe, ementhal cheese, 
                                    </p>
                                    <p>
                                        ground meat, fried potatoes,
                                    </p>
                                    <p>
                                        over easy egg, bacon
                                    </p>
                                </div>
                            </div>
                            <div className='pizzas-line'>
                                <div className='pizza'>
                                    <img alt='seatime' src='https://storage.googleapis.com/waldophotospizzalovers/seatime.jpg' />
                                    <h3>SEATIME</h3>
                                    <p>
                                        tomatoe, ementhal cheese, tuna,
                                    </p>
                                    <p>
                                        pepper, sunny side egg, origan
                                    </p>
                                </div>
                                <div className='pizza'>
                                    <img alt='cannibal' src='https://storage.googleapis.com/waldophotospizzalovers/cannibal.png' />
                                    <h3>CANNIBAL</h3>
                                    <p>
                                        tomatoe, ementhal cheese, spicy 
                                    </p>
                                    <p>
                                        sausage, ham, ground meat, 
                                    </p>
                                    <p>
                                        chicken, sunny side egg, origan
                                    </p>
                                </div>
                                <div className='pizza'>
                                    <img alt='fourcheese' src='https://storage.googleapis.com/waldophotospizzalovers/fourcheese.jpg' />
                                    <h3>4 CHEESE</h3>
                                    <p>
                                        ementhal, mozarella, cheddar,
                                    </p>
                                    <p>
                                        goat cheese 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ MainLayout>
        )
    }
}