import React from 'react';
import './index.css';

import Quantity from '../../../../shared/components/addtocart';

export default function Pizzas(props) {
    const pizzas = [{
        name: 'Marguerita',
        quantity: '3',
        avatar: 'https://storage.googleapis.com/waldophotospizzalovers/marguerita.jpg'
    }, {
        name: 'Orientale',
        quantity: '1',
        avatar: 'https://storage.googleapis.com/waldophotospizzalovers/orientale.jpeg'
    }, {
        name: 'Four Cheese',
        quantity: '2',
        avatar: 'https://storage.googleapis.com/waldophotospizzalovers/fourcheese.jpg'
    }];

    const PizzasSort = pizzas.sort(function(pizza1, pizza2) {
        let pizzaA = pizza1.name.toUpperCase(); // ignore upper and lowercase
        let pizzaB = pizza2.name.toUpperCase(); // ignore upper and lowercase

        if (pizzaA < pizzaB) {
            return -1;
        }

        if (pizzaA > pizzaB) {
            return 1;
        }

        // names must be equal
        return 0;
    });

    const PizzasBloc = PizzasSort.map(function(pizza) {
        return (
            <div className='pizza' key={pizza.name.toString()}>
                <div className='picture'>
                    <img alt={pizza.name} src={pizza.avatar} />
                </div>
                <div className='details'>
                    <p>Pizza Size Base Price</p>
                    <p>Toppings Prices</p>
                    <p>Available topping according to Size</p>
                    <Quantity step={props.step} number='0' />
                </div>
            </div>
        )
    });

    return (
        <div id='pizzas'>
            {PizzasBloc}
        </div>
    );
}