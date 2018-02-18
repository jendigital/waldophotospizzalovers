import React, { Component } from 'react'
import { Route } from 'react-router'

import Menu from './pages/menu'
import Cart from './pages/cart'
import Confirmation from './pages/cart/components/confirmation'

class App extends Component {
    render() {
        return (
            <div id="container">
                <Route exact path='/' render={() => <Menu store={this.props.store} history={this.props.history} />} />
                <Route exact path='/menu' render={() => <Menu store={this.props.store} history={this.props.history} />} />
                <Route exact path='/cart' render={() => <Cart store={this.props.store} history={this.props.history} />} />
                <Route exact path='/confirmation' render={() => <Confirmation store={this.props.store} history={this.props.history} />} />
            </div>
        )
    }
}

export default App
